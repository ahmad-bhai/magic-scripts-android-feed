export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
        let incomingId = searchParams.get('id');

        if (!incomingId) {
            return res.status(200).json({ authorized: false, error: "ID parameters missing" });
        }

        const projectID = "reactions-maker-site";
        const dbURL = `https://${projectID}-default-rtdb.firebaseio.com/users.json`;

        const response = await fetch(dbURL);
        const allUsers = await response.json();
        
        let isRegisteredUser = false;
        let userEmail = "";
        let logoUrl = "";

        if (allUsers) {
            for (let key in allUsers) {
                if (allUsers[key] && String(allUsers[key].id) === String(incomingId).trim()) {
                    if (allUsers[key].status === "active") {
                        isRegisteredUser = true;
                        userEmail = allUsers[key].email ? String(allUsers[key].email).trim() : "";
                        // Firebase se custom logo URL nikalna
                        logoUrl = allUsers[key].logo ? String(allUsers[key].logo).trim() : "";
                    }
                    break;
                }
            }
        }

        if (isRegisteredUser) {
            res.setHeader('Content-Type', 'text/plain');
            
            // Email aur Logo dono ko payload mein format karein: F[email]|[logoUrl]
            let payload = "F";
            if (userEmail) {
                payload += userEmail;
            }
            if (logoUrl) {
                payload += "|" + logoUrl;
            }

            return res.status(200).send(payload);
        } else {
            return res.status(200).json({ authorized: false });
        }

    } catch (error) {
        return res.status(200).json({ authorized: false, error: error.message });
    }
}

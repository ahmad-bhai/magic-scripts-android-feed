// ─── UPGRADED API HANDLER ───
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

        if (allUsers) {
            for (let key in allUsers) {
                if (allUsers[key] && String(allUsers[key].id) === String(incomingId).trim()) {
                    if (allUsers[key].status === "active") {
                        isRegisteredUser = true;
                        userEmail = allUsers[key].email ? String(allUsers[key].email).trim() : "";
                    }
                    break;
                }
            }
        }

        // ─── EXPLICIT RETURN LOGIC ───
        if (isRegisteredUser) {
            res.setHeader('Content-Type', 'text/plain');
            
            // Agar email exist karti hai toh "F" + email, warna sirf "F"
            if (userEmail && userEmail.length > 0) {
                return res.status(200).send("F" + userEmail);
            } else {
                return res.status(200).send("F");
            }
        } else {
            return res.status(200).json({ authorized: false });
        }

    } catch (error) {
        return res.status(200).json({ authorized: false, error: error.message });
    }
}

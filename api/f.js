export default async function handler(req, res) {
    // CORS headers - Handles preflight and methods
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        // URL parameters se data nikalna
        const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
        let incomingId = searchParams.get('id');

        if (!incomingId) {
            return res.status(200).json({ authorized: false, error: "ID parameters clear nahi hain" });
        }

        const projectID = "reactions-maker-site";
        const dbURL = `https://${projectID}-default-rtdb.firebaseio.com/users.json`;

        const response = await fetch(dbURL);
        
        if (!response.ok) {
            return res.status(200).json({ authorized: false, error: "Firebase connection issue" });
        }

        const allUsers = await response.json();
        let isRegisteredUser = false;
        let userEmail = "";

        if (allUsers) {
            // Firebase data ko loop karke ID aur Active status check karna
            for (let key in allUsers) {
                if (allUsers[key] && String(allUsers[key].id) === String(incomingId).trim()) {
                    if (allUsers[key].status === "active") {
                        isRegisteredUser = true;
                        // User ki registered email nikal li (Default empty string rakhi agar na ho)
                        userEmail = allUsers[key].email ? String(allUsers[key].email).trim() : "";
                    }
                    break;
                }
            }
        }

        // ─── UPGRADED SYSTEM LOGIC ───
        if (isRegisteredUser) {
            res.setHeader('Content-Type', 'text/plain');
            // Humne 'F' ke sath user ki email chipka kar bhej di (e.g., "Fuser@gmail.com")
            return res.status(200).send("F" + userEmail);
        } else {
            // Agar user active nahi hai ya register nahi hai
            return res.status(200).json({ authorized: false });
        }

    } catch (error) {
        return res.status(200).json({ authorized: false, error: error.message });
    }
}

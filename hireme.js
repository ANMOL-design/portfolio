const sendEmail = require("./sendmail");
const express = require("express");
const router = express.Router();

router.post("/hireme", (req, res) => {

    try {
        const { name, email, Contact, city, Message } = req.body;

        console.log(name, email, Contact, city, Message)

        if (!name || !email || !Contact || !city || !Message) {
            res.status(500).json({ msg: "Error Occur" });
        } else {
            sendEmail(name, email, Contact, city, Message);
            res.status(200).json({ msg: "Email Send Success" });
        }
    } catch (error) {
        console.log("error occcured " + error);
    }
});

module.exports = router;
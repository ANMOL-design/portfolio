var nodemailer = require('nodemailer');

const sendEmail = async(name, email, Contact, city, Message) => {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: 'agroacers.team@gmail.com',
            pass: 'AgroAcers123'
        }
    });

    var mailOptions = {
        from: 'agroacers.team@gmail.com',
        to: 'anmolgarg263@gmail.com',
        subject: 'Regarding Portofolio Message',
        html: `
        <p>Hello Anmol Garg,</p>
        <p>We Have a New message For You from your portfolio</p>
        <ul style="padding-left: 20px;">
            <li>Name : ${name}.</li>
            <li>Email : ${email}</li>
            <li>Contact : ${Contact}.</li>
            <li>City : ${city}.</li>
            <li>Mesaage: <br />${Message}</li>
        </ul>
        `
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
module.exports = sendEmail
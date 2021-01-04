const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const serveStatic = require("serve-static");
const nodemailer = require("nodemailer");
const history = require('connect-history-api-fallback')
// const connect = require('connect');

const { getMaxListeners } = require("process");

const app = express();

app.use(history())

// Vue application
app.use(serveStatic(__dirname + "/dist"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/contact", (req, res) => {
    // TODO
    // send email here
    console.log(req.body);
    const subject = req.body.subject;
    const from = req.body.email;
    const output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Phone: ${req.body.phone}</li>
            <li>Subject: ${req.body.subject}</li>
            </ul>
            <h3>Message</h3>
            <p>${req.body.message}</p>
    `;
    main(output, subject, from, res).catch(console.error);
});

async function main(output, subject, from, res) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp-relay.sendinblue.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "javanocollins@gmail.com", // generated ethereal user
            pass: "UA8EFbGfVkQz7ISq", // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `${from} <jdcollins242@gmail.com>`, // sender address
        to: "javanocollins@gmail.com", // list of receivers
        subject: subject, // Subject line
        text: "Hello world?", // plain text body
        html: output, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    res.sendFile(path.join(__dirname, "./public", "contact-success.html"));
}

const port = process.env.PORT || 5000;
app.listen(port);

console.log("server started " + port);

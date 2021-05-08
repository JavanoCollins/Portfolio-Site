const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const serveStatic = require("serve-static");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const sgMail = require('@sendgrid/mail')
const history = require("connect-history-api-fallback");
const app = express();
const herokuPing = require("heroku-self-ping");

require("dotenv").config();

app.use(history());
herokuPing.default(`${process.env.APP_URL}`);

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

sgMail.setApiKey(
    "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"
);

async function main(output, subject, from, res) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport(sendgridTransport({
        auth: {
            api_key: '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'
        }
    }));

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `javanocollins@gmail.com`, // sender address
        to: "jdcollins242@gmail.com", // list of receivers
        subject: subject, // Subject line
        text: "Hello world?", // plain text body
        html: output, // html body
    });

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.sendFile(path.join(__dirname, "./public", "contact-success.html"));
}

const port = process.env.PORT || 5000;
app.listen(port);

console.log("server started " + port);

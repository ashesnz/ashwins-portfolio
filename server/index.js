const keys = require('./keys');

//Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    port: 465,               // true for 465, false for other ports
    host: "smtp.zoho.com",
    auth: {
        user: keys.zohoUser,
        pass: keys.zohoPassword,
    },
    secure: true,
});

// Express route handlers

app.get('/',(req, res) => {
   res.send('Hi');
});

app.post('/sendemail', async (req, res) => {
    if (req && req.body && req.body.formdata) {
        const mailData = {
            from: 'ashwin@thakur.co.nz',  // sender address
            to: 'ashwin@thakur.co.nz',   // list of receivers
            subject: 'Email from Ashwin Portfolio',
            text: `Details
            ---------------------------------------------------------------
            Name: ${req.body.formdata.name}
            Email: ${req.body.formdata.email}
            Subject: ${req.body.formdata.subject}
            Message: ${req.body.formdata.message}
            ---------------------------------------------------------------`
        };

        transporter.sendMail(mailData, (error, info) => {
            if (error) {
                return console.log(error);
            }
            res.status(200).send({message: "Mail sent.", message_id: info.messageId});
        });
    }
});

app.listen(5000, err => {
    console.log('Listening');
});
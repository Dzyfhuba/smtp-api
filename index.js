const nodemailer = require('nodemailer');
const express = require('express')
const app = express()
const port = 2000

app.post('/', function (req, res) {
    let transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: req.body.from_email,
            pass: req.body.password
        }
    });

    const message = {
        from: req.body.from_email,
        to: req.body.to_email,
        subject: req.body.subject,
        html: req.body.message
    };
    transport.sendMail(message, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info);
        }
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
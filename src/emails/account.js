const { info } = require("console")
const nodemailer = require("nodemailer")
const Mail = require("nodemailer/lib/mailer")

// step 1
let transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    },
    tls: {
        rejectUnauthorized: false,
    },
})

// // step 2
// let mailOptions = {
//     from: 'freegamerzx@outlook.com',
//     to: 'freegamerzx@gmail.com',
//     subject: 'Testing if this works',
//     text: 'It works hahahaha hunyzaa is crazy'
// }

// // step 3
// transporter.sendMail(mailOptions, function(err, data) {
//     if(err)
//         console.error(err);
//     else
//         console.log("Email sent successfully.\n" + data.response)
// })



const sendWelcomeEmail = (email, name) => {
    let mailOptions = {
        from: 'freegamerzx@outlook.com',
        to: email,
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    }
    // step 3
    transporter.sendMail(mailOptions, function(err, data) {
        if(err)
            console.error(err);
        // else
        //     console.log("Email sent successfully.\n" + data.response)
    })
}

const sendDeleteEmail = (email, name) => {
    let mailOptions = {
        from: 'freegamerzx@outlook.com',
        to: email,
        subject: 'Account Deletion IMP!',
        text: `Hey ${name},

        We noticed you canceled your account. No worries!
        
        Did you expect something different, or was something you needed missing in our service? Your feedback helps us improve, so it would be great to hear from you.
        
        Best,
        Sufyaan Khateeb.`
    }
    // step 3
    transporter.sendMail(mailOptions, function(err, data) {
        if(err)
            console.error(err);
        // else
            // console.log("Email sent successfully.\n" + data.response)
    })
}

module.exports = {
    sendWelcomeEmail,
    sendDeleteEmail
}
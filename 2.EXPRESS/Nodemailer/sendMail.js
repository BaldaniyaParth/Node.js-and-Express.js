const nodemailer = require("nodemailer");


const sendMail = (req,res) => {

    let transpoter =  nodemailer.createTransport({
        service : "gmail",
        auth : {
            user: 'your-email-id',
            pass: 'your-password'
        },
    });

    let info = {
        from : "your-email-id" ,
        to : "send-email-id",
        subject : "Hello Nodemailer",
        text : "This is test account",
    };

    transpoter.sendMail(info, (err) => {
        console.log(err);
    })
}

module.exports = sendMail;
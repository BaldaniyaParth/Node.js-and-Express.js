const nodemailer = require("nodemailer");

// const sendMail = async (req,res) => {
//     let testAccount = await nodemailer.createTestAccount();

//     let transpoter =  await nodemailer.createTransport({
//         host : "smtp.ethereal.email",
//         port : 587,
//         auth : {
//             // user : testAccount.user,
//             // pass : testAccount.pass,
//             user: 'abe.emard57@ethereal.email',
//             pass: 'fB6MdhgXDYFDS3WMS1'
//         },
//     });

//     let info = await transpoter.sendMail({
//         from : '"Parth Baldaniya" <parthbaldaniya94277@gmail.com>'    ,
//         to : "parthbaldaniya212@gmail.com",
//         subject : "Hello Nodemailer",
//         text : "This is test account",
//     })

//     console.log("message sent : %s", info.messageId);

//     res.json(info);
// }


const sendMail = (req,res) => {

    let transpoter =  nodemailer.createTransport({
        service : "gmail",
        auth : {
            user: 'parthbaldaniya35678@gmail.com',
            pass: 'cmmn pcay vaoe osrs'
        },
    });

    let info = {
        from : "parthbaldaniya94277@gmail.com>" ,
        to : "parthbaldaniya212@gmail.com",
        subject : "Hello Nodemailer",
        text : "This is test account",
    };

    transpoter.sendMail(info, (err) => {
        console.log(err);
    })
}

module.exports = sendMail;
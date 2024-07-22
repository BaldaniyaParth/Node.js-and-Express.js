const nodeMailer = require("nodemailer");
require("dotenv").config();

const transporter = nodeMailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendMail = async (email) => {
  try {
    var mailOption = {
      from: process.env.SMTP_MAIL,
      to: email,
      subject: "Cron Test Mail",
      html: "<p> Hii this is cron testing mail </p>",
    };

    transporter.sendMail(mailOption, (err, info) => {
      if (err) {
        console.log(err);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { sendMail };
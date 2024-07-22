const cron = require("node-cron");
const user = require("../models/userModel");
const sendUserMail = require("./nodemailer");
require("dotenv").config;

const sendMailAllUser = async (req,res) => {
    try {
        cron.schedule("*/10 * * * *", async () => {
            var usersData = await user.find({});
            if(usersData.length > 0){
                var emails = [];
                usersData.map( (key) => {
                    emails.push(key.email);
                })
                sendUserMail.sendMail(emails);
            }
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = {sendMailAllUser};

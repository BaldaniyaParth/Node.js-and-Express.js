const express = require("express");
const sendMailUser = require("./helper/cron");
require("./db/connect");

const PORT = 3000;

const app = express();

sendMailUser.sendMailAllUser();    

app.listen(PORT, () => {
    console.log(`PORT running at ${PORT}`);
})
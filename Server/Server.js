require("dotenv").config();
const express = require('express');
const app = express();

const routes = require("./routes");

app.use("/",routes);

const host = process.env.HOST;
const port = process.env.PORT;

app.listen(port, host, error => {
    if(error)
        console.log("Error occured: "+error);
    console.log(`Server is online on ${host}:${port}`);
});
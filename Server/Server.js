require("dotenv").config();
const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/",routes);

const host = process.env.HOST;
const port = process.env.PORT;

app.listen(port, host, error => {
    if(error)
        console.log("Error occured: "+error);
    console.log(`Server is online on ${host}:${port}`);
});
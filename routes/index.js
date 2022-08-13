const express = require("express");
const route = express.Router();
const { authorize } = require("../functions/authFunc");

route.get("/", authorize, (req, res) => {
  res.render("index.ejs", { tabName: "Feel The Note", user: req.user });
});

module.exports = route;

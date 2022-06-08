const { Router } = require("express");
const controllers = require("./controllers");

const routes = Router();

routes.get("/set-call-id/:id", controllers.setCallId);

routes.get("/get-call-id/:id", controllers.getCallId);

module.exports = routes;

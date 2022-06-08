const { Router } = require("express");
const controllers = require("./controllers");

const routes = Router();

routes.post("/api/set-call-id/:id", controllers.setCallId);

routes.get("/api/get-call-id/:id", controllers.getCallId);

module.exports = routes;

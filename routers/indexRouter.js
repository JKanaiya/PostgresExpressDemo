const { Router } = require("express");
const {
  getUserNames,
  createUsernamePost,
  createUsernameGet,
} = require("../controllers/indexController");
const indexRouter = Router();

indexRouter.get("/", (req, res) => getUserNames);
indexRouter.get("/new", (req, res) => createUsernameGet);
indexRouter.post("/new", (req, res) => createUsernamePost);

module.exports = indexRouter;

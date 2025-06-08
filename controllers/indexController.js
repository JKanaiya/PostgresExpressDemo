const db = require("../db/queries");

const getUserNames = async function (req, res) {
  const userNames = await db.getAllUserNames();
  console.log("Usernames: ", userNames);
  res.send("Usernames: " + userNames.map((user) => user.userName).join(", "));
};

const createUsernameGet = function (req, res) {};

const createUsernamePost = async function (req, res) {
  const { userName } = req.body;
  await db.insertUsername(userName);
  res.redirect("/");
};

module.exports = {
  getUserNames,
  createUsernameGet,
  createUsernamePost,
};

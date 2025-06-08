const pool = require("./pool");

const getAllUserNames = async function () {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
};

const insertUsername = async function (username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
};

module.exports = {
  getAllUserNames,
  insertUsername,
};

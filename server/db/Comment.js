const Sequelize = require("sequelize");
const db = require("./database.js");

const Comment = db.define("comment", {
  message: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Comment;

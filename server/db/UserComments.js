const Sequelize = require("sequelize");
const db = require("./database.js");

//through table, adds boolean to check if user is owner of comment or just associated
const UserComments = db.define("user_comments", {
  isAuthor: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = UserComments;

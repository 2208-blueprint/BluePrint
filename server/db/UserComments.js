const Sequelize = require("sequelize");
const db = require("./database.js");

const UserComments = db.define("user_component", {
  isAuthor: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = UserComments;

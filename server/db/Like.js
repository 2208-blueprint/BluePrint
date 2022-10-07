const Sequelize = require("sequelize");
const db = require("./database.js");

const Like = db.define("like", {
  liked: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = Like;

const Sequelize = require("sequelize");
const db = require("./database.js");

const Favorite = db.define("favorite", {
  favorited: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = Favorite;

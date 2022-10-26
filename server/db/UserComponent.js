const Sequelize = require("sequelize");
const db = require("./database.js");

//custom through table, adds booleans to distinguish users based on different booleans
const UserComponent = db.define("user_component", {
  isAuthor: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  isFavorite: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  isSaved: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = UserComponent;

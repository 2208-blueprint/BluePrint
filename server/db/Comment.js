const Sequelize = require("sequelize");
const db = require("./database.js");

const Comment = db.define("comment", {
  message: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Comment;

/* 
comment belongs to component
component has many comments

comment belongs to user
user has many comments

likes belong to user
user has many likes

likes belong to comment
comment has many likes
*/

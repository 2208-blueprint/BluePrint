const Sequelize = require("sequelize");
const db = require("./database.js");

const Comment = db.define("comment", {
  message: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
// Comment.prototype.getReplyingTo = async function () {
//   return await this.Sequelize.model.findByPk(this.replyId);
// };
// Comment.prototype.setReplyingTo = async function (comment) {
//   return await this.update({ replyId: comment.id });
// };

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

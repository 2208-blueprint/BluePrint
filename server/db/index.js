const db = require("./database");
const User = require("./User");
const Component = require("./Component");
const UserComponent = require("./UserComponent");
const Comment = require("./Comment");
const UserComments = require("./UserComments");
const axios = require("axios");

User.belongsToMany(Component, { through: UserComponent });
Component.belongsToMany(User, { through: UserComponent });
//primary key = the instance
//foreign key = the associated model
//other key = changes the name of the magic method
User.belongsToMany(User, {
  through: "user_followers",
  //assigns the source model the id of follower
  foreignKey: "creator_id",
  //assigns the target model the id of following
  otherKey: "following_id",
  //changes the name of the magic method
  as: "followers",
});
User.belongsToMany(User, {
  through: "user_followers",
  foreignKey: "following_id",
  otherKey: "creator_id",
  as: "following",
});

Comment.belongsTo(Component);
Component.hasMany(Comment);
Comment.belongsToMany(User, { through: UserComments });
User.belongsToMany(Comment, { through: UserComments });

//users: ben, cathal, alec
//source model ben has the foreign key of following_id, thomas has the key of creator_id. ben is following the creator thomas.
// ben.addFollowing(thomas);
// cathal.addFollowing(thomas);
// alec.addFollowing(thomas);
//source model cathal has the foreign key of creator_id, thomas has the key of following_id. cathal is adding thomas as a follower (following)
// cathal.addFollower(thomas);

module.exports = {
  db,
  models: {
    User,
    Component,
    Comment,
    UserComments,
    UserComponent,
  },
};

const db = require("./database");
const User = require("./User");
const Component = require("./Component");
const UserComponent = require("./UserComponent");
const Comment = require("./Comment");
const UserComments = require("./UserComments");
const axios = require("axios");

User.belongsToMany(Component, { through: UserComponent });
Component.belongsToMany(User, { through: UserComponent });

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

// Comment.hasMany(Comment, { as: "Replies", foreignKey: "replyId" });

Comment.belongsToMany(User, { through: UserComments });
User.belongsToMany(Comment, { through: UserComments });

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });

    const thomas = await User.create({
      username: "Thomas",
      password: "test",
    });

    const ben = await User.create({
      username: "Ben",
      password: "test",
    });
    const cathal = await User.create({
      username: "Cathal",
      password: "test",
    });
    const alec = await User.create({
      username: "Alec",
      password: "test",
    });
//     //source model ben has the foreign key of following_id, thomas has the key of creator_id. ben is following the creator thomas.
//     ben.addFollowing(thomas);
//     cathal.addFollowing(thomas);
//     alec.addFollowing(thomas);
//     //source model cathal has the foreign key of creator_id, thomas has the key of following_id. cathal is adding thomas as a follower (following)
//     cathal.addFollower(thomas);
//     const item = await Component.create({
//       name: "Test Button",
//       type: "button",
//       framework: "html",
//       stylingFramework: "css",
//     });
//     const item2 = await Component.create({
//       name: "Test Slider",
//       type: "slider",
//       framework: "react",
//       stylingFramework: "less",
//     });
//     // await ben.addComponent(item, { through: { isAuthor: true } });
//     // await ben.addComponent(item2, { through: { isAuthor: false } });
//     // console.log("added item");
//     // const owned = await ben.getComponents();

//     // console.log("owned", owned);
//     // console.log("🌱🌱  Seeding Successful  🌱🌱");

//     const subscriberKing = await User.findByPk(1, {
//       include: [{ model: User, as: "followers", attributes: ["username"] }],
//     });
//     await ben.removeFollowing(thomas);
//     const afterRemoving = await User.findByPk(1, {
//       include: [{ model: User, as: "followers", attributes: ["username"] }],
//     });
//     // const subscribedTo = await User.findByPk(2, {
//     //   include: [{ model: User, as: "following" }],
//     // });
//     // console.log("should be thomas", subscribedTo.following[0]);
  } catch (err) {
    console.log(err);
  }
};

// syncAndSeed();

//Model relationships go here

module.exports = {
  // Include your models in this exports object as well!
  db,
  models: {
    User,
    Component,
    Comment, 
    UserComments, 
    UserComponent 
  }
};

//Delay function

// let myPromise = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve("Count");
//     }, 100);
// });

const db = require("./database");
const User = require("./User");
const Component = require("./Component");
const UserComponent = require("./UserComponent");
const axios = require("axios");

User.belongsToMany(Component, { through: UserComponent, foreignKey: "userId" });
Component.belongsToMany(User, {
  through: UserComponent,
  foreignKey: "componentId",
});

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });

    const ben = await User.create({
      username: "Ben",
      password: "test",
    });
    const item = await Component.create({
      name: "Test Button",
      type: "button",
      framework: "html",
      stylingFramework: "css",
    });
    const item2 = await Component.create({
      name: "Test Slider",
      type: "slider",
      framework: "react",
      stylingFramework: "less",
    });
    await ben.addComponent(item, { through: { isAuthor: true } });
    await ben.addComponent(item2, { through: { isAuthor: false } });
    console.log("added item");
    const owned = await ben.getComponents();

    console.log(
      "owned",
      owned.filter((item) => item.user_component.dataValues.isAuthor)
    );
    console.log("🌱🌱  Seeding Successful  🌱🌱");
  } catch (err) {
    console.log(err);
  }
};

syncAndSeed();

//Model relationships go here

module.exports = {
  // Include your models in this exports object as well!
  db,
};

//Delay function

// let myPromise = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve("Count");
//     }, 100);
// });

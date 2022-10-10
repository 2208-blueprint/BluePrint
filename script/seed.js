"use strict";

const { db, User, Component } = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
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
  //source model ben has the foreign key of following_id, thomas has the key of creator_id. ben is following the creator thomas.
  ben.addFollowing(thomas);
  cathal.addFollowing(thomas);
  alec.addFollowing(thomas);
  //source model cathal has the foreign key of creator_id, thomas has the key of following_id. cathal is adding thomas as a follower (following)
  cathal.addFollower(thomas);
  const item = await Component.create({
    name: "Test Button2",
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
  console.log("🌱🌱  Seeding Successful  🌱🌱");
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;

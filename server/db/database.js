const Sequelize = require("sequelize");
//this stops sequel from logging each query in console
const config = {
  logging: false,
};
//set env variable logging to true to see logs
if (process.env.LOGGING === "true") {
  delete config.logging;
}
//heroku needs this to connect to postgres with right config
if (process.env.DATABASE_URL) {
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}
//initialize database, if deployed use postgres url in env variable, else use local verison
const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/blueprint`,
  config
);
module.exports = db;

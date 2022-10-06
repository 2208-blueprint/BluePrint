const Sequelize = require("sequelize");
const db = require("./database.js");

const Component = db.define("component", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: Sequelize.STRING,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  framework: {
    type: Sequelize.ENUM("react", "html"),
    allowNull: false,
  },
  stylingFramework: {
    type: Sequelize.ENUM("css", "less", "sass"),
    allowNull: false,
  },
  img: {
    type: Sequelize.STRING,
    defaultValue: "../../public/component-placeholder-image.png",
  },
  preview_video: {
    type: Sequelize.STRING,
  },
  markup: {
    type: Sequelize.TEXT,
  },
  stylesheet: {
    type: Sequelize.TEXT,
  },
  js: {
    type: Sequelize.TEXT,
  },
  // less: {
  //   type: Sequelize.TEXT,
  // },
  // sass: {
  //   type: Sequelize.TEXT,
  // },
});
//depending on enum value, we conditionally render code editor with correct tabs and buttons. we could include file to

module.exports = Component;

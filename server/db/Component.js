const Sequelize = require("sequelize");
const db = require("./database.js");

const Component = db.define("component", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  type: {
    type: Sequelize.ENUM(
      "animation",
      "button",
      "drop-down",
      "footer",
      "form",
      "graphic",
      "icon",
      "info-card",
      "mobile",
      "navbar",
      "slider",
      "misc"
    ),
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
    defaultValue: "/component-placeholder-image.png",
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
  tags: {
    type: Sequelize.STRING,
    set(val) {
      this.setDataValue("tags", val?.join(";"));
    },
  },
  wasFirst: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  currentPoints: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  src: {
    type: Sequelize.STRING,
  },
});

module.exports = Component;

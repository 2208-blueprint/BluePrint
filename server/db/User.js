const Sequelize = require("sequelize");
const db = require("./database.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const axios = require("axios");
const Comment = require("./Comment");
const Component = require("./Component");

// if not in production environment, I want access to the JWT key
if (process.env.NODE_ENV !== "production") {
  require("../../secrets.js");
}
const SALT_ROUNDS = 5;

const User = db.define("user", {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    validate: { len: 6 },
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    // allowNull: false,
    validate: {
      isEmail: true,
    },
    unique: true,
  },
  country: {
    type: Sequelize.STRING,
    defaultValue: "Not specified",
  },
  img: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true,
    },
    defaultValue:
      "https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg",
  },
  highestRank: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  currentPoints: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  wasFirst: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  wasFirstDisplayed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  hadTopComponent: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  hadTopComponentDisplayed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  newUserUnlocked: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  newUserDisplayed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  twoFavoriteUnlocked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  twoFavoriteDisplayed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  tenFavoriteUnlocked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  tenFavoriteDisplayed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  twentyFiveFavoriteUnlocked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  twentyFiveFavoriteDisplayed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  fiftyFavoriteUnlocked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  fiftyFavoriteDisplayed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  twoSaveUnlocked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  twoSaveDisplayed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  tenSaveUnlocked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  tenSaveDisplayed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  twentyFiveSaveUnlocked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  twentyFiveSaveDisplayed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  fiftySaveUnlocked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  fiftySaveDisplayed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  twoFollowsUnlocked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  twoFollowsDisplayed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  tenFollowsUnlocked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  tenFollowsDisplayed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  twentyFiveFollowsUnlocked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  twentyFiveFollowsDisplayed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  fiftyFollowsUnlocked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  fiftyFollowsDisplayed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

/**
 * instanceMethods
 */
User.prototype.correctPassword = function (candidatePwd) {
  //we need to compare the plain version to an encrypted version of the password
  return bcrypt.compare(candidatePwd, this.password);
};

User.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWT);
};

/**
 * classMethods
 */
User.authenticate = async function ({ username, password }) {
  const user = await this.findOne({ where: { username } });

  if (!user || !(await user.correctPassword(password))) {
    const error = Error("Incorrect username/password");
    error.status = 401;
    throw error;
  }
  return user.generateToken();
};

User.findByToken = async function (token) {
  try {
    const { id } = await jwt.verify(token, process.env.JWT);
    const user = User.findByPk(id, {
      include: [Comment, Component],
    });
    if (!user) {
      throw "No user with that token found";
    }
    return user;
  } catch (ex) {
    const error = Error("Bad token");
    error.status = 401;
    throw error;
  }
};

User.beforeCreate(async (user) => {
  let hashed = await bcrypt.hash(user.password, 5);
  user.password = hashed;
});

// User.beforeUpdate(async (user) => {
//   if (user.password) {
//     let hashed = await bcrypt.hash(user.password, 5);
//     user.password = hashed;
//   }
// });

/**
 * hooks
 */
const hashPassword = async (user) => {
  //in case the password has been changed, we want to encrypt it with bcrypt
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
};

module.exports = User;

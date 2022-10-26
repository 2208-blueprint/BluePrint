const User = require("../db/User.js");
const Component = require("../db/Component.js");
const Comment = require("../db/Comment.js");
const router = require("express").Router();
const sequelize = require;

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
//get all components
router.get("/", async (req, res, next) => {
  try {
    const components = await Component.findAll({
      order: [["currentPoints", "DESC"]],
      include: [
        {
          model: User,
          through: { where: { isAuthor: true } },
          attributes: ["username"],
        },
        {
          model: Comment,
        },
      ],
    });
    res.send(components);
  } catch (error) {
    next(error);
  }
});

// Create a component by logged in user
router.post("/create", requireToken, async (req, res, next) => {
  try {
    const component = await Component.create(req.body);
    const user = req.user;
    user.addComponent(component, { through: { isAuthor: true } });
    res.status(201).send(component);
  } catch (error) {
    next(error);
  }
});

//get component by id
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const component = await Component.findByPk(id, {
      include: [User, Comment],
    });
    res.send(component);
  } catch (error) {
    next(error);
  }
});

//update component by id
router.put("/:id", requireToken, async (req, res, next) => {
  try {
    const id = req.params.id;
    const component = await Component.findByPk(id);
    await component.update(req.body);
    res.send(component);
  } catch (error) {
    next(error);
  }
});

//delete component by id
router.delete("/:id", requireToken, async (req, res, next) => {
  try {
    const id = req.params.id;
    const component = await Component.findByPk(id);
    await component.destroy();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

//add favorite to component
router.post("/:componentId/favorite", requireToken, async (req, res, next) => {
  try {
    //get the component
    const id = req.params.componentId;
    const user = req.user;
    const component = await Component.findByPk(id, {
      include: {
        model: User,
        through: { where: { isAuthor: true } },
        attributes: ["id", "highestRank", "currentPoints"],
      },
    });
    //total up the points
    const points = component.currentPoints + 10;
    const componentAuthor = component.users[0];
    //change the points of the component author, update highest points if new current points is greater
    if (componentAuthor) {
      const userPoints = componentAuthor.currentPoints + 10;
      if (userPoints > componentAuthor.highestRank) {
        await componentAuthor.update({
          currentPoints: userPoints,
          highestRank: userPoints,
        });
      } else {
        await componentAuthor.update({
          currentPoints: userPoints,
        });
      }
    }
    //update component points
    await component.update({ currentPoints: points });
    //add favorite to component
    await component.addUser(user, { through: { isFavorite: true } });
    const users = await component.getUsers();
    //check components total favorites, update component author's achievements if requirements are met
    const favoritedUsers = users.filter(
      (user) => user["user_component"].isFavorite
    );
    if (favoritedUsers.length >= 2) {
      await componentAuthor.update({ twoFavoriteUnlocked: true });
    }
    if (favoritedUsers.length >= 10) {
      await componentAuthor.update({ tenFavoriteUnlocked: true });
    }
    if (favoritedUsers.length >= 25) {
      await componentAuthor.update({ twentyFiveFavoriteUnlocked: true });
    }
    if (favoritedUsers.length >= 50) {
      await componentAuthor.update({ fiftyFavoriteUnlocked: true });
    }
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

//remove favorite from component, see add favorite for similar logic
router.delete(
  "/:componentId/remove-favorite",
  requireToken,
  async (req, res, next) => {
    try {
      const id = req.params.componentId;
      const user = req.user;
      const component = await Component.findByPk(id, {
        include: {
          model: User,
          through: { where: { isAuthor: true } },
          attributes: ["id", "currentPoints"],
        },
      });
      const componentAuthor = component.users[0];
      if (componentAuthor) {
        const userPoints = componentAuthor.currentPoints - 10;
        await componentAuthor.update({
          currentPoints: userPoints,
        });
      }
      const points = component.currentPoints - 10;
      await component.update({ currentPoints: points });
      console.log(component.currentPoints);
      await component.addUser(user, { through: { isFavorite: false } });
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
);

//save component, see add favorite for logic
router.post("/:componentId/save", requireToken, async (req, res, next) => {
  try {
    const id = req.params.componentId;
    const user = req.user;
    const component = await Component.findByPk(id, {
      include: {
        model: User,
        through: { where: { isAuthor: true } },
        attributes: ["id", "highestRank", "currentPoints"],
      },
    });
    const points = component.currentPoints + 20;
    const componentAuthor = component.users[0];
    if (componentAuthor) {
      const userPoints = componentAuthor.currentPoints + 20;
      if (userPoints > componentAuthor.highestRank) {
        await componentAuthor.update({
          currentPoints: userPoints,
          highestRank: userPoints,
        });
      } else {
        await componentAuthor.update({
          currentPoints: userPoints,
        });
      }
    }
    await component.update({ currentPoints: points });
    console.log(component.currentPoints);
    await component.addUser(user, { through: { isSaved: true } });
    const users = await component.getUsers();
    const savedUsers = users.filter((user) => user["user_component"].isSaved);
    if (savedUsers.length >= 2) {
      await componentAuthor.update({ twoSaveUnlocked: true });
    }
    if (savedUsers.length >= 10) {
      await componentAuthor.update({ tenSaveUnlocked: true });
    }
    if (savedUsers.length >= 25) {
      await componentAuthor.update({ twentyFiveSaveUnlocked: true });
    }
    if (savedUsers.length >= 50) {
      await componentAuthor.update({ fiftySaveUnlocked: true });
    }
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

//remove save from component, see add favorite for logic
router.delete(
  "/:componentId/remove-save",
  requireToken,
  async (req, res, next) => {
    try {
      const id = req.params.componentId;
      const user = req.user;
      const component = await Component.findByPk(id, {
        include: {
          model: User,
          through: { where: { isAuthor: true } },
          attributes: ["id", "currentPoints"],
        },
      });
      const points = component.currentPoints - 20;
      const componentAuthor = component.users[0];
      if (componentAuthor) {
        const userPoints = componentAuthor.currentPoints - 20;
        await componentAuthor.update({
          currentPoints: userPoints,
        });
      }
      await component.update({ currentPoints: points });
      console.log(component.currentPoints);
      await component.addUser(user, { through: { isSaved: false } });
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
);
//get all components by type, used in sidebar
router.get("/category/:type", async (req, res, next) => {
  try {
    const target = req.params.type;
    let sortedComponents;
    if (target === "less" || target === "css") {
      sortedComponents = await Component.findAll({
        where: {
          stylingFramework: target,
        },
      });
    } else if (target === "html" || target === "react") {
      sortedComponents = await Component.findAll({
        where: {
          framework: target,
        },
      });
    } else {
      sortedComponents = await Component.findAll({
        where: {
          type: target,
        },
      });
    }

    res.send(sortedComponents);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

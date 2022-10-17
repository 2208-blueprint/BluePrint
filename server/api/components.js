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
// WORKS
router.get("/", async (req, res, next) => {
  try {
    const components = await Component.findAll({
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
// Works
router.post("/test-create", async (req, res, next) => {
  try {
    const component = await Component.create(req.body);
    res.status(201).send(component);
  } catch (error) {
    next(error);
  }
});

// Create a component by logged in user
// WORKS
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
// WORK
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

// //get all favorites on a component
// router.get("/:componentId/favorites", async (req, res, next) => {
//   try {
//     const id = req.params.componentId;
//     const component = await Component.findByPk(id);
//     const favorites = await Component.getFavorites();
//     res.send(favorites);
//   } catch (error) {
//     next(error);
//   }
// });

//add favorite to component
// WORKS
router.post("/:componentId/favorite", requireToken, async (req, res, next) => {
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
    const points = component.currentPoints + 10;
    const componentAuthor = component.users[0];
    const userPoints = componentAuthor.currentPoints + 10;
    if (userPoints > componentAuthor.highestRank) {
      await componentAuthor.update({
        currentPoints: userPoints,
        highestRank: userPoints,
      });
      console.log(componentAuthor.currentPoints);
    } else {
      await componentAuthor.update({
        currentPoints: userPoints,
      });
      console.log(componentAuthor.currentPoints);
    }
    await component.update({ currentPoints: points });
    await component.addUser(user, { through: { isFavorite: true } });
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});
//remove favorite from component
// WORKS
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
      const userPoints = componentAuthor.currentPoints - 10;
      await componentAuthor.update({
        currentPoints: userPoints,
      });
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

//save component
// WORKS
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
    await component.update({ currentPoints: points });
    console.log(component.currentPoints);
    await component.addUser(user, { through: { isSaved: true } });
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

//remove save from component
// WORKS
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
      const userPoints = componentAuthor.currentPoints - 20;
      await componentAuthor.update({
        currentPoints: userPoints,
      });
      await component.update({ currentPoints: points });
      console.log(component.currentPoints);
      await component.addUser(user, { through: { isSaved: false } });
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
);

router.get("/category/:type", async (req, res, next) => {
  try {
    const target = req.params.type;
    const sortedComponents = await Component.findAll({
      where: {
        type: target,
      },
    });
    res.send(sortedComponents);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

const User = require("../db/User.js");
const Component = require("../db/Component.js");
const router = require("express").Router();

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    res.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
//get all components
router.get("/", async (req, res, next) => {
  try {
    const components = await Component.findAll();
    res.send(components);
  } catch (error) {
    next(error);
  }
});
//get component by id
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const component = await Component.findByPk(id);
    res.send(component);
  } catch (error) {
    next(error);
  }
});

router.post("/test-create", async (req, res, next) => {
  try {
    const component = await Component.create(req.body);
    res.status(201).send(component);
  } catch (error) {
    next(error);
  }
});

//get all favorites on a component
router.get("/:componentId/favorites", async (req, res, next) => {
  try {
    const id = req.params.componentId;
    const component = await Component.findByPk(id);
    const favorites = await Component.getFavorites();
    res.send(favorites);
  } catch (error) {
    next(error);
  }
});
//add favorite to component
router.post("/:componentId/favorite", requireToken, async (req, res, next) => {
  try {
    const id = req.params.componentId;
    const user = req.user;
    const component = await Component.findByPk(id);
    const favorite = await Favorite.create();
    await component.addLike(favorite);
    await user.addLike(favorite);
    res.status(201).send(favorite);
  } catch (error) {
    next(error);
  }
});
//remove favorite from component
router.delete(
  "/:componentId/remove-favorite",
  requireToken,
  async (req, res, next) => {
    try {
      const id = req.params.componentId;
      const user = req.user;
      const favorite = await Favorite.findOne({
        where: {
          userId: user.id,
          componentId: id,
        },
      });
      await favorite.destroy();
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

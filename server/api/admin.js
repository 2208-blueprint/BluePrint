const User = require("../db/User.js");
const Component = require("../db/Component.js");
const router = require("express").Router();

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    if (!user.isAdmin) {
      throw new Error("You don't have admin rights!");
    }
    next();
  } catch (error) {
    next(error);
  }
};

// create a new event (takes event details in req.body)
router.post("/user", requireToken, async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.send(newUser);
  } catch (ex) {
    next(ex);
  }
});

// delete a user (takes a userId in req.body)
router.put("/delete-user/:id", requireToken, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.sendStatus(204);
  } catch (ex) {
    next(ex);
  }
});
router.get("/top-components", async (req, res, next) => {
  try {
    const topComponents = await Component.findAll({
      limit: 5,
      order: [["currentPoints", "DESC"]],
      include: {
        model: User,
        through: { isSaved: true, isFavorite: true },
        attributes: ["username"],
      },
    });

    res.send(topComponents);
  } catch (ex) {
    next(ex);
  }
});
router.get("/top-users", async (req, res, next) => {
  try {
    const topUsers = await User.findAll({
      limit: 5,
      order: [["currentPoints", "DESC"]],
      include: {
        model: Component,
        through: { where: { isAuthor: true } },
        required: true,
      },
    });
    res.send(topUsers);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;

const User = require("../db/User.js");
const Component = require("../db/Component.js");
const router = require("express").Router();

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

//gets top 5 components based on score
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
    const topComponentUsers = topComponents[0].users;
    for (let i = 0; i < topComponentUsers.length; i++) {
      let current = topComponentUsers[i];
      if (current["user_component"].dataValues.isAuthor) {
        console.log("blooooooop", current);
        const winner = await User.findOne({
          where: { username: current.username },
        });
        await winner.update({ hadTopComponent: true });
        break;
      }
    }
    res.send(topComponents);
  } catch (ex) {
    next(ex);
  }
});
//gets top 5 users based on score
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
    await topUsers[0].update({ wasFirst: true });
    res.send(topUsers);
  } catch (ex) {
    next(ex);
  }
});
//route used to update achievement boolean in user
router.put("/awardAchievement", requireToken, async (req, res, next) => {
  try {
    const user = req.user;
    await user.update(req.body);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

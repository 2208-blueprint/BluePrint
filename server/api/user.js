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
//sends components user has saved but is not author of
router.get("/components", requireToken, async (req, res, next) => {
  try {
    const user = req.user;
    const components = await user.getComponents();
    const savedComponents = components.filter(
      (item) => item.user_component.dataValues.isAuthor === false
    );
    res.send(components);
  } catch (error) {
    next(error);
  }
});
//sends list of creators user is following
router.get("/creators", requireToken, async (req, res, next) => {
  try {
    const user = req.user;
    const creators = await user.getFollowing();
    res.send(creators);
  } catch (error) {
    next(error);
  }
});
//sends list of followers following user
router.get("/followers", requireToken, async (req, res, next) => {
  try {
    const user = req.user;
    const followers = await user.getFollowers();
    res.send(followers);
  } catch (error) {
    next(error);
  }
});

//follow a user
router.put("/follow/:userId", requireToken, async (req, res, next) => {
  try {
    const id = req.params.userId;
    const user = req.user;
    const creator = await User.findByPk(id);
    await user.addFollowing(creator);
    res.send(user);
  } catch (error) {
    next(error);
  }
});
//unfollow a user
router.put("/unfollow/:userId", requireToken, async (req, res, next) => {
  try {
    const id = req.params.userId;
    const user = req.user;
    const creator = await User.findByPk(id);
    await creator.removeFollowers(user);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

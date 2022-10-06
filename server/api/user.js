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

router.get("/components", requireToken, async (req, res, next) => {
  try {
    const user = req.user;
    const components = await user.getComponents();
    //filter out created
    req.send(components);
  } catch (error) {
    next(error);
  }
});
router.get("/creators", requireToken, async (req, res, next) => {
  try {
    const user = req.user;
    const creators = await user.getFollowing();
    req.send(creators);
  } catch (error) {
    next(error);
  }
});
router.get("/followers", requireToken, async (req, res, next) => {
  try {
    const user = req.user;
    const followers = await user.getFollowers();
    req.send(followers);
  } catch (error) {
    next(error);
  }
});
router.put("/follow/:userId", requireToken, async (req, res, next) => {
  try {
    const id = req.params.userId;
    const user = req.user;
    const creator = await User.findByPk(id);
    await user.addFollowing(creator);
    req.send(user);
  } catch (error) {
    next(error);
  }
});
router.put("/unfollow/:userId", requireToken, async (req, res, next) => {
  try {
    const id = req.params.userId;
    const user = req.user;
    const creator = await User.findByPk(id);
    await user.removeFollowing(creator);
    req.send(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

const User = require("../db/User.js");
const Component = require("../db/Component.js");
const Comment = require("../db/Comment.js");

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

// get user profile
// WORKS
router.get("/profile", requireToken, async (req, res, next) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    next(err);
  }
});

// get all users who have created
// Works
router.get("/allUsers", async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["username", "firstName", "lastName", "img", "id"],
      include: [
        Component,
        {
          model: User,
          as: "followers",
          attributes: ["id", "username", "img"],
        },
      ],
    });
    res.send(users);
  } catch (err) {
    next(err);
  }
});

//sends components user has saved but is not author of
// WORKS
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
//WORKS
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
//WORKS
router.get("/followers", requireToken, async (req, res, next) => {
  try {
    const user = req.user;
    const followers = await user.getFollowers();
    res.send(followers);
  } catch (error) {
    next(error);
  }
});
router.get("/following", requireToken, async (req, res, next) => {
  try {
    const user = req.user;
    const following = await user.getFollowing();
    res.send(following);
  } catch (error) {
    next(error);
  }
});
router.get("/:userId/followers", async (req, res, next) => {
  try {
    const id = req.params.userId;
    const user = await User.findByPk(id);
    const followers = await user.getFollowers();
    res.send(followers);
  } catch (error) {
    next(error);
  }
});

//follow a user
//WORKS
router.put("/follow/:userId", requireToken, async (req, res, next) => {
  try {
    const id = req.params.userId;
    const user = req.user;
    const creator = await User.findByPk(id);
    await user.addFollowing(creator);
    const creatorPoints = creator.currentPoints + 20;
    if (creatorPoints > creator.highestRank) {
      await creator.update({
        highestRank: creatorPoints,
        currentPoints: creatorPoints,
      });
    } else {
      await creator.update({
        currentPoints: creatorPoints,
      });
    }
    res.send(creator);
  } catch (error) {
    next(error);
  }
});
//unfollow a user
//WORKS
router.put("/unfollow/:userId", requireToken, async (req, res, next) => {
  try {
    const id = req.params.userId;
    const user = req.user;
    const creator = await User.findByPk(id);
    await user.removeFollowing(creator);
    const creatorPoints = creator.currentPoints - 20;
    await creator.update({ currentPoints: creatorPoints });
    res.send(creator);
  } catch (error) {
    next(error);
  }
});

// get all likes with associated comments from user
// Dont need?????
router.get("/likes", requireToken, async (req, res, next) => {
  try {
    const user = req.user;
    const comments = await user.getComments();
    const likes = comments.filter((comment) => {
      return comment.user_comments.dataValues.isAuthor === false;
    });
    res.send(likes);
  } catch (error) {
    next(error);
  }
});

//get all favorites with associated components from user
// Dont need???
router.get("/favorites", requireToken, async (req, res, next) => {
  try {
    const user = req.user;
    const favorites = await Favorite.find({
      where: { userId: user.id },
      include: Component,
    });
    res.send(favorites);
  } catch (error) {
    next(error);
  }
});

// get user by Id
// WORKS
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id, {
      include: [
        Component,
        {
          model: User,
          as: "following",
          attributes: ["id", "username", "img"],
        },
        {
          model: User,
          as: "followers",
          attributes: ["id", "username", "img"],
        },
      ],
      attributes: ["username", "firstName", "lastName", "img", "currentPoints", "wasFirst", "highestRank"],
    });
    res.send(user);
  } catch (error) {
    next(error);
  }
});

// update user's information (takes new details in req.body)
// WORKS
router.put("/:id", requireToken, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    user.set(req.body);
    await user.save();
    res.send(user);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;

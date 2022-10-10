const User = require("../db/User.js");
const Component = require("../db/Component.js");
const Comment = require("../db/Comment.js");
const Like = require("../db/Like.js");
const router = require("express").Router();

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    res.user = user;
    next();
  } catch (error) {
    alert("Please login in order to make comments.");
  }
};

//get all comments made by a user
router.get("/user", requireToken, async (req, res, next) => {
  try {
    const user = req.user;
    const comments = await user.getComments();
    res.send(comments);
  } catch (error) {
    next(error);
  }
});

//get all comments on a single component
router.get("/component/:componentId", async (req, res, next) => {
  try {
    const id = req.params.componentId;
    const component = await Component.findByPk(id);
    const comments = await component.getComments();
    res.send(comments);
  } catch (error) {
    next(error);
  }
});

//get all likes on a comment
router.get("/:commentId/likes", async (req, res, next) => {
  try {
    const id = req.params.commentId;
    const comment = await Comment.findByPk(id);
    const likes = await component.getLikes();
    res.send(likes);
  } catch (error) {
    next(error);
  }
});
//add like to comment
router.post("/:commentId/like", requireToken, async (req, res, next) => {
  try {
    const id = req.params.commentId;
    const user = req.user;
    const comment = await Comment.findByPk(id);
    const like = await Like.create();
    await comment.addLike(like);
    await user.addLike(like);
    res.status(201).send(like);
  } catch (error) {
    next(error);
  }
});
//remove like from comment
router.delete("/:commentId/unlike", requireToken, async (req, res, next) => {
  try {
    const id = req.params.commentId;
    const user = req.user;
    const like = await Like.findOne({
      where: {
        userId: user.id,
        commentId: id,
      },
    });
    await like.destroy();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

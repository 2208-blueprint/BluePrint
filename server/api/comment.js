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
    alert("Please login in order to make comments.");
  }
};

//get all comments made by a user
// I dont think we need this, but SHOULD work
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
//WORKS
router.get("/component/:componentId", async (req, res, next) => {
  try {
    const id = req.params.componentId;
    const component = await Component.findByPk(id);
    const comments = await Comment.findAll({
      where: {
        componentId: component.id
      },
      include: User
    })
    res.send(comments);
  } catch (error) {
    next(error);
  }
});

// add comment to component
// WORKS
router.put('/component/:componentId/addcomment', requireToken, async (req,res,next) => {
  try {
    const id = req.params.componentId;
    const component = await Component.findByPk(id);
    const comment = await Comment.create(req.body)
    component.addComment(comment)
    const user = req.user
    await user.addComment(comment, { through: { isAuthor: true } });
    res.send(comment)
  } catch(error) {
    next(error)
  }
})

// //get all likes on a comment
// router.get("/:commentId/likes", async (req, res, next) => {
//   try {
//     const id = req.params.commentId;
//     const comment = await Comment.findByPk(id);
//     const likes = await component.getLikes();
//     res.send(likes);
//   } catch (error) {
//     next(error);
//   }
// });

//add like to comment
// WORKS
router.post("/:commentId/like", requireToken, async (req, res, next) => {
  try {
    const id = req.params.commentId;
    const user = req.user;
    const comment = await Comment.findByPk(id);
    await comment.addUser(user)
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});
//remove like from comment
// WORKS
router.delete("/:commentId/unlike", requireToken, async (req, res, next) => {
  try {
    const id = req.params.commentId;
    const user = req.user;
    const comment = await Comment.findByPk(id);
    await comment.removeUser(user);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

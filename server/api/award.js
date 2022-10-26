const User = require("../db/User.js");
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
//change user to top ranked
router.get("/rankedFirst", requireToken, (req, res, next) => {
  try {
    const user = req.user;
    user.update({ wasFirst: true });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

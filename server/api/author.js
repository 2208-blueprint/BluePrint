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

router.get("/:id/components", requireToken, async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id, { include: Component });
    const owned = user.components.filter(
      (item) => item.user_component.dataValues.isAuthor
    );
    req.send(owned);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

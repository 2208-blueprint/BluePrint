const User = require("../db/User.js");
const Component = require("../db/Component.js");
const UserComponent = require("../db/UserComponent");
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
    const components = user.getComponents();
    const owned = components.filter(
      (item) => item.user_component.dataValues.isAuthor
    );
    req.send(owned);
  } catch (error) {
    next(error);
  }
});

router.post("/create", requireToken, async (req, res, next) => {
  try {
    const user = req.user;
    const component = await Component.create(req.body);
    await user.addComponent(component, { through: { isAuthor: true } });
    req.status(201).send(component);
  } catch (error) {
    next(error);
  }
});

router.put("/update/:componentId", requireToken, async (req, res, next) => {
  try {
    const user = req.user;
    const id = req.params.componentId;
    const record = await UserComponent.findOne({
      where: {
        userId: user.id,
        componentId: id,
        isAuthor: true,
      },
    });
    const component = await Component.findByPk(record.componentId);
    await component.update(req.body);
    req.status(204).send(component);
  } catch (error) {
    next(error);
  }
});

router.delete("/delete/:componentId", requireToken, async (req, res, next) => {
  try {
    const user = req.user;
    const id = req.params.componentId;
    const record = await UserComponent.findOne({
      where: {
        userId: user.id,
        componentId: id,
        isAuthor: true,
      },
    });
    const component = await Component.findByPk(record.componentId);
    await component.destroy();
    req.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

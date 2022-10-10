const User = require("../db/User.js");
const Component = require("../db/Component.js");
const UserComponent = require("../db/UserComponent");
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
//get a list of all owned components
router.get("/components", requireToken, async (req, res, next) => {
  try {
    const user = req.user;
    const components = user.getComponents();
    const owned = components.filter(
      (item) => item.user_component.dataValues.isAuthor
    );
    res.send(owned);
  } catch (error) {
    next(error);
  }
});
//create a component and assign to the user
router.post("/create", requireToken, async (req, res, next) => {
  try {
    const user = req.user;
    const component = await Component.create(req.body);
    await user.addComponent(component, { through: { isAuthor: true } });
    res.status(201).send(component);
  } catch (error) {
    next(error);
  }
});
//update a component owned by user
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
    res.send(component);
  } catch (error) {
    next(error);
  }
});
//delete a component owned by user
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
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

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

router.get("/", async (req, res, next) => {
  try {
    const components = await Component.findAll();
    res.send(components);
  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const component = await Component.findByPk(id);
    res.send(component);
  } catch (error) {
    next(error);
  }
});

router.post("/test-create", async (req, res, next) => {
  try {
    const component = await Component.create(req.body);
    res.status(201).send(component);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

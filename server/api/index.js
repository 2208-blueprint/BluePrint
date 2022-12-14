const router = require("express").Router();

// put your api routes here, for example:
router.use("/comments", require("./comment.js"));
router.use("/profile", require("./profile.js"));
router.use("/admin", require("./admin.js"));
router.use("/auth", require("./auth.js"));
router.use("/users", require("./user.js"));
router.use("/components", require("./components.js"));
router.use("/award", require("./award.js"));

module.exports = router;

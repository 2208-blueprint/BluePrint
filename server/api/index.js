const router = require("express").Router();

// put your api routes here, for example:
router.use('/components', require('./components.js'))
// router.use('/admin', require('./admin.js'))
router.use("/auth", require("./auth.js"));

module.exports = router;

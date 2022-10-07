const router = require("express").Router();

// put your api routes here, for example:
router.use('/components', require('./components.js'))
// router.use('/admin', require('./admin.js'))
<<<<<<< HEAD
router.use("/auth", require("./auth.js"));
=======
// router.use("/auth", require("./auth.js"));
// router.use("/author", require("./author.js"));
>>>>>>> 682227933fe070c0f27a5cecb98fd157968cf497

module.exports = router;

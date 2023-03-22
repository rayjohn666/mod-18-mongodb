const router = require("express").Router();
const thoughtRoutes = require("./thoughts");
const userRoutes = require("./userRoutes");

router.use("/thoughts", thoughtRoutes);
router.use("/users", userRoutes);

module.exports = router;

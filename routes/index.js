const router = require("express").Router();
const thoughtRoutes = require("./thoughts");
const userRoutes = require("./userRoutes");

router.use("/api/thoughts", thoughtRoutes);
router.use("/api/users", userRoutes);

module.exports = router;

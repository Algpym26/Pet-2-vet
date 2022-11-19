const router = require("express").Router();
const catRoutes = require("./catRoutes");
const dogRoutes = require("./dogRoutes");
const ownerRoutes = require("./ownerRoutes");

router.use("/cats", catRoutes);
router.use("/dogs", dogRoutes);
router.use("/owners", ownerRoutes);

module.exports = router;

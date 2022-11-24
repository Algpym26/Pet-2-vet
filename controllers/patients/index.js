const router = require("express").Router();
const patientRoutes = require("./patientRoutes");
const catRoutes = require("./catRoutes");
const dogRoutes = require("./dogRoutes");

// router.use("/", patientRoutes);
router.use("/cat", catRoutes);
router.use("/dog", dogRoutes);
router.use("/", patientRoutes);

module.exports = router;

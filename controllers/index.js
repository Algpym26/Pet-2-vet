const router = require("express").Router();
const patientRoutes = require("./patients");
const userRoutes = require("./userRoutes");
const locationRoutes = require("./locationRoutes");

router.use("/patients", patientRoutes);
router.use("/", userRoutes);
router.use("/locations", locationRoutes)

module.exports = router;

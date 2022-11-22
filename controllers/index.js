const router = require("express").Router();
const patientRoutes = require("./patients");
const userRoutes = require("./userRoutes");

router.use("/patients", patientRoutes);
router.use("/", userRoutes);

module.exports = router;

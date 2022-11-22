const router = require("express").Router();

const apiRoutes = require("./api");
const patientRoutes = require("./patients");
const userRoutes = require("./userRoutes");

router.use("/api", apiRoutes);
router.use("/patients", patientRoutes);
router.use("/", userRoutes);

module.exports = router;

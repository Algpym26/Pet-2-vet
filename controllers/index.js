const router = require("express").Router();
const patientRoutes = require("./patients");
const userRoutes = require("./userRoutes");
const locationRoutes = require("./locationRoutes");
const servicesRoutes = require("./servicesRoutes");

router.use("/patients", patientRoutes);
router.use("/services", servicesRoutes)
router.use("/", userRoutes);
router.use("/locations", locationRoutes)

module.exports = router;

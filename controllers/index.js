const router = require("express").Router();
const patientRoutes = require("./patients");
const userRoutes = require("./userRoutes");
const servicesRoutes = require("./servicesRoutes");

router.use("/patients", patientRoutes);
router.use("/services", servicesRoutes)
router.use("/", userRoutes);

module.exports = router;

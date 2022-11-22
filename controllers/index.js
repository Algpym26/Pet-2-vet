const router = require("express").Router();

const apiRoutes = require("./api");
const loginRoutes = require("./loginPage");
const patientRoutes = require("./patientsPage");

router.use("/api", apiRoutes);
router.use("/login", loginRoutes);
router.use("/patients", patientRoutes);

module.exports = router;

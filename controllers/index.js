const router = require("express").Router();
const patientRoutes = require("./patients");
const userRoutes = require("./userRoutes");


router.use("/", userRoutes);
router.use("/patients", patientRoutes);


module.exports = router;

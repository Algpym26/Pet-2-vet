const router = require("express").Router();
const patientRoutes = require("./patientRoutes");
const petRoutes = require("./petRoutes")

router.use("/", patientRoutes);
router.use("/add", petRoutes);




module.exports = router;

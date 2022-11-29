const router = require("express").Router();
const patientRoutes = require("./patientRoutes");
const petRoutes = require("./petRoutes/index")

router.use("/", patientRoutes);
router.use("/add", petRoutes);

module.exports = router;

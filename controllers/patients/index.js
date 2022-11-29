const router = require("express").Router();
const patientRoutes = require("./patientRoutes");
const dogRoutes = require("./dogRoutes")
const catRoutes = require("./catRoutes")


router.use("/", patientRoutes);
router.use("/add-dog", dogRoutes);
router.use("/add-cat", catRoutes);


module.exports = router;

const router = require("express").Router();
const patientRoutes = require("./patientRoutes");
const catRoutes = require("./catRoutes");
const dogRoutes = require("./dogRoutes");

// router.use("/", patientRoutes);
router.use("/cat", catRoutes);
router.use("/dog", dogRoutes);

router.get("/", async (req, res) => {
    console.log("firing")
    try {
    //   const petData = await Owner.findAll({
    //     include: [{ model: Dog }, { model: Cat }],
    //   });
  
    //   const pets = projectData.map((pet) => pet.get({ plain: true }));
  
      res.render("patientsPage");
      // {
      //   pets,
      //   logged_in: req.session.logged_in,
      // });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;

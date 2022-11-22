const router = require("express").Router();
const { Cat, Dog, Owner } = require("../../models");
const withAuth = require("../../utils/auth");

// router.get("/", async (req, res) => {
//   console.log("firing")
//   try {
//     const petData = await Owner.findAll({
//       include: [{ model: Dog }, { model: Cat }],
//     });

//     const pets = projectData.map((pet) => pet.get({ plain: true }));

//     res.render("patientsPage");
//     // {
//     //   pets,
//     //   logged_in: req.session.logged_in,
//     // });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;

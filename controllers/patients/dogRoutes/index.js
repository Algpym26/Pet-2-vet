const router = require("express").Router();
const withAuth = require("../../../utils/auth");
const { Dog, Owner } = require("../../../models");

router.get("/", withAuth, async (req, res) => {
  console.log("firing pet page get request");
  try {
    res.render("addDogPage", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.post("/", withAuth, async (req, res) => {
//   try {
//     //if dog or cat
//     const newDog = await Dog.create({});
//     const newCat = await Dog.create({});
//     res.status(200).json(newProject);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;

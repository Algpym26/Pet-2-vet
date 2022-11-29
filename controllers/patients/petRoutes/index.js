const router = require("express").Router();
const withAuth = require("../../../utils/auth");
const { Cat, Dog, Owner } = require("../../../models");

router.get("/", withAuth, async (req, res) => {
  console.log("firing");
  try {
    res.render("addPetPage", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    //if dog or cat
    const newDog = await Dog.create({});
    const newCat = await Dog.create({});
    res.status(200).json(newProject);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

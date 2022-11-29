const router = require("express").Router();
const withAuth = require("../../../utils/auth");
const { Cat, Dog, Owner } = require("../../../models");

router.get("/add", withAuth, async (req, res) => {
  console.log("firing");
  try {
    // res.json(ownerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/add", withAuth, async (req, res) => {
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

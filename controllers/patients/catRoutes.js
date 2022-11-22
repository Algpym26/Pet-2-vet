const router = require("express").Router();
const { Cat, Dog, Owner } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newCat = await Cat.create({
    
    })
    res.status(200).json(newProject);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

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

router.post("/", withAuth, async (req, res) => {
  console.log("dog post route firing")
  console.log(req.body)
  console.log(req.session)
  try {
    const newDog = await Dog.create({
      ...req.body,
      logged_in: req.session.logged_in,
      owner_id: req.session.user_id,
    });
    res.status(200).json(newDog);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

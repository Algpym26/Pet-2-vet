const router = require("express").Router();
const { Cat, Dog, Owner } = require("../../models");
const withAuth = require("../../utils/auth");

// TESTING GET route below for testing
router.get("/", withAuth, async (req, res) => {
  console.log("firing patient");

  try {
    const ownerData = await Owner.findByPk(req.session.owner_id, {
      include: [{ model: Dog }, { model: Cat }],
    });
    console.log(ownerData);
    const dogs = ownerData.Dogs.map((dog) => dog.get({ plain: true }));
    const cats = ownerData.Cats.map((cat) => cat.get({ plain: true }));

    res.render("patientsPage", {
      dogs,
      cats,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

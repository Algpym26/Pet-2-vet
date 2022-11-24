const router = require("express").Router();
const { Cat, Dog, Owner } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/:id", withAuth, async (req, res) => {
  console.log("firing");
  try {
    const ownerData = await Owner.findByPk(req.params.id, {
      include: [{ model: Dog }, { model: Cat }],
    });

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

router.get("/", async (req, res) => {
  console.log("firing");
  try {
    const ownerData = await Owner.findAll({
      include: [{ model: Dog }, { model: Cat }],
    });

    // const dogs = ownerData.Dog.map((dog) => dog.get({ plain: true }));
    // const cats = ownerData.Cat.map((cat) => cat.get({ plain: true }));

    // res.render("patientsPage", {
    //   dogs,
    //   cats,
    //   logged_in: req.session.logged_in,
    // });
    res.json(ownerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

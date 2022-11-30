const router = require("express").Router();
const withAuth = require("../../../utils/auth");
const { Cat, Owner } = require("../../../models");

router.get("/", withAuth, async (req, res) => {
  console.log("firing pet page get request");
  try {
    res.render("addCatPage", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  console.log("cat post route firing");
  console.log(req.body);
  // console.log(req.session);
  try {
    const newCat = await Cat.create({
      ...req.body,
      logged_in: req.session.logged_in,
      owner_id: req.session.user_id,
    });
    console.log(newCat);
    res.status(200).json(newCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

// KT testing DELETE cat route

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const catData = await Cat.destroy({
      where: {
        id: req.params.id,
        owner_id: req.session.user_id,
      },
    });

    if (!catData) {
      res.status(404).json({ message: "No Cat found with this id!" });
      return;
    }

    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Owner } = require("../models/");

router.get("/", async (req, res) => {
  try {
    res.render("homepage");
  } catch (err) {}
});

router.get("/login", async (req, res) => {
  try {
    res.render("loginPage");
  } catch (err) {}
});

router.post("/login", async (req, res) => {
  try {
    const ownerData = await Owner.findOne({ where: { email: req.body.email } });

    if (!ownerData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await ownerData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      console.log(req.session);
      req.session.user_id = ownerData.id;
      req.session.logged_in = true;

      res.json({ user: ownerData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/signup", async (req, res) => {
  try {
    const ownerEmail = await Owner.findOne({
      where: { email: req.body.email },
    });

    if (ownerEmail) {
      console.log("owner email found already");
      res
        .status(400)
        .json({ message: "An account with this email exists already." });
      return;
    }

    const ownerData = await Owner.create(req.body);

    req.session.save(() => {
      console.log(req.session);
      req.session.owner_id = ownerData.id;
      req.session.logged_in = true;

      res.status(200).json(ownerData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

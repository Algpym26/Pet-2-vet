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
    const userData = await Owner.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
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

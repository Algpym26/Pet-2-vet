const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Owner } = require("../models/");
const sendEmail = require("../utils/sendEmail");

router.get("/", withAuth, async (req, res) => {
  try {
    console.log(req.session.logged_in);
    res.render("homepage", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.json(err);
  }
});

router.get("/locations", withAuth, async (req, res) => {
  try {
    console.log(req.session.logged_in);
    res.render("locationPage", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {}
});

router.get("/services", withAuth, async (req, res) => {
  try {
    console.log(req.session.logged_in);
    res.render("servicesPage", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {}
});

router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("loginPage");
});

router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const ownerData = await Owner.findOne({ where: { email: req.body.email } });
    console.log(ownerData);
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
  console.log("signup post request working");
  try {
    console.log(req.body);
    const ownerData = await Owner.create(req.body);
    console.log(ownerData);
    const url = await sendEmail(req.body.name, req.body.email);
    console.log(url);
    req.session.save(() => {
      console.log("session saving");
      req.session.user_id = ownerData.id;
      req.session.logged_in = true;
      ownerData.dataValues.url = url;
      console.log(ownerData);
      res.status(200).json(ownerData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  console.log(req.session.logged_in);
  if (req.session.logged_in) {
    req.session.destroy(() => {
      console.log("test");
      res.status(200).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

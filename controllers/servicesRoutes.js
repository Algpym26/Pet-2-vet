const router = require ("express").Router()

router.get("/", async (req,res) => {
try {
    res.render("servicesPage");
} catch (err) {}
})

module.exports = router;
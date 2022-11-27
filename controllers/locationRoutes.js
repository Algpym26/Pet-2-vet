const router = require ("express").Router()

router.get("/", async (req,res) => {
try {
    res.render("locationPage");
} catch (err) {}
})

module.exports = router;
const express = require("express");
const router = express.Router();

const { home, homeDummy } = require("../controllers/homeContoller");

router.route("/").get(home);
router.route("/dummy").get(homeDummy);


module.exports = router;
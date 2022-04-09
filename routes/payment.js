const express = require("express");
const router = express.Router();
const {
  sendRazorpayKey,
  sendStripeKey,
  captrueStripePayment,
  captrueRazorpayPayment,
} = require("../controllers/paymentController");
const { isLoggedIn } = require("../middlewares/user");

router.route("./stripekey").get(isLoggedIn, sendStripeKey);
router.route("./razorpay").get(isLoggedIn, sendRazorpayKey);

router.route("/capturestripe").post(isLoggedIn, captrueStripePayment);
router.route("/capturerazorpay").post(isLoggedIn, captrueRazorpayPayment);

module.exports = router;

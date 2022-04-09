const express = require("express");
const {
  createOrder,
  getOneOrder,
  getLoggedInOrders,
  adminGetAllOrders,
  adminUpdateOrders,
  adminDeleteOrder
} = require("../controllers/orderController");
const router = express.Router();
const { isLoggedIn, CustomRole } = require("../middlewares/user");

router.route("/order/create").post(isLoggedIn, createOrder);
router.route("/order/:id").get(isLoggedIn, getOneOrder);
router.route("/myorder").get(isLoggedIn, getLoggedInOrders);

// admin Routes
router
  .route("/admin/myorder")
  .get(isLoggedIn, CustomRole("admin"), adminGetAllOrders);
router
  .route("/admin/order/:id")
  .put(isLoggedIn, CustomRole("admin"), adminUpdateOrders)
  .delete(isLoggedIn, CustomRole("admin"), adminDeleteOrder);

module.exports = router;

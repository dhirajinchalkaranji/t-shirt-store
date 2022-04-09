const express = require("express");
const {
  addProduct,
  getAllProduct,
  adminGetAllProduct,
  getSingleProduct,
  adminUpdateOneProduct,
  adminDeleteOneProduct,
  addReview,
  deleteReview,
  getOnlyReviewsForOneProduct,
} = require("../controllers/productController");

const { isLoggedIn, CustomRole } = require("../middlewares/user");
const router = express.Router();

// user Routes 
router.route("/products").get(getAllProduct);
router.route("/product/:id").get(getSingleProduct);
router.route("/review").put(isLoggedIn, addReview);
router.route("/review").delete(isLoggedIn, deleteReview);
router.route("/review").get(isLoggedIn, getOnlyReviewsForOneProduct);

// admin Routes
router.route("/admin/products").get(adminGetAllProduct);

router
  .route("/admin/product/add")
  .put(isLoggedIn, CustomRole("admin"), addProduct);

router
  .route("/admin/product/:id")
  .put(isLoggedIn, CustomRole("admin"), adminUpdateOneProduct)
  .delete(isLoggedIn, CustomRole("admin"), adminDeleteOneProduct);

module.exports = router;

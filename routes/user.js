const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middlewares/user");
const { CustomRole } = require("../middlewares/user");

const {
  signup,
  login,
  logout,
  forgotPassword,
  passwordReset,
  getLoggedInUserDetails,
  changePassword,
  updateUserDetails,
  adminAllUser,
  adminGetUser,
  managerAllUser,
  adminUpdateOneUserDetails,
  adminDeleteOneUserDetails,
} = require("../controllers/userContoller");

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/forgotPassword").post(forgotPassword);
router.route("/password/reset/:token").post(passwordReset);
router.route("/userdashboard").get(isLoggedIn, getLoggedInUserDetails);
router.route("/password/update").post(isLoggedIn, changePassword);
router.route("/user/update").post(isLoggedIn, updateUserDetails);

// admin only route
router.route("/admin/user").get(isLoggedIn, CustomRole("admin"), adminAllUser);
router
  .route("/admin/user/:id")
  .get(isLoggedIn, CustomRole("admin"), adminGetUser)
  .put(isLoggedIn, CustomRole("admin"), adminUpdateOneUserDetails) 
  .delete(isLoggedIn, CustomRole("admin"), adminUpdateOneUserDetails);

// manager only route
router
  .route("/manager/user")
  .get(isLoggedIn, CustomRole("manager"), managerAllUser);

module.exports = router;

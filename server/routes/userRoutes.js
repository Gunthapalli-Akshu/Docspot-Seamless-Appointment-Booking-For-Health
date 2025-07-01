const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

// Auth routes
router.post("/signup", authController.signup);
router.post("/login", authController.login);

// Public routes
router.get("/", userController.getAllUsers);

// Protected routes
router.use(authController.protect);

router
  .route("/:id")
  .get(userController.getUser)
  .delete(userController.deleteUser);

router.get("/verify-user/:id", userController.verifyUser);
router.post("/book-appointment", userController.bookAppointment);
router.get("/user-appointments/:id", userController.userAppointments);
router.post("/mark-all-notification-as-seen", userController.notificationSeen);
router.post("/delete-all-notifications", userController.deleteNotifications);
router.post("/change-doctor-status", userController.doctorStatus);

module.exports = router;

const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Admin Login Routes
router.get("/login", adminController.getLoginPage);
router.post("/login", adminController.postLogin);

// Admin Dashboard
router.get("/dashboard", adminController.getDashboard);

// Manage Users
router.get("/users", adminController.getManageUsers);

// Manage Bookings
router.get("/bookings", adminController.getManageBookings);

// Reports
router.get("/reports", adminController.getReports);

// Logout
router.get("/logout", adminController.logout);

module.exports = router;

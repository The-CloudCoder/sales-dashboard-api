const express = require("express");
const { getSales, createSale } = require("../controllers/salesController");
const verifyToken = require("../middleware/authMiddleware");
const router = express.Router();

// Protected routes
router.get("/", verifyToken, getSales); // Fetch sales data
router.post("/", verifyToken, createSale); // Add new sale

module.exports = router;

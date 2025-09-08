const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

// Home route
router.get("/", homeController.index);

// Health check
router.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Server is healthy ✅" });
});

module.exports = router;
const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

router.get("/me", authenticate, (req, res) => {
  res.json({ message: "Access granted", user: req.user });
});

router.get("/admin", authenticate, authorize("admin"), (req, res) => {
  res.json({ message: "Welcome admin!" });
});

module.exports = router;

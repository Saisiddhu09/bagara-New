const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const router = express.Router();
const FormSubmission = require("../models/FormSubmission");
const authMiddleware = require("../middleware/authMiddleware");
const config = require("../config.json");

// Dummy admin credentials (Replace with DB-based authentication if needed)
const adminUser = {
  username: process.env.USER,
  password: bcrypt.hashSync(process.env.PASS, 10), // Pre-hashed password
};

// Admin Login Route
router.post("/admin/login", async (req, res) => {
  const { username, password } = req.body;

  if (username !== adminUser.username || !bcrypt.compareSync(password, adminUser.password)) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Updated token payload to include role: "admin"
  const token = jwt.sign({ username, role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

// Submit a form (No authentication required)
router.post("/submit", async (req, res) => {
  try {
    const newSubmission = new FormSubmission(req.body);
    await newSubmission.save();
    res.status(201).json({ message: "Form submitted successfully" });
  } catch (err) {
    console.error("Form submission error:", err);
    res.status(500).json({ error: "Error submitting form" });
  }
});

// Fetch all form submissions (Admin-only access)
router.get("/orders", authMiddleware, async (req, res) => {
  try {
    const submissions = await FormSubmission.find();
    res.json(submissions);
  } catch (err) {
    console.error("Error fetching submissions:", err);
    res.status(500).json({ error: "Error fetching submissions" });
  }
});

module.exports = router;

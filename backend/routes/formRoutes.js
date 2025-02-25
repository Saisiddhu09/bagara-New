const express = require("express");
const router = express.Router();
const FormSubmission = require("../models/FormSubmission");

// Submit a form
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

// Fetch all form submissions
router.get("/", async (req, res) => {
  try {
    const submissions = await FormSubmission.find();
    res.json(submissions);
  } catch (err) {
    console.error("Error fetching submissions:", err);
    res.status(500).json({ error: "Error fetching submissions" });
  }
});

module.exports = router;

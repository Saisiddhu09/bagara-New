const express = require("express");
const router = express.Router();
const FormSubmission = require("../models/FormSubmission");

// Route to handle form submission
router.post("/submit", async (req, res) => {
  try {
    const newSubmission = new FormSubmission(req.body);
    await newSubmission.save();
    res.status(201).json({ message: "Form submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error submitting form" });
  }
});

// Route to fetch all form submissions (ADD THIS HERE)
router.get("/submissions", async (req, res) => {
  try {
    const submissions = await FormSubmission.find();
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ error: "Error fetching submissions" });
  }
});

module.exports = router;

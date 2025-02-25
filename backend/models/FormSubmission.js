const mongoose = require("mongoose");

const FormSubmissionSchema = new mongoose.Schema({
  fullName: String,   // Rename from "name"
  email: String,
  phone: String,      // Rename from "number"
  message: String,
  submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("FormSubmission", FormSubmissionSchema);

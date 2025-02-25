const mongoose = require("mongoose");

const FormSubmissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
  message: String,
  submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("FormSubmission", FormSubmissionSchema);

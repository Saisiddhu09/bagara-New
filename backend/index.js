const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config.json");
const formRoutes = require("./routes/formRoutes");

const app = express();

// Connect to MongoDB
mongoose.connect(config.connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Adjust based on frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// Use form routes
app.use("/api/forms", formRoutes);

// Start server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;

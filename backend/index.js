const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables
const formRoutes = require("./routes/formRoutes");

const app = express();

// **Connect to MongoDB**
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// **Middleware**
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000", // Allow frontend access
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"], // Ensure JWT can be sent in headers
  })
);

// **Use form routes**
app.use("/api/forms", formRoutes);

// **Start server**
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;

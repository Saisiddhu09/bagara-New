const express = require("express");
const cors = require("cors");
const app = express();
const config = require("./config.json");
const mongoose = require("mongoose");

mongoose.connect(config.connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000", // Allow frontend to access backend
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);
app.get('/api/forms', async (req, res) => {
    try {
        const submissions = await Form.find(); // Assuming your model is `Form`
        res.json(submissions);
    } catch (error) {
        res.status(500).json({ message: "Error fetching data", error });
    }
});


// If using routes in a separate file
const formRoutes = require("./routes/formRoutes");
app.use("/api/forms", formRoutes);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});

module.exports = app;

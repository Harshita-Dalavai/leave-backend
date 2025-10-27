require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const leaveRoutes = require("./routes/leaveRoutes");

const app = express();
app.use(cors());

app.use(express.json()); // Parse JSON requests

// Root route
app.get("/", (req, res) => {
  res.send("✅ Leave Management Backend is Running Successfully!");
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err.message));

// Use routes
app.use("/api/leaves", leaveRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
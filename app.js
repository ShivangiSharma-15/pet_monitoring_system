const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth"); // Correct import

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection failed:", err));

// Routes
app.use('/api/auth', authRoutes); // Correct route usage

// Server Setup
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


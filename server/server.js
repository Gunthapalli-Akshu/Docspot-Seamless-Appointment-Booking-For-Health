const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // 🔥 Needed to read req.body
app.use(cors());

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("DB connection error:", err));

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/v1/users", userRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Backend connected successfully!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

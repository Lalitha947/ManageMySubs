require("dotenv").config(); // load .env first
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);
app.use(express.json());

app.get("/", (req, res) => res.send("API is running 🚀"));

// Routes
app.use("/api/subscriptions", require("./routes/subscriptions"));
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

// Global error handler (last middleware)
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err)
  res.status(500).json({ message: 'Server error', error: err?.message || 'Internal server error' })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


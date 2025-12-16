const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* ROUTES */
const flightRoutes = require("./routes/flightRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

/* USE ROUTES */
app.use("/api/flights", flightRoutes);
app.use("/api", bookingRoutes);

/* DATABASE */
mongoose
  .connect(
    "mongodb+srv://flightuser:flight123@cluster0.jkpdpsd.mongodb.net/flightdb"
  )
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

/* TEST ROUTE */
app.get("/", (req, res) => {
  res.send("Backend is running");
});

/* START SERVER */
app.listen(5000, () => {
  console.log("🚀 Backend running on http://localhost:5000");
});

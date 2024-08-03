const express = require("express");
const cors = require("cors");
const app = express();

// Middleware CORS
app.use(
  cors({
    origin: "http://localhost:3001", // Ganti dengan URL frontend Anda
  })
);

app.use(express.json()); // Middleware untuk parsing JSON

// Rute dan middleware lainnya
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/event", require("./routes/eventRoutes"));

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

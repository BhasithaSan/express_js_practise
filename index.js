const express = require("express");
const app = express();
const userRoutes = require("./Routes/userRoutes");



app.use(express.json());
app.use("/api/users", userRoutes);

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message });
});

module.exports = app;

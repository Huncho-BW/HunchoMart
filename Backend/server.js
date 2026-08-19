import express from "express";
const app = express();

console.log("log out app", app);
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to Huncho Mart API");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

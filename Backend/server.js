import express from "express";
import cors from "cors";
import productRoute from "./routes/productRout.js";
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Welcome to Huncho Mart API");
});

const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

server.keepAliveTimeout = 120000;
server.headersTimeout = 120000;

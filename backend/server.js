import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());
app.get("/api", (req, res) => {
  res.json({ data: "kire" });
});
app.listen(process.env.PORT, () => {
  console.log("app is connected");
});

import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.get("/api", async (req, res) => {
  res.status(200).json({ data: "kire" });
});
app.listen(process.env.PORT, () => {
  console.log("app is connected");
});

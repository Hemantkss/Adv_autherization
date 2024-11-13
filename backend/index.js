import express from "express";
import cors from "cors";
import path from "path";

import cookieParser from "cookie-parser";
import { connectDB } from "./db/connectDB.js";
import authRoute from "./routes/authRoute.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const __dirname = path.resolve();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json()); // allows us to pass incoming request with json : req.body
app.use(cookieParser()); // parse cookies

// All Routes
app.use("/api/auth", authRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}


app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});

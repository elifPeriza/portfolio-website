import express from "express";
import database from "./database";

import dotenv from "dotenv";
import MainRouter from "./mainrouter";
import path from "path";
dotenv.config();
const EXPRESS_PORT = parseInt(process.env.EXPRESS_PORT ?? "5005", 10);

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

const staticPath = path.join(__dirname, "..", "public");

app.use("/static", express.static(staticPath)); //für alle routes /static, serve die Dateien im public ordner
app.use("/api", MainRouter);

app.listen(EXPRESS_PORT, () => {
  console.log("Express listening on port", EXPRESS_PORT);
  if (database.getConnection() == null) {
    console.error("WARNING: Database connection failed");
    process.exit(1);
  }
  console.log("DATABASE CONNECTED");
});

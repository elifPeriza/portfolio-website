import express from "express";

import dotenv from "dotenv";
dotenv.config();
const EXPRESS_PORT = parseInt(process.env.EXPRESS_PORT ?? "5005", 10);

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.use("/static", express.static("public")); //für alle routes /static, serve die Dateien im public ordner

app.listen(EXPRESS_PORT, () => {
  console.log("Express listening on port", EXPRESS_PORT);
});

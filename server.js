require("dotenv").config();
const multer = require("multer");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.set("view engine", "ejs");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
}

const upload = multer({ dest: "uploads" });

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", upload.single("file"), (req, res) => {
  res.send("Hi");
});

app.listen(process.env.PORT, () => {
  console.log("This app listening on port 3000!");
});

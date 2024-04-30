const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const { imageCaptionDomain, IMAGE_CAPTION_PORT } = require("../../utils/utils");

app.get("/", function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/image-caption.html");

  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");

  res.send(contentFromHtmlFile);
});

app.use("/", express.static(path.resolve(__dirname, "../dist")));

app.listen(IMAGE_CAPTION_PORT, function () {
  console.log(`Application is running on ${imageCaptionDomain}`);
});

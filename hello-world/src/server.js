const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const { helloWorldDomain, HELLO_WORLD_PORT } = require("../../utils/utils");

app.get("/", function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/hello-world.html");

  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");

  res.send(contentFromHtmlFile);
});

app.use("/", express.static(path.resolve(__dirname, "../dist")));

app.listen(HELLO_WORLD_PORT, function () {
  console.log(`Application is running on ${helloWorldDomain}`);
});

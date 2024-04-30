const express = require("express");
const path = require("path");
const fs = require("fs");
const { DASHBOARD_PORT, dashboardDomain } = require("../../utils/utils");

const app = express();

app.use("/", express.static(path.resolve(__dirname, "../dist")));

app.get("*", function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/dashboard.html");
  const contentFromHtml = fs.readFileSync(pathToHtmlFile, "utf-8");

  res.send(contentFromHtml);
});

app.listen(DASHBOARD_PORT, function () {
  console.log(`Application is running on ${dashboardDomain}`);
});

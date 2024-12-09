const PORT = process.env.PORT || 3000;
var cors = require("cors");
var XLSX = require("xlsx");
const fs = require("fs");
const express = require("express");
const app = express();

app.use(cors());

app.get("/employees", function (req, res) {
  const fileBuffer = fs.readFileSync("./info/data.xlsx");
  const workbook = XLSX.read(fileBuffer, { type: "buffer" });

  const sheetName = "employees";
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);
  res.send(data);
});

app.listen(PORT);

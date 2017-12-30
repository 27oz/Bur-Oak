const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("app"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/app/index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);

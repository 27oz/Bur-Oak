const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("app"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/app/index.html"));
});

app.listen(3000, () => console.log("running on port 3000"));

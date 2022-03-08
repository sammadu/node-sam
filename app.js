const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Port Changed to 8080");
});
app.get("/new", function (req, res) {
  res.send("New also worked");
});

app.listen(process.env.PORT || 8080);
module.exports = app;
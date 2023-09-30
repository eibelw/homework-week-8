var express = require("express");
var app = express();
var pool = require("./query.js");

var data = require("./router.js");

app.use("/data", data);

pool.connect((err, res) => {
  console.log(err);
  console.log("connected");
});

app.listen(3000);

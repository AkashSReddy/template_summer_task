var express = require("express");
var app = express();

//modules

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Setup of view engine
app.set("view engine", "ejs");

//Get request routes
app.get("/", (req, res) => {
  var data = {
    name: "Test",
    class: "New"
  };
  //   console.log(data);
  res.render("results", { data: data });
});

/**
 POST request route
 Write the logic to manipulate the String Here
 */

app.post("/postroute", (req, res, next) => {
  console.log(req.body.name);
  alert("POST route success");
  res.redirect("/");
});

//Port setup

app.listen(3000, function() {
  console.log("Movie App has started");
});

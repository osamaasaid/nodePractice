console.log("Express app!!!");
var express = require("express");
var app = express();

// "/" => "Hi"
// "/bye" => "Goodbye"
// "/ca" => "no cars here!!"

app.get("/", function(req, res){
  res.send("Hi there!");
});

app.get("/bye", function(req, res){
  res.send("Goodbye!");
});

app.get("/car", function(req, res){
  res.send("no cars here!!");
  console.log("this route was requested");
});


app.listen(3000, function() {
  console.log('app is running on port 3000');
});

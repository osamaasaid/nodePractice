console.log("Express app!!!");
var express = require("express");
var app = express();

// "/" => "Hi"
// "/bye" => "Goodbye"
// "/cat" => "meaw"

app.get("/", function(req, res){
  res.send("Hi there!");
});


app.listen(3000, function() {
  console.log('app is running on port 3000');
});

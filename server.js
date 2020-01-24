//Requiring express 
var express = require("express");

//Requiring the models folder 
var db = require("./models");

//declaring port to 8090
var PORT = process.env.PORT || 8090;

//initializing express 
var app = express();


//Middlewear Configuration 

// Parse request body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


//Making public folder static
app.use(express.static("public"));
// app.get("/", function(req, res) {
// });








app.listen(PORT, function() {  
  console.log("Server listening on: http://localhost:" + PORT);
});
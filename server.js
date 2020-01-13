//Server File 
//calling the npms
var express = require("express");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");

//requiring all the models
var db = ("./models");

//Initializing express 
var PORT = 5000;
var app = express();

//middlewear configuration
//Parse req body as JSON
app.use(express.urlencoded({
    extended: true }));
app.use(express.json());
//make public a staic folder
app.use(express.static("public")
);

//connect to the mongo db
// mongoose.connect("mongodb://localhost/unit18Populater", {
//     useNewUrlParser: true });




//Server start code
app.listen(PORT, function(){
console.log("App running on port " + PORT + "!");
});



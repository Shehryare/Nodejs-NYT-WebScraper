//Server File 
//calling the npms
var express = require("express");
var mongoose = require("mongoose");
var logger = require("morgan");
var axios = require("axios");
var cheerio = require("cheerio");

//requiring all the models
var db = ("./models");

//Initializing express 
var PORT = 3000;
var app = express();

//middlewear configuration
//Parse req body as JSON
app.use(logger("dev"));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
//make public a staic folder
app.use(express.static("public")
);

//connect to the mongo db
mongoose.connect("mongodb://localhost/", {
    useNewUrlParser: true });




//Server start code
app.listen(PORT, function (error) {
    if (error) {
        console.log(error)
    } else {
        console.log("App running on port " + PORT + "!");
    };
});



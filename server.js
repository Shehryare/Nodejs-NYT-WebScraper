//Requiring express and mongoose for mongodb
let express = require("express");
let mongoose = require("mongoose")
//Requiring scraping tools
let cheerio = require("cheerio");
let axios = require('axios')

//Requiring the models folder 
let db = require("./models");

//declaring port to 8090
let PORT = process.env.PORT || 8090;

//initializing express 
let app = express();


//Middlewear Configuration 

// Parse request body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Making public folder static
app.use(express.static("public"));

// Connecting to the Mongo DB
mongoose.connect("mongodb://localhost/mongo-db-scraper", { useNewUrlParser: true});


//Routes

app.get("/scrape", (req, res) => {
  axios.get("https://www.yahoo.com/").then(response =>{
  var $ = cheerio.load(response.data);
  
  //grabing every h2 within an article tag
  $("article h2").each(function(i, element){
    var result = {};

    result.title =$(this).children("a").text();
    result.link =$(this).childen("a").attr("href");

    db.article.create(result).then(dbArticle => {
      console.log(dbArticle)
    })
    .catch(err => {
      console.log(err);
    });
  });
  
//Message on front end
res.send("The deed is done");
  });
});
















// app.get("/", function(req, res) {
// });


app.listen(PORT, function() {  
  console.log("Server listening on: http://localhost:" + PORT);
});
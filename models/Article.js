//Requiring mongoose 
var mongoose = require("mongoose");

//refering to the schema instructor
var Schema = mongoose.Schema

//Creating new ariticle schema from the contructor 
var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    summary: {
        type: String,
        required: true
    },


});

//creates model
var Article = mongoose.model("Article", ArticleSchema);

//exports model
module.exports = Article;
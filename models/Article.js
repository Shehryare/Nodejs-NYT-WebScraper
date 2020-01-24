var mongoose = require("mongoose");

var Schema = mongoose.Schema

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
var mongoose = require("mongoose");

var Schema = mongoose.Schema

var ArticleSchema = new Schema({
    title: {
        type: string,
        required: true
    },

    summary: {
        type: string,
        required: true
    },


});

//creates model
var Article = mongoose.model("Article", ArticleSchema);

//exports model
module.exports = Article;
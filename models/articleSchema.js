const mongoose = require('mongoose');
const schema = mongoose.Schema;

var articleSchema = new schema({
    title: String,
    summary: String,
    body: String

});


const Article = mongoose.model('Article', articleSchema);


module.exports = Article;
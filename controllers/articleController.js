const Article = require('../models/articleSchema');

//article_index_get
const article_index_get = (req, res) => {
    Article.find()
        .then((result) => {
            res.render("index", { myTitle: 'HOME', artArray: result })

        })
        .catch((err) => {
            console.log(err);
        })
};
const article_post = (req, res) => {
    const article = new Article(req.body);
    console.log(req.body);
    article.save()
        .then((result) => {
            res.redirect('/all-articles')
        })
        .catch((err) => {
            console.log(err);
        })
};


const article_details_get = (req, res) => {

    Article.findById(req.params.id)
        .then((result) => {
            res.render("details", { myTitle: 'Details', artObject: result })
        })
        .catch((err) => {
            console.log(err);
        })
};


const article_delete = (req, res) => {
    Article.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.json('data')
        })
        .catch((err) => console.log(err));

};

module.exports = {
    article_index_get,
    article_post,
    article_details_get,
    article_delete

}
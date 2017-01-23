var express = require('express');
var router = express.Router();


var Article = require('../../models/article');
// this file is articles.js, so '/' it means '/articles'
router.get('/', function (req, res, next) {
    Article.getArticles(function (err, articles) {
        if (err) {
            console.log(err);
        }
        res.json(articles);
    });
});

// this file is articles.js, so '/:id' it means '/articles/:id'
router.get('/:id', function (req, res, next) {
    Article.getArticleById(req.params.id, function (err, article) {
        if (err) {
            console.log(err);
        }
        res.json(article);
    });
});

// this file is articles.js, so '/:id' it means '/articles/:id'
router.get('/category/:category', function (req, res, next) {
    Article.getArticlesByCategory(req.params.category, function (err, articles) {
        if (err) {
            console.log(err);
        }
        res.json(articles);
    });
});

// Create an Article from the form
router.post('/', function (req, res, next) {
    // get Form values
    var titile = req.body.title;
    var category = req.body.category;
    var body = req.body.body;

    // Article object
    var newArticle = new Article({
        title: title,
        category: category,
        body: body
    });

    // Create Article
    Article.createArticle(newArticle, function (err, article) {
        if (err) {
            console.log(err);
        }

        res.location('/articles');
        res.redirect('/articles');
    });
});

// Update Article
router.put('/', function (req, res, next) {
    var id = req.body.id;
    var data = {
        title: req.body.title,
        category: req.body.category,
        body: req.body.body
    };

    // create Article
    Article.updateArticle(id, data, function (err, article) {
        if (err) {
            console.log(err);
        }

        res.location('/articles');
        res.redirect('/articles');
    });
});

// delete article
router.delete('/:id', function (req, res, next) {
    var id = req.params.id;

    // remove Article
    Article.removeArticle(id, function (err, callback) {
        if (err) {
            console.log(err);
        }

        res.location('/articles');
        res.redirect('/articles');
    });
});

module.exports = router;
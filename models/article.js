var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
    title: {
        type: String,
        index: true,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    category: {
        type: String,
        index: true,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural version of your model name. so 'Article' -> 'articles' collection in our mongodb
var Article = module.exports = mongoose.model('Article', articleSchema);

// find all the article from mongodb
module.exports.getArticles = function (callback) {
    Article.find(callback);
}

// get article by id
module.exports.getArticleById = function (id, callback) {
    Article.findById(id, callback);
}

// get category articles
module.exports.getArticlesByCategory = function (category, callback) {
    var query = {
        category: category
    };
    Article.find(query, callback);
}

// create a article
module.exports.createArticle = function (newArticle, callback) {
    newArticle.save(callback);
}

// udpate Article
module.exports.updateArticle = function (id, data, callback) {
    var title = data.title;
    var body = data.body;
    var category = data.category;

    var query = {
        id: id
    };

    Article.findById(id, function (err, article) {
        if (!article) {
            return next(new Error('Could not load article.'));
        } else {
            // then we update
            article.title = title;
            article.body = body;
            article.category = category;

            // then we save it into the database
            article.save(callback);
        }
    });
}

// Delete Article
module.exports.removeArticle = function (id, callback) {
    Article.find({
        id: id
    }).remove(callback);
}
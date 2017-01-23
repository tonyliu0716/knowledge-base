var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
    name: {
        type: String,
        index: true,
        required: true
    },
    description: {
        type: String
    }
});

var Category = module.exports = mongoose.model('Category', categorySchema);

// find all the article from mongodb
module.exports.getCategories = function (callback) {
    Category.find(callback);
}

// get article by id
module.exports.getCategoryById = function (id, callback) {
    Category.findById(id, callback);
}

// get category articles
module.exports.getArticlesByCategory = function (category, callback) {
    var query = {
        category: category
    };
    Category.find(query, callback);
}

// create category
module.exports.createCategory = function (newCategory, callback) {
    var category = new Category(newCategory);
    category.save(callback);
};
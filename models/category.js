var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
    name: {
        type: String,
        index: true
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

// udpate Article
module.exports.updateCategory = function (id, data, callback) {
    var name = data.name;
    var description = data.description;
    var image_url = data.image_url;


    Category.findById(id, function (err, category) {
        if (!category) {
            return next(new Error('Could not load Document.'));
        } else {
            // then we update
            category.name = name;
            category.description = description;
            category.image_url = image_url;

            // then we save it into the database
            category.save(callback);
        }

    });
};

// Delete Category
module.exports.removeCategory = function (id, callback) {
    Category.findById(id, function (err, category) {
        if (err) {
            console.log(err);
        }
        category.remove(callback);
    });
};
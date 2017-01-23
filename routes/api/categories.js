var express = require('express');
var router = express.Router();

var Category = require('../../models/category');

// this file is categories.js, so '/' it means '/categories'
router.get('/', function (req, res, next) {
    Category.getCategories(function (err, categories) {
        if (err) {
            console.log(err);
        }
        res.json(categories);
    });
});

// this file is categories.js, so '/:id' it means '/categories/:id'
router.get('/:id', function (req, res, next) {
    Category.getCategoryById(req.params.id, function (err, category) {
        if (err) {
            console.log(err);
        }
        res.json(category);
    });

});

router.post('/', function (req, res, next) {
    var name = req.body.name;
    var description = req.body.description;
    var category = {
        name: name,
        description: description
    };
    //try to create a new Category
    Category.createCategory(category, function (err, category) {
        if (err) {
            console.log(err);
        }
        res.location('/');
        res.redirect("/");

    });
});

module.exports = router;
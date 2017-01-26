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

// update categories
router.put('/:id', function (req, res, next) {
    var id = req.params.id;
    var data = {
        //should get these data from 
        name: req.body.name,
        description: req.body.description
    };

    // create Article
    Category.updateCategory(id, data, function (err, category) {
        if (err) {
            console.log(err);
        }

        res.json(category);
    });
});

// delete category
router.delete('/:id', function (req, res, next) {
    var id = req.params.id;
    Category.removeCategory(id, function (err, category) {
        if (err) {
            console.log(err);
        }
        return res.sendStatus(204);

    });
})

module.exports = router;
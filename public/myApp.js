var app = angular.module('knowledgebase', ['ui.router', 'jcs-autoValidate']);

app.config(['$stateProvider', '$locationProvider', function ($stateProvider, $locationProvider) {
    $stateProvider
        .state('home', {
            url: "/",
            views: {
                'category-section': {
                    templateUrl: 'views/categories.view.html',
                    controller: 'CategoriesController'
                },
                'article-section': {
                    templateUrl: 'views/articles.view.html',
                    controller: 'ArticlesController'
                }
            }

        });

    $locationProvider.html5Mode(true);

}]);
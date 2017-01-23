angular.module("knowledgebase")

.controller('ArticlesController', ['$scope', '$http', function ($scope, $http) {
    $http({
        method: "GET",
        url: "/api/articles"
    }).then(function (response) {
        var data = response.data;
        $scope.articles = response.data;
        console.log(data);
    }, function (error) {
        console.log(error);
    });


}]);
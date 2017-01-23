angular.module("knowledgebase")

.controller('CategoriesController', ['$scope', '$http', function ($scope, $http) {


    $http({
        method: "GET",
        url: "/api/categories"
    }).then(function (response) {
        var data = response.data;
        console.log("First time loading...");
        $scope.categories = response.data;

        //assign the init description value into array: for reset button
        $scope.desc = [];
        $scope.title = [];
        angular.forEach($scope.categories, function (category, index) {
            $scope.desc.push(category.description);
            $scope.title.push(category.name);
        });

        console.log("Why loading twice here? Fix that later.");
    }, function (error) {
        console.log(error);
    });

    //reset title button
    $scope.resetInput = function (value, index) {
        $scope.title[index] = value;
    };

    //reset description button
    $scope.resetDesc = function (value, index) {
        $scope.desc[index] = value;
    };

    //save the changed details to mongo
    //$http: method: put -> update
    $scope.saveDetails = function (title, description) {
        console.log(title + " " + description);
        //Send ajax request

    }

}]);
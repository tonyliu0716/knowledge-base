angular.module("knowledgebase")

.controller('RoutesController', ['$scope', '$location', '$state', function ($scope, $location, $state) {
    $scope.routeChange = function (address) {
        $location.path(address).replace();
    }

    $scope.loadCategories = function () {
        console.log("I am here...");
        $state.go("category-section");
    }

}]);
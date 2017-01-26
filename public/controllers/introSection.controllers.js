angular.module("knowledgebase")

.controller('introSectionController', ['$scope', function ($scope) {
    $scope.pageIndex = 1;

    $scope.changePage = function (index) {
        $scope.pageIndex = index;
    };

    $scope.prevPage = function () {
        $scope.pageIndex = $scope.pageIndex - 1;
        if ($scope.pageIndex <= 0) {
            $scope.pageIndex = 1;
        }
    }

    $scope.nextPage = function () {

        if ($scope.pageIndex == 3) {
            return;
        } else {
            $scope.pageIndex = $scope.pageIndex + 1;
        }


    }
}]);
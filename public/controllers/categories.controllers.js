angular.module("knowledgebase")

.controller('CategoriesController', ['$scope', '$http', '$timeout', function ($scope, $http, $timeout) {


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
    $scope.saveDetails = function (id, title, description, index) {
        console.log(id + " " + title + " " + description);
        //Send ajax request
        $http({
            method: "PUT",
            url: "/api/categories/" + id,
            data: {
                name: title,
                description: description
            }
        }).then(function (response) {
            // if update success, show modal then close:
            $("#myModal" + index).modal('toggle');
            $("#updateSuccess").modal('show');
            //$timeout($("#updateSuccess").modal('toggle'), 3000);

        }, function (error) {
            console.log(error);
        });

    };

    // Delete category by Id
    $scope.deleteCategory = function (id, index) {
        // send ajax request
        $http({
            method: "DELETE",
            url: "/api/categories/" + id
        }).then(function (response) {
            // close the modal here.
            $("#myDeleteModal" + index).modal("toggle");
        }, function (error) {
            console.log(error);
        });
    }

    //clear new desc area
    $scope.clearNewDesc = function () {
        $scope.newDesc = "";
    };

    //clear new title area
    $scope.clearNewTitle = function () {
        $scope.newTitle = "";
    };

    //click 'close', clear all
    $scope.clearAll = function () {
        $scope.clearNewDesc();
        $scope.clearNewTitle();
    };

    //hide modal: nested modals
    $scope.hideModal = function () {
        $("#checkModal").modal('hide');
    };

    $scope.onCheck = function () {
        console.log('disoyong fangfa');
    };

    $scope.blur = function () {
        var title = $("#titleId").val();
        var desc = $("#descId").val();
        var newTitle = $scope.newTitle;
        var newDesc = $scope.newDesc;
        angular.forEach($scope.title, function (title, index) {
            if ($scope.newTitle == title) {
                $scope.errorMessage = "This title has been used before. Try antoher one."
                return false;
            }
        });
        if ((title.length > 3 && title.length < 20) && (desc.length > 10 && desc.length < 450)) {
            $scope.errrorMessage = "";
            return true;
        }
        return false;
    };

    //show details for category
    $scope.showCategoryDetails = function (value) {
        console.log(value);
    }

    $scope.onSubmit = function () {


        /* 
                $http({
                    method: "POST",
                    url: "/api/categories",
                    data: {
                        name: newTitle,
                        description: newDesc
                    }
                }).then(function (response) {
                    console.log(response);
                }, function (error) {
                    console.log(error);
                });

                //show success message
                console.log("I have been successful submitted.");
        */
    };

            }]);
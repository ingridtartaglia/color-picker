var colorPickerApp = angular.module('colorPickerApp', ['mp.colorPicker']);

colorPickerApp.controller('colorPickerCtrl', function($scope){
    $scope.colorPicked = false;
    $scope.newColors = [];

    $scope.saveColor = function(color) {
        $scope.colorPicked = true;
        $scope.newColors.push(color);
    }
});

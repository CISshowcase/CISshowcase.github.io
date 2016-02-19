var app = angular.module('groceryToDo', []);

app.controller('main', function($scope){ 

    // Start as not visible but when button is tapped it will show as true 

        $scope.visible = false;

    // Create the array to hold the list of Grocerys

        $scope.gcerys = [];

    // Create the function to push the data into the "gcery" array

    $scope.newGrocery = function(){

        $scope.gcerys.push({name:$scope.gceryname, number:$scope.gcerynumber});/*, date:$scope.gcerydate*/

        $scope.gceryname = '';
        $scope.gcerynumber = '';
        
        //$scope.gcerydate = '';

    };
    
    
    $scope.remove=function(item){ 
      var index=$scope.gcerys.indexOf(item)
      $scope.gcerys.splice(index,1);     
    }
});
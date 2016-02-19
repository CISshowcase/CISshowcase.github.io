app.controller('demoController', function($scope) {
    // initial items
    $scope.items = [
    	'item one',
    	'item two',
    	'item three'
    ];

    // add an item
    $scope.add = function() {
    	$scope.items.push($scope.input);
    };

    // remove an item
    $scope.remove = function(index) {
    	$scope.items.splice(index, 1);
    };
});
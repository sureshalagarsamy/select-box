function myCtrl($scope)
{   
  $scope.myObj = {};
  $scope.myObj.price = 20;
  $scope.myObj.items = [{name: 'one', age: 30 },{ name: 'two', age: 27 },{ name: 'three', age: 50 }];
  $scope.selectedData = $scope.myObj.items[0];
}

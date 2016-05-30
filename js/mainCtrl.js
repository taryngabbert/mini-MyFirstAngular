angular.module("friendsList").controller("mainCtrl", function($scope){
  $scope.friends = ["Jim","John","Ryan"];
  $scope.update = function() {
    $scope.friends.push($scope.addFriend);
  }

});

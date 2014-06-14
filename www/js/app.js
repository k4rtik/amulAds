angular.module('amulads', ['ionic'])

.controller('AmulCtrl', function($scope, $http) {
  $http.get('amul.json')
  .then(function(resp) {
    $scope.yeargroups = resp.data;
    $scope.update = function() {
      $scope.selyear.topicals = $scope.selyear.topicals;
    }
  }, function(err){
    console.error('ERR', err);
  })
});

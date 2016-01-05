app.controller('portfolioController', function($scope) {
  $scope.projectid = function(id) {
    $scope.no = $scope.news[id];
    $scope.tab = id;
  };
});
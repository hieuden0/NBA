var app = angular.module('hieuden',[]);

angular.
  module('hieuden').
  component('phonelist', {
    templateUrl: '/templates/detailsPopup.html'        
  
  });

app.controller('testSwipe', function testSwipe($scope) {
    $scope.swipe = function($event) {
        console.log($event);
    };
})

app.controller('deptrai',function deptrai($scope){
    $scope.xautrai = "Loc";
});


var appController = angular.module('AppController', []);

appController.controller('MenuCtrl', ['$scope', function($scope) {
  $scope.menu_on = false;
}]);

appController.controller('MainCtrl', ['$scope', '$location',
  function($scope, $location) {
    $scope.$on('$locationChangeStart', function(event) {
      path = $location.path();
      console.log(path);
      $scope.show_aside = true;
      if (path.indexOf('new') != -1 || path.indexOf('edit') != -1 || path.indexOf('about') != -1) {
        $scope.show_aside = false;
      }
    });
  }
]);

appController.controller('SearchCtrl', ['$scope', '$filter', 'Posts',
  function($scope, $filter, Posts) {
    $scope.search = "";
    // $scope.result = [];
    $scope.$watch('search', function() {
      if ($scope.search !== "") {
        $scope.result = $filter('filter')(Posts.posts, {$: $scope.search});
      }
      else $scope.result = [];
    });
  }
]);

appController.animation('.menu', function() {
  return {
    enter: function(element, done) {
      element.css("display", "none").slideDown('400', done);
    },
    leave: function(element, done) {
      element.slideUp('400', done);
    }
  };
});

appController.animation('.menu-btn', function() {
  return {
    addClass: function(element, className, done) {
      jQuery(element).addClass(className, done);
      if (className == "glyphicon-remove") element.css("color", "white");
      // console.log("class added: ", className);
    },
    removeClass: function(element, className, done) {
      jQuery(element).removeClass(className, done);
      element.css("color", "black");
      // console.log("class removed: ", className);
    }
  };
});

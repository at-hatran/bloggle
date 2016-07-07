var appController = angular.module('AppController', []);

appController.controller('MenuCtrl', ['$scope', function($scope) {
  $scope.menu_on = false;
}]);

appController.controller('TinyMCECtrl', ['$scope', function($scope) {

}]);

appController.animation('.menu', function() {
  return {
    enter: function(element, done) {
      element.css("display","none").slideDown('400', done);
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

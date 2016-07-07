angular.module('Bloggle.Weather').directive('weatherInfo', [function(WeatherService) {
  return {
    restrict: "E",
    scope: {
      info: "=",
    },
    templateUrl: "bloggle/weather/directives/weatherInfo.html"
  };
}]);
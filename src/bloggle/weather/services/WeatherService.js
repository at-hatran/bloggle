angular.module('Bloggle.Weather').factory('WeatherService', ['$resource',
  function($resource){
    return $resource("https://query.yahooapis.com/v1/public/yql");
}]);

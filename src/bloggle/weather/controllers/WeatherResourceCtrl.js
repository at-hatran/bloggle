angular.module('Bloggle.Weather').controller('WeatherResourceCtrl', ['$scope', '$interval', 'WeatherService',
  function($scope, $interval, WeatherService) {
    $scope.weather_data = {};
    getdata = function() {
      WeatherService.get({
        q: "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=\"danang, vietnam\") and u='c'",
        format: 'json',
        env: "store://datatables.org/alltableswithkeys"
        },
        function success(response) {
          // console.log(typeof(response));
          data = response.query.results.channel;
          units = data.units;
          city = data.location.city + ", " + data.location.country;
          today = {
            condition: data.item.condition,
            wind: data.wind,
            pressure: data.atmosphere.pressure,
            humidity: data.atmosphere.humidity,
          };
          three_days = data.item.forecast.slice(1, 4);
          $scope.weather_data = {today: today, three_days: three_days, units: units, city: city};
        },
        function error(err) {
          console.log("Error: " + JSON.stringify(err));
        });
    };
    getdata();
    // update every 30 minutes
    $interval(function() {getdata();}, 30*60*1000);
}]);

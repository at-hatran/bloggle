var bloggle = angular.module('Bloggle', [
  'ngRoute',
  'ngResource',
  'ngAnimate',
  'ngSanitize',
  'ui.tinymce',
  // 'mgcrea.ngStrap',
  'Bloggle.Common',
  'Bloggle.Blog',
  'Bloggle.Weather',
]);

bloggle.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'bloggle/blog/views/blog.html',
        controller: 'BlogViewCtrl',
      })
      .when('/about', {
        templateUrl: 'bloggle/blog/views/about.html',
        // controller: 'BlogAboutCtrl',
      })
      .when('/post/new', {
        templateUrl: 'bloggle/blog/views/new-post.html',
        controller: 'DoPostCtrl',
      })
      .when('/post/:id/edit', {
        templateUrl: 'bloggle/blog/views/new-post.html',
        controller: 'DoPostCtrl',
      })
      .when('/post/:id', {
        templateUrl: 'bloggle/blog/views/post.html',
        controller: 'PostViewCtrl'
      });
  }
]);

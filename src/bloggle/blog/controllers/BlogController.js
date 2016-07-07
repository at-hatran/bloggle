// var blogController = angular.module('BlogController', []);

angular.module('Bloggle.Blog').controller('BlogViewCtrl', ['$scope', 'Posts',
  function($scope, Posts) {
    $scope.posts = Posts.posts;
  }
]);

angular.module('Bloggle.Blog').controller('DoPostCtrl', ['$scope', '$sce', '$location', '$routeParams', 'Posts',
  function DoPostCtrl($scope, $sce, $location, $routeParams, Posts) {
    $scope.tinymceOptions = {
      selector: 'textarea',
      height: 300,
      theme: 'modern',
      plugins: [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars codesample fullscreen',
        'insertdatetime media nonbreaking save table contextmenu directionality',
        'emoticons template paste textcolor colorpicker textpattern imagetools'
      ],
      toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
      toolbar2: 'print preview media | forecolor backcolor emoticons | codesample',
      image_advtab: true,
      templates: [{
        title: 'Test template 1',
        content: 'Test 1'
      }, {
        title: 'Test template 2',
        content: 'Test 2'
      }],
      content_css: [
        // '//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
        // '//www.tinymce.com/css/codepen.min.css'
      ]
    };
    if ($routeParams.id !== 'undefined') {
      $scope.id = $routeParams.id;
      $scope.post = Posts.postsById()[$routeParams.id];
    }
    else {
      $scope.post = {};
      $scope.post.pub_date = Date.now();
      $scope.post.likes = 0;
      if (Posts.posts.length > 0) {
        $scope.post.id = Posts.posts[Posts.posts.length-1].id + 1;
      }
      else {
        $scope.post.id = 1;
      }
    }
    $scope.doPost = function() {
      // also show css
      $scope.post.content = $sce.trustAsHtml($scope.post.content);
      if (!$scope.id) {
        Posts.add($scope.new_post);
      }
      $location.path('/');
    };
}]);

angular.module('Bloggle.Blog').controller('PostViewCtrl', ['$scope', '$routeParams', 'Posts',
  function PostViewCtrl($scope, $routeParams, Posts) {
    $scope.post = Posts.postsById()[$routeParams.id];
}]);
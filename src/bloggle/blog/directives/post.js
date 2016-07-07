angular.module('Bloggle.Blog').directive('blogPost', ['Posts', function(Posts) {
  return {
    restrict: 'E',
    scope: {
      post: '=',
    },
    templateUrl: 'bloggle/blog/directives/post.html',
    link: function (scope, element, attr) {
      scope.liked = false;
      scope.like = function() {
        angular.element(element[0].querySelector('.likes .glyphicon')).toggleClass('liked');
        if (scope.liked) {
          this.post.likes -= 1;
        }
        else {
          this.post.likes += 1;
        }
        scope.liked = !scope.liked;
      };
      scope.delete = function() {
        confirmed = confirm("Do you want to delete this post?");
        if (confirmed) {
          Posts.posts.splice(Posts.posts.indexOf(this.post), 1);
        }
      };
    }
  };
}]);

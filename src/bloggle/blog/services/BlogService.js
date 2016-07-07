angular.module('Bloggle.Blog').factory('Posts', function() {
  return {
    posts: [
      {
        id: 1,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, eaque?",
        pub_date: 1437325200000,
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum veritatis distinctio enim eligendi non consectetur, mollitia quas. Vel et voluptatibus, cupiditate similique non nihil fuga, explicabo consectetur culpa quo voluptates est adipisci, officia, id doloremque eaque. Harum eligendi iste, obcaecati expedita, natus ipsum vero cupiditate aliquid, odio omnis laudantium at quas cumque quia ab consequatur voluptatibus! Repellendus nostrum quisquam dolores hic labore animi deleniti corporis, veniam, optio. Quas nemo dolorem ipsum excepturi mollitia explicabo dolorum dicta laudantium at, laboriosam atque, consequatur quis voluptatibus repellat veritatis aperiam quos. Obcaecati, laudantium, debitis.",
        likes: 10,
      },
      {
        id: 2,
        title: "Lorem ipsum dolor sit amet, consectetur.",
        pub_date: 1434042000000,
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, quam. Fugiat architecto, perferendis corporis aut sequi fuga sapiente delectus possimus quas eaque! Nihil ab amet est laudantium iste enim veritatis illum saepe, voluptatum, fugiat, perspiciatis voluptatibus aspernatur voluptates corporis explicabo. Beatae fugit odit sapiente consequuntur! Itaque vel quam perferendis tempore. Porro officiis ut commodi libero perferendis ipsam optio quam repellendus alias magni rem quae accusamus laborum neque quisquam nulla id sint odit tenetur, ad sed pariatur quo. Iusto tempora vero rerum facere quod neque, ratione error ducimus minus culpa quis dolores cumque magni nostrum rem asperiores impedit esse repudiandae eum. Blanditiis sed error doloremque eaque repudiandae voluptate hic minima quia. Laboriosam sapiente ipsum similique ab eveniet nam odit totam perferendis consequatur quasi assumenda debitis dolor quisquam ullam quia laborum obcaecati, in deleniti, labore temporibus illo! Fuga distinctio quod quae esse repudiandae hic aperiam similique soluta harum in. Quod, illum quasi.",
        likes: 5,
      },
      {
        id: 3,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        pub_date: 1433091600000,
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id consequuntur perspiciatis voluptas quae deleniti voluptates quos, nihil libero rerum quasi iure, cum velit fuga fugit inventore eum vel error neque sunt earum, dicta ratione quis! Perferendis vero, quod. Reprehenderit, impedit! Eveniet veritatis eius libero tempore reiciendis dolores quod obcaecati saepe molestias nostrum sequi laudantium consequatur, placeat laborum maiores, quo laboriosam quia tenetur voluptate cum necessitatibus ipsum! Quia provident, dignissimos magnam debitis minima quae, aliquam. Quia debitis incidunt recusandae eveniet porro dolore necessitatibus magni, voluptate placeat. Quaerat quas necessitatibus officia accusantium consectetur recusandae quos nisi harum, ipsa expedita deleniti. Provident, eos.",
        likes: 31,
      }
    ],
    postsById: function() {
      postsById = {};
      this.posts.forEach(function(post) {
        postsById[post.id] = post;
      });
      return postsById;
    },
    add: function(post) {
      this.posts.unshift(post);
    },
  };
});

define(['app'], function (app) {
  'use strict';

  var Router = Backbone.SubRoute.extend({
    routes : {
      ':churchId' : 'showBlog',
      ':churchId/new-post' : 'showPost',
      ':churchId/:postId' : 'showPost'
    },

    showBlog : function (churchId) {
      app.controllers.blog.showBlog(churchId);
    },

    showPost : function (churchId, postId) {
      app.controllers.blog.showPost(churchId, postId);
    },
  });

  return Router;
});

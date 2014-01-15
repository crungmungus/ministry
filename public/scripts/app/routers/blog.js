define(['app'], function (app) {
  'use strict';

  var Router = Backbone.SubRoute.extend({
    routes : {
      ':churchId/:postId' : 'showPost'
    },

    showPost : function (churchId, postId) {
      app.controllers.blog.showPost(postId);
    },
  });

  return Router;
});

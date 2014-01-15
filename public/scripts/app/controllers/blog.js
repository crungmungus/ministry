define([
  'app',
  'views/blog/main',
  'views/blog/post',
  'collections/posts'
],
function (app, BgView, PsView, PsCollection) {
  'use strict';

  var Controller = Backbone.Marionette.Controller.extend({
    initialize : function () {
      this.collection = new PsCollection();
      this.listenTo(app, 'post:selected', this.showPost);
    },

    showBlog : function (postId) {
      console.log('nothing here.');
    },

    showPost : function (postId) {
      var view = new PsView({
        model : this.collection.get(postId)
      });

      app.layout.main.show(view);
    }
  });

  return Controller;
});

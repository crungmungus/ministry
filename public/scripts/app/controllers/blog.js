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
      this.listenTo(app, 'post:create', this.showPost);
    },

    showBlog : function (churchId) {
      console.log('nothing here.');
    },

    showPost : function (churchId, postId) {
      console.log(churchId);
      
      var view;

      this.collection.church = churchId;

      this.collection.fetch().then(_.bind(function () {
        view = new PsView({
          postId : postId,
          collection : this.collection
        });

        app.layout.main.show(view);
      }, this));
    }
  });

  return Controller;
});

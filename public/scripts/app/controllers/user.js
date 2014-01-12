define([
  'app',
  'collections/users',
  'views/users/main'
],
function (app, UsCollection, UserView) {
  'use strict';

  var Controller = Backbone.Marionette.Controller.extend({
    initialize : function () {
      this.collection = new UsCollection();
      this.listenTo(app, 'user:selected', this.showUser);
    },

    showUser : function (userId) {
      var view, collection = this.collection;

      view = new UserView({
        model : collection.get(userId)
      });

      app.layout.main.show(view);
    }
  });

  return Controller;
});

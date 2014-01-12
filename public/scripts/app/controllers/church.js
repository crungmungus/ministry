define([
  'app',
  'collections/churches',
  'views/churches/main'
],
function (app, ChCollection, ChurchView) {
  'use strict';

  var Controller = Backbone.Marionette.Controller.extend({
    initialize : function () {
      this.collection = new ChCollection();
      this.listenTo(app, 'church:selected', this.showChurch);
    },

    showChurch : function (churchId) {
      var view, collection = this.collection;

      this.collection.fetch().then(function () {
        view = new ChurchView({
          model : collection.get(churchId)
        })

        app.layout.main.show(view);
      });
    }
  });

  return Controller;
});

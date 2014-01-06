define([
  'app',
  'views/churches/main'
], 
function (app, ChurchView) {
  'use strict';

  var Presenter = Backbone.Marionette.Controller.extend({
    initialize : function () {
      this.listenTo(app, 'church:selected', this.showChurch);
    },

    showChurch : function (churchId) {
      app.layout.main.show(new ChurchView());
    }
  });

  return Presenter;
});

/**
 * Main dashboard view.
 * Presents the user with the hello data and shortcuts to different places.
 */
define([
  'app',
  'views/churches/list',
  'text!templates/dashboard/main.html'
],
function (app, ChListView, template) {
  'use strict';

  var View = Backbone.View.extend({
    id : 'dashboard',

    initialize : function () {
      _.bindAll(this, 'onData');

      this.collection.fetch().then(this.onData);
      this.template = template;
    },

    onData : function () {
      this.ready = true;
      this.render();
    },

    render : function () {
      var data;

      if(this.ready) {
        data = _.last(this.collection.models);

        var t = new ChListView({
          collection : data.get('churches')
        });

        this.$el.html(_.template(this.template, {
          user : app.user,
          ministry : data.get('ministry')
        }, { variable : 'data' }));
      }

      return this.$el;
    }
  });

  return View;
});
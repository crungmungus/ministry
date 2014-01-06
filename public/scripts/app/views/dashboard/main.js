/**
 * Main dashboard view.
 * Presents the user with the hello data and shortcuts to different places.
 */
define([
  'app',
  'views/ministry/details',
  'text!templates/dashboard/main.html'
],
function (app, MnDetailsView, template) {
  'use strict';

  var View = Backbone.Marionette.Layout.extend({
    id : 'dashboard',

    regions : {
      welcome  : '#welcome',
      ministry : '#ministry',
      churches : '#churches'
    },

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

        this.$el.html(_.template(this.template, {
          ministry : data.get('ministry'),
          churches : data.get('churches')
        }, { variable : 'data' }));
      }

      return this.$el;
    }
  });

  return View;
});
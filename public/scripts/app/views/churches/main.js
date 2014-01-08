/**
 * Main dashboard view.
 * Presents the user with the hello data and shortcuts to different places.
 */
define([
  'app',
  'text!templates/churches/main.html'
],
function (app, template) {
  'use strict';

  var View = Backbone.View.extend({
    events : {
      'submit .edit-block' : 'onBlockSave'
    },

    initialize : function () {
      this.listenTo(this.model, 'change', this.onModelChange);
    },

    onBlockSave : function () {
      this.model.set('address', this.$('#address').val());
      this.model.set('city', this.$('#city').val());
      this.model.set('country', this.$('#country').val());
      this.model.set('twitter', this.$('#twitter').val());

      this.model.set('mission', this.$('#mission-edit-form textarea').val());

      this.model.save();

      return false;
    },

    onModelChange : function () {
      this.render();
    },

    render : function () {
      this.$el.html(_.template(template, {
        data : this.model.toJSON()
      }));

      return this.$el;
    }
  });

  return View;
});
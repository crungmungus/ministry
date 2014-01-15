/**
 */
define([
  'app',
  'text!templates/blog/post.html'
],
function (app, template) {
  'use strict';

  var View = Backbone.View.extend({
    events : {
      'submit' : 'onPostSave',
      'click .post-publish' : 'onPublish',
    },

    onPostSave : function () {
      this.model.set('title', $('#post-title').val());
      this.model.set('body', $('#post-body').val());

      this.model.save();
      return false;
    },

    onPublish : function () {
      return false;
    },

    render : function () {
      this.$el.html(_.template(template, this.model.toJSON()));
      return this.$el;
    }
  });

  return View;
});
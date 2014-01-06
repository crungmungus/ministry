define(function () {
  'use strict';

  /**
   */
  var App = Marionette.Application.extend({
    user : {
      username : 'jamesg',
      realname : 'James'
    }
  });

  return new App();
});
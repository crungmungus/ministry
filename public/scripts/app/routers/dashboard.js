define(['app', 'views/dashboard/main','collections/hello'], function (app, DashView, Hello) {
  'use strict';

  var Router = Backbone.SubRoute.extend({
    routes : {
      '' : 'root'
    },

    root : function () {
      var v = new DashView({
        collection : new Hello()
      });
    }
  });

  return Router;
});

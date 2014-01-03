var ministry = {
  routers : {}
};

/**
 * Hello message.
 * Not a serial collection but rather a composition of summary data.
 */
var Hello = Backbone.Collection.extend({
  url : '/api/hello',

  initialize : function () {
    this.fetch();
  }
});

/**
 * Main dashboard view.
 * Presents the user with the hello data and shortcuts to different places.
 */
var DashboardView = Backbone.View.extend({
  initialize : function () {
    console.log('dashboard view loaded.');
  }
});

/**
 */
var MainRouter = Backbone.Router.extend({
  routes : {
    'dashboard*subroute' : 'invokeDashModule',
    'user*subroute' : 'invokeUserModule'
  },

  invokeUserModule : function (subroute) {
    if(!ministry.routers.users) {
      ministry.routers.users = new UserRouter('user');
    }
  },

  invokeDashModule : function (subroute) {
    if(!ministry.routers.dashboard) {
      ministry.routers.dashboard = new DashRouter('dashboard');
    }
  }
});

/**
 */
var DashRouter = Backbone.SubRoute.extend({
  routes : {
    '' : 'home'
  },

  home : function () {
    var view = new DashboardView({
      collection : new Hello()
    });
  }
});

/**
 */
var UserRouter = Backbone.SubRoute.extend({
  routes : {
    '' : 'home',
    'login' : 'login'
  },

  home : function () {
    console.log('user screen');
  },

  login : function () {
    console.log('login form.');
  }
});

new MainRouter();
Backbone.history.start();
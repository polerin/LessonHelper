'use strict';

// all the controllers
var LessonPlans = require('controller/lessonPlans.js');

// Router factory
var MainRouterFactory = function(bottle){
    // Create Routes
    var routes = {
        '' : "LessonPlans:index"
    };

    // Register all the controllers with the bottle
    bottle.service('Controller.LessonPlans', LessonPlans, 'Backbone', 'jQuery', 'underscore', 'App');

    // Create the router and return
    var BottleRouter = bottle.BottleRouter;
    return new BottleRouter({routes: routes});
};

module.exports = MainRouter;

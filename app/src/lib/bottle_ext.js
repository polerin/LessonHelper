'use strict';

var BottleJs = require('lib/bottle');
var Bottle = new BottleJs();

/**
 * Default Services
 */
var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

Bottle.value('$', $);
Bottle.value('_', _);
Bottle.value('Backbone', Backbone);


/**
 * Set up the decorator for controllers, adding extend/etc
 */


/**
 * Constructed Services
 */
var BottleRouter = require('lib/bottleRouter');
var MainRouter = require('service/mainRouter');

// These two are factories because they need the bottle
Bottle.factory('BottleRouter', BottleRouter);
Bottle.factory('MainRouter', MainRouter);





module.exports = Bottle;

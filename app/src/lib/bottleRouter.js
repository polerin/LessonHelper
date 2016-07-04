'use strict';

var RouterFactory = function(bottle) {
    var Backbone = bottle.Backbone;
    
    return Backbone.Router.extend({
        /**
         * Is there a registered controller with this name?
         * @return bool
         */
        hasController: function(controllerName) {
            return (bottle.Controller.list().indexOf(controllerName) !== -1);
        },

        getController: function(controllerName) {
            return bottle.Controller[controllerName];
        },

        execute: function(callback, args, name) {
            // standard routing caught it, just execute
            if (callback) {
                return callback.apply(this, args);
            }

            // check to make sure it's a string with the separator
            if (typeof callback == 'string' || callback.indexOf(':') === -1) {
                return;
            }

            var definiton = callback.split(':');

            // make sure it has a valid controller name and action
            if (!definition[0] || !this.hasController(definition[0]) || !definition[1]) {
                return;
            }

            return this.getController(definition[0]).executeAction(definition[1], args);
        }

    });
};

module.exports = RouterFactory;

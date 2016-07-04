'use strict';

var AppFactory = function(Backbone, $, _, Router ){
    var defaultConfig= {};
    var bottleContainer;

    return {
        init: function(bottle, options) {
            this.setConfig(options.config)
                .setBottle(bottle);

            // Just in case there are asynch init ops, create promise
            var initPromise = new $.Deferred();

            // None for now, just return resolved
            initPromise.resolve();
            return initPromise;
        },

        setConfig: function(config) {
            config = config || {};
            if (config) {
                this.config = _.merge(defaultConfig, config);
            }

            return this;
        },

        setBottle: function(bottle) {
            if (bottle) {
                bottleContainer = bottle;
            }

            return this;
        },

        bottle: function() {
            return bottleContainer;
        }
    }

};

module.exports = AppFactory;

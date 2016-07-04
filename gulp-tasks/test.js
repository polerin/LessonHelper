'use strict';

var runKarma = require('./helpers/runKarma');

module.exports = function (gulp, plugins) {

    return function () {
        runKarma(plugins, 'karma.conf.js', {
            autoWatch: false,
            singleRun: true
        });
    };
};

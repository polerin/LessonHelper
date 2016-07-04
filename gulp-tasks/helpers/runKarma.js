'use strict';

module.exports = function (plugins, configFilePath, options) {
    configFilePath = plugins.path.resolve(configFilePath);

    var log = plugins.util.log;
    var colors = plugins.util.colors;
    var config = plugins.karmaParseConfig(configFilePath, {});

    Object.keys(options).forEach(function (key) {
        config[key] = options[key];
    });

    var server = new plugins.karma.Server(config, function (exitCode) {
        log('Karma has exited with ' + colors.red(exitCode));
        //process.exit(exitCode);
    });

    server.start();
};

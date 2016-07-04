var AppFactory = require('app');
var bottle = require('lib/bottle_ext');
var config = require('config.json');

bottle.service('App', AppFactory, 'Backbone', 'jQuery', 'underscore');

debugger;
var App = bottle.App;
App.init(bottle, config).then(
    function() {
        console.log('app init');
    }.bind(App),
    function(error) {
        console.log('unable to start');
    }.bind(App)
)

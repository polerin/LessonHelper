'use script';

module.exports = function (gulp, plugins) {
    return function () {
        gulp.src(['./app/*.js','./app/**/*.js', './test/*.js'])
            .pipe(plugins.jshint())
            .pipe(plugins.jshint.reporter('default'));
    };
};
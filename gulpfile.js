'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var livereload = require('gulp-livereload');

// Attach required plugins to be passed to each module.
plugins.argv = require('yargs').argv;
plugins.browserify = require('browserify');
plugins.browserSync = require('browser-sync');
plugins.buffer = require('vinyl-buffer');
plugins.karma = require('karma');
plugins.karmaParseConfig = require('karma/lib/config').parseConfig;
plugins.glob = require('glob');
plugins.hbsfy = require('hbsfy');
plugins.path = require('path');
plugins.source = require('vinyl-source-stream');
plugins.transform = require('vinyl-transform');

// Configure handlebars compilation
plugins.hbsfy.configure({
    extensions: ['hbs'],
    precompilerOptions: {
        knownHelpersOnly: false
    }
});

// Define Gulp Tasks.
gulp.task('styles', getTask('styles'));
gulp.task('lint', getTask('lint'));
gulp.task('test', getTask('test'));
gulp.task('test-dev', getTask('testDev'));
gulp.task('scripts', getTask('scripts'));

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('sass/**/*.scss', ['styles']);
    gulp.watch(['app/src/**/*.js'], ['scripts']);
});

gulp.task('watch-css', function () {
    gulp.watch('sass/**/*.scss', ['styles']);
});

gulp.task('watch-js', function () {
    gulp.watch(['app/src/**/*.js', 'app/**/*.hbs'], ['scripts']);
});

gulp.task('build', ['styles', 'scripts']);

gulp.task('reload', function() {
    gulp.watch('');
});

// Default task for gulp is to build.
gulp.task('default', ['build'], function () {});


/**
 * Helper function for setting up tasks.
 *
 * @param task
 * @returns {*}
 */
function getTask(task) {
    return require('./gulp-tasks/' + task)(gulp, plugins);
}

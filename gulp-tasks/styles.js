'use strict';

var config = require('./config');

module.exports = function (gulp, plugins) {
    return function () {
        //gulp.src('./sass/**/*.scss', { base: '.' })
        gulp.src(['./sass/main.scss'], { base: '.' })
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.sass().on('error', plugins.sass.logError))
            .pipe(plugins.autoprefixer({
                browsers: ['last 2 versions']
            }))
            .pipe(plugins.concat('main.css'))
            .pipe(plugins.minifyCss({compatibility: 'ie8'}))
            .pipe(plugins.rename('frontend-main.min.css'))
            .pipe(plugins.sourcemaps.write())
            .pipe(gulp.dest('.public/css/'))
            .pipe(plugins.browserSync.stream());
    };
};

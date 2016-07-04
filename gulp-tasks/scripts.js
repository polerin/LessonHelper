'use script';

module.exports = function (gulp, plugins) {
    return function () {
        plugins.glob('./app/src/**/*.js', {}, function (err, files) {
            var b = plugins.browserify({
                paths: ['./node_modules', './app/src']
            });

            files.forEach(function (file) {
                b.add(file);
            });

            b.transform(plugins.hbsfy)
                .bundle()
                .on('error', plugins.util.log)
                .pipe(plugins.source('frontend-main.min.js'))
                .pipe(plugins.buffer())
                .pipe(plugins.if(plugins.argv.production, plugins.uglify()))
                .pipe(gulp.dest('./public/js'));
        });
    };
};

'use strict';

var path = require('path');
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var onError = function (error) {
    plugins.util.log(error);
    this.emit('end');
};

gulp.task('jade', function () {
    gulp.src('src/jade/*.jade')
        .pipe(plugins.jade({
            pretty: true,
            basedir: path.join(__dirname, 'src/jade')
        })).on('error', onError)
        .pipe(gulp.dest('./src'))
});

gulp.task('less', function () {
    return gulp.src('src/less/app.less')
        .pipe(plugins.less()).on('error', onError)
        .pipe(gulp.dest('src/css'));
});

gulp.task('server', function () {
    plugins.connect.server({
        'root': './',
        'port': 8000
    });
});

gulp.task('dev', ['server', 'watch']);

gulp.task('watch', function () {
    gulp.watch('src/less/**/*.less', ['less']);
    gulp.watch('src/jade/**/*.jade', ['jade']);
});

gulp.task('build', ['jade', 'less']);

gulp.task('build-production', ['jade', 'less']);

gulp.task('default', ['watch']);
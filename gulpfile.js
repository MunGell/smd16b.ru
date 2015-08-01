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
        .pipe(gulp.dest('./dist'))
});

gulp.task('less', function () {
    return gulp.src(['src/less/app.less', 'src/less/css.less'])
        .pipe(plugins.less()).on('error', onError)
        .pipe(gulp.dest('dist/css'));
});

gulp.task('img', function () {
    return gulp.src('src/img/*.*')
        .pipe(gulp.dest('dist/img'));
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

gulp.task('build', ['jade', 'less', 'img']);

gulp.task('default', ['watch']);
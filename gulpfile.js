var gulp = require('gulp');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var del = require('del');

gulp.task('clean', function (cb) {
    del('dist', cb);
});

gulp.task('connect', function () {
    connect.server({
        root: 'src',
        livereload: true
    });
});

gulp.task('watch', function () {
    watch(['!jspm_packages', 'src/**/*'], function (file) {
        connect.reload().write(file);
    });
});

gulp.task('default', ['connect', 'watch']);

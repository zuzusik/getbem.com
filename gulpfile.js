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
    watch(['!jspm_packages', 'src/**/*'])
        .pipe(connect.reload());
});

gulp.task('default', ['connect', 'watch']);

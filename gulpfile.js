var gulp = require('gulp');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var del = require('del');
var Duo = require('duo');
// var jade = require('duo-jade');

gulp.task('clean', function (cb) {
    del('dist', cb);
});

gulp.task('js', function (cb) {
    new Duo(__dirname + '/src')
        .installTo('../components')
        .buildTo('../dist')
        .entry('index.js')
        .write(cb);
});

gulp.task('css', function (cb) {
    new Duo(__dirname + '/src')
        .installTo('../components')
        .buildTo('../dist')
        .entry('index.css')
        .write(cb);
});

gulp.task('html', function () {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('images', function () {
    return gulp.src('src/images/**/*').pipe(gulp.dest('dist/images'));
});

gulp.task('favicon', function () {
    return gulp.src('src/favicon.png').pipe(gulp.dest('dist'));
});

gulp.task('assets', ['images', 'favicon']);

gulp.task('build', ['js', 'css', 'html', 'assets']);

gulp.task('watch', function () {
    watch(['src/**/*'], function () {
        gulp.start('build');
    });
});

gulp.task('connect', function () {
    connect.server({
        root: 'dist',
        livereload: true
    });
});

gulp.task('default', ['build', 'connect']);

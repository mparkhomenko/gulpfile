var gulp = require('gulp'),
    miniCSS = require('gulp-minify-css'),
    renameFile = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    jsmin = require('gulp-jsmin');

gulp.task('css', function() {
    return gulp.src('css/style.css')
        .pipe(miniCSS('style.css'))
        .pipe(renameFile('style.min.css'))
        .pipe(autoprefixer('last 15 versions'))
        .pipe(gulp.dest('css/'))
});

gulp.task('javascript', function () {
    return gulp.src('js/script.js')
        .pipe(jsmin('script.js'))
        .pipe(renameFile('script.min.js'))
        .pipe(gulp.dest('js/'))
});

gulp.task('watch', function () {
    gulp.watch('css/style.css', ['css'])
    gulp.watch('js/script.js', ['javascript'])
});

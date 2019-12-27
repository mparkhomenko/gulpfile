let {task, dest, src, series} = require('gulp'),
    miniCSS = require('gulp-minify-css'),
    renameFile = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    jsmin = require('gulp-jsmin'),
    cleanCSS = require('gulp-clean-css');

task('css', () => {
    return src('css/main.css')
        .pipe(miniCSS('main.css'))
        .pipe(cleanCSS('main.css'))
        .pipe(renameFile('main.min.css'))
        .pipe(autoprefixer('last 15 versions'))
        .pipe(dest('css/'))
});

task('javascript', () => {
    return src('js/functions.js')
        .pipe(jsmin('functions.js'))
        .pipe(renameFile('functions.min.js'))
        .pipe(dest('js/'))
});

exports.default = series('css-main', 'javascript');

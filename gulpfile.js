let {task, dest, src, watch, series} = require('gulp'),
    miniCSS = require('gulp-minify-css'),
    renameFile = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    jsmin = require('gulp-jsmin'),
    cleanCSS = require('gulp-clean-css');

task('css-main', () => {
    return src('css/main.css')
        .pipe(miniCSS('main.css'))
        .pipe(cleanCSS('main.css'))
        .pipe(renameFile('main.min.css'))
        .pipe(autoprefixer('last 15 versions'))
        .pipe(dest('css/'))
});

task('css-mobile', () => {
    return src('css/main-mobile.css')
        .pipe(miniCSS('main-mobile.css'))
        .pipe(cleanCSS('main-mobile.css'))
        .pipe(renameFile('main-mobile.min.css'))
        .pipe(autoprefixer('last 15 versions'))
        .pipe(dest('css/'))
});

task('javascript', () => {
    return src('js/functions.js')
        .pipe(jsmin('functions.js'))
        .pipe(renameFile('functions.min.js'))
        .pipe(dest('js/'))
});

task('watch', () => {
    watch('css/main.css', series('css-main'))
    watch('js/functions.js', series('javascript'))
    watch('css/main-mobile.css', series('css-mobile'))
});

exports.default = series('css-main', 'javascript', 'css-mobile');

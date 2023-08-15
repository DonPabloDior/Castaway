const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const fileinclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();
const { gsap } = require('gsap');
//Styles
function style(){
    return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream())
}
//Include html
function html() {
  return gulp.src(['src/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('dist'));
}
function js(){
    return gulp.src('./js/**/*.js')
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.stream())
}
//watch
function watch(){
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    })
    gulp.watch('./scss/**/*.scss', style)
    gulp.watch('src/**/*.html', html).on('change', browserSync.reload);
    gulp.watch('./js/**/*.js', js);
}
function build() {
    return gulp.series(style, html, js);
  }

exports.style = style;
exports.watch = watch;
exports.html = html;
exports.js = js;
exports.build = build;
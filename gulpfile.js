var gulp = require('gulp');
var babel = require('gulp-babel');
var es2015 = require('babel-preset-es2015');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

gulp.task('babel',function() {
    gulp.src('./src/js/*.js')
        .pipe(babel({
            presets:[es2015]
        }))
        .pipe(gulp.dest('./dest/js'));
});

gulp.task('sass',function() {
    gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(prefix({
            browsers:['last 3 versions','Android >= 4.0'],
            cascade:true,
            remove:true
        }))
        .pipe(gulp.dest('./dest/css'));
});

gulp.task('default',function() {
    gulp.run('babel','sass');
    gulp.watch('./src/sass/*.scss',['sass']);
    gulp.watch('./src/js/*.js',['babel']);
})

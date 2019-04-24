var gulp = require('gulp'),
sass = require('gulp-sass'),
sourcemaps = require('gulp-sourcemaps'),
autoprefixer = require('gulp-autoprefixer'),
livereload = require('gulp-livereload'),
notify = require("gulp-notify");



//html 
gulp.task('html', function () {
    'use strict';
    return gulp.src("dist/index.html")
    .pipe(livereload())
    .pipe(notify("html is done!"));

    });


//css 
gulp.task('css', function() {
 'use strict';
 return gulp.src("project/scss/*scss")
 .pipe(sourcemaps.init())
 .pipe(sass({outputStyle: 'compressed'}))
 .pipe(autoprefixer({browsers: ['last 2 versions']}))
 .pipe(sourcemaps.write('.'))
 .pipe(gulp.dest("dist/css"))
 .pipe(livereload())
 .pipe(notify("css is done !"));


});

//watch

gulp.task('watch', function () {
    'usr strict';
    livereload.listen();
    gulp.watch("project/scss/*.scss", gulp.series('css'));
    gulp.watch("dist/index.html", gulp.series('html'));
})
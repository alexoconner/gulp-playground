/*
 * Testing gulp
 * File: gulpfile.js
 */

'use strict';

/*
 * define gulp and plugins
 */
var gulp         = require('gulp'),
    usemin       = require('gulp-usemin'),
    minifyHtml   = require('gulp-minify-html'),
    minifyCSS    = require('gulp-minify-css'),
    compileSass  = require('gulp-sass');


/*
 * compile sass and minify css
 */

gulp.task('doMyCSSDuh', function() {
    return gulp.src('app/*.scss')
        .pipe(compileSass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/'));
});



/*
 * creating a task to pick up files from app/ folder, minimize them and output them into a dist folder
 */

gulp.task('uglifyHTML', function() {
    return gulp.src('app/*.html')
        .pipe(usemin({
            html: [minifyHtml({empty: true})]
        }))
        .pipe(gulp.dest('dist/'));
});

/*
 * gulp's default task (just "gulp" in command line)
 */
gulp.task('default', function() {
    gulp.start('uglifyHTML', 'doMyCSSDuh');
});
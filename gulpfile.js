'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

var scss_in = './src/assets/scss/*.scss';
var scss_out = './src/assets/css/';

function compile_scss() {
    return gulp.src(scss_in)
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(changed(scss_out))
        .pipe(gulp.dest(scss_out));
};

function track_scss() {
    gulp.watch(scss_in, compile_scss);
};

gulp.task('default', track_scss);

exports.compile_scss = compile_scss;
exports.track_scss = track_scss;
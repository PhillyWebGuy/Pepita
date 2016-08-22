var gulp = require('gulp'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    cleanCSS = require('gulp-clean-css'),
    copy = require('gulp-copy');

gulp.task('watch',function() {
    gulp.watch('./src/js/*.js', ['scripts']);
    gulp.watch('./src/js/widgets/*.js', ['scripts']);
    gulp.watch('./src/*.html', ['copy-files']);
});

gulp.task('copy-files', function() {
    gulp.src('./src/*.html', {cwd: './'}).pipe(gulp.dest('./dist'));
    gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css', {cwd: './'}).pipe(gulp.dest('./dist/css'));
    gulp.src('./node_modules/bootstrap/dist/css/bootstrap-theme.min.css', {cwd: './'}).pipe(gulp.dest('./dist/css'));
    gulp.src('./node_modules/bootstrap/dist/fonts/*', {cwd: './'}).pipe(gulp.dest('./dist/fonts'));
    gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js', {cwd: './'}).pipe(gulp.dest('./dist/js'));
});

// Delete the dist directory
gulp.task('clean', function() {
    return gulp.src("./dist/*.*")
        .pipe(clean());
});

gulp.task('libraries', function() {
    return gulp.src(['./node_modules/jquery/dist/jquery.js','./node_modules/underscore/underscore.js', './node_modules/bootstrap/dist/js/bootstrap.js'])
        .pipe(concat('libraries.js'))
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('scripts', function() {
    return gulp.src(['./src/js/widget/*.js'])
        .pipe(concat('pepita.js'))
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('default', ['clean', 'copy-files', 'libraries', 'scripts']);



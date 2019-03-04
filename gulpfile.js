const gulp = require('gulp');
	    uglify = require('gulp-uglify'),
	    sass = require('gulp-ruby-sass');
      cleanCSS = require('gulp-clean-css');
const server = require('gulp-express');
// const browserSync = require('browser-sync').create();
const livereload = require('gulp-livereload');
const gutil = require('gulp-util');

//default task
gulp.task('default', ['ejs', 'styles', 'scripts', 'watch', 'server']);

// ejs templating task
gulp.task('ejs', function() {
	return gulp.src('views/**/*.ejs')
	.pipe(livereload());
});

//styles build/minification
gulp.task('styles', function() {
	return sass('app/scss/styles.scss')
	.pipe(cleanCSS())
	.pipe(gulp.dest('public/stylesheets'))
	.pipe(livereload());
});

//scripts task, also "Uglifies" JS
gulp.task('scripts', function() {
	gulp.src('app/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('public/javascripts'))
	.pipe(livereload());
	// .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  livereload.listen();
	gulp.watch('views/**/*.ejs', ['ejs']);
  gulp.watch('app/scss/*.scss', ['styles']);
	gulp.watch('app/js/*.js', ['scripts']);
});

gulp.task('server', function () {
    // Start the server at the beginning of the task
    server.run(['./bin/www']);
});

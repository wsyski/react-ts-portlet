'use strict';

var gulp = require('gulp');
var sass = require('gulp-dart-sass');

var buildUtils = require('./scripts/build-utils');

gulp.task('scss', () => {
	return gulp
		.src(['./src/css/**/*.scss'])
		.pipe(
			sass({includePaths: 'node_modules/@clayui/css/src/scss'}).on(
				'error',
				sass.logError
			)
		)
		.pipe(gulp.dest('./src/css'));
});

gulp.task('scss:watch', () => {
	gulp.watch('./src/css/**/*.scss', ['sass']);
});

gulp.task('publish', (cb) => {
	buildUtils.publish();
	cb();
});
gulp.task('deploy', (cb) => {
	buildUtils.deploy();
	cb();
});
gulp.task('clean', (cb) => {
	buildUtils.clean(__dirname);
	cb();
});

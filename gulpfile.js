var gulp = require('gulp'),
	karma = require('karma').server;

/**
* Run test once and exit
*/
gulp.task('test', function(done){
	karma.start({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	}, done);
});

/**
* Watch for file changes and re-run tests on each changes
*/
gulp.task('tdd', function(done){
	karma.start({
		configFile: __dirname + '/karma.conf.js'
	}, done);
});

gulp.task('default', ['tdd']);
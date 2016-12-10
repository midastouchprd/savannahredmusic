const gulp = require('gulp');
const shell = require('gulp-shell');
const browserSync = require('browser-sync').create();


gulp.task('watch', function() {
    gulp.watch('./partials/*.html', ['browser-sync']);
    gulp.watch('./js/**/*.js', ['browser-sync']);
});


gulp.task('browser-sync', function() {
    browserSync.reload();
});

gulp.task('default', [
    'watch'
])

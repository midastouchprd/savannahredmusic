const gulp = require('gulp');
const shell = require('gulp-shell');


gulp.task('watch', function() {
    gulp.watch('./partials/*.html', ['bundle']);
    gulp.watch('./app/**/*.js', ['bundle']);
});


gulp.task('bundle', shell.task([
    'clear',
    'ga .',
    'gca "'
]))

gulp.task('default', [
    'watch'
])

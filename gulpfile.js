const gulp = require('gulp');
const shell = require('gulp-shell');
const browserSync = require('browser-sync').create();
var reload      = browserSync.reload;



gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./*.html').on('change', reload)
    gulp.watch('./*.css').on('change', reload)
    gulp.watch('./*.js').on('change', reload)

  });



gulp.task('default', [
    'serve'
])

var gulp = require('gulp');

var ghPages = require('gulp-gh-pages');

gulp.task('build', () => {

return gulp.src('./src/**/*')

.pipe(gulp.dest('./public/'))

.pipe(ghPages());

})
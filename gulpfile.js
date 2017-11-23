const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglifyjs');
const rename = require('gulp-rename');

gulp.task('default', () => {
  return gulp.src('src/lodash-for-vue.js')
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(rename('lodash-for-vue.es5.js'))
  .pipe(gulp.dest('dist'))
  .pipe(uglify())
  .pipe(rename('lodash-for-vue.min.js'))
  .pipe(gulp.dest('dist'));
});
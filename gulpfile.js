const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const compile = gulpSass(require("sass"));

gulp.task("sass", async () => {
  gulp
    .src("src/components/**/*.scss")
    .pipe(compile())
    .pipe(gulp.dest("src/css"));
});

gulp.task("watching", () => {
  gulp.watch("src/components/**/*.scss", async () => {
    gulp
      .src("src/components/**/*.scss")
      .pipe(compile())
      .pipe(gulp.dest("src/css"));
  });
});

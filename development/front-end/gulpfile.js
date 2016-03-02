"use strict";

var gulp = require("gulp"),
    compass = require('gulp-compass'),
    sassSourcefiles = "./scss/**/*.scss";

gulp.task("compass", function () {
    gulp.src(sassSourcefiles)
        .pipe(compass({
            // The `css` and `sass` directories must be specified both here and in the config.rb file.
            config_file: "./config.rb",
            css: "css",
            sass: "scss"
        }))
        .on("error", function (error) {
        })
        .pipe(gulp.dest("app/assets/temp"));
});

gulp.task("compass:watch", function () {
    gulp.watch(sassSourcefiles, ["compass"]);
});

gulp.task("default", function () {});

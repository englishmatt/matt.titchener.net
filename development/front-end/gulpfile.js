"use strict";

var gulp = require("gulp"),
    typogr = require("gulp-typogr"),
    compass = require("gulp-compass"),
    sassSourcefiles = "./scss/**/*.scss",
    htmlFiles = "./**/*.htm";

gulp.task("compass", function () {
    gulp.src(sassSourcefiles)
        .pipe(compass({
            // The `css` and `sass` directories must be specified both here and in the config.rb file.
            config_file: "./config.rb",
            css: "css",
            sass: "scss"
        }))
        .on('error', function (error) {
            // Do nothing; prevent the gulp task from exiting.
        });
});

gulp.task("typeset", function () {
    gulp.src(htmlFiles)
        .pipe(typogr({
            only: ["smartypants"]
        }))
        .pipe(gulp.dest("./"));
});

gulp.task("compass:watch", function () {
    gulp.watch(sassSourcefiles, ["compass"]);
});

gulp.task("default", function () {});

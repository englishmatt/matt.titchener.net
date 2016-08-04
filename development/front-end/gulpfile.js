"use strict";

var gulp = require("gulp"),
    typogr = require("gulp-typogr"),
    compass = require("gulp-compass"),
    svgmin = require("gulp-svgmin"),
    sassSourcefiles = "src/scss/**/*.scss",
    htmlFiles = "src/**/*.htm",
    svgFiles = "src/svg/**/*.svg";

// Style sheets
gulp.task("compass", function () {
    gulp.src(sassSourcefiles)
        .pipe(compass({
            // The `css` and `sass` directories must be specified both here and in the config.rb file.
            config_file: "./config.rb",
            css: "./dist/css",
            sass: "./src/scss"
        }))
        .on('error', function (error) {
            // Do nothing; prevent the gulp task from exiting.
        });
});

gulp.task("compass:watch", function () {
    gulp.watch(sassSourcefiles, ["compass"]);
});

// HTML
gulp.task("typeset", function () {
    return gulp.src(htmlFiles)
        .pipe(typogr({
            only: ["smartypants"]
        }))
        .pipe(gulp.dest("./dist"));
});

gulp.task("html:watch", function () {
    gulp.watch(htmlFiles, ["typeset"]);
});

// SVG
gulp.task("optimize-svg", function () {
    return gulp.src(svgFiles)
        .pipe(svgmin())
        .pipe(gulp.dest("./dist/images"));
});

gulp.task("svg:watch", function () {
    gulp.watch(svgFiles, ["optimize-svg"]);
});

// Default and composite tasks
gulp.task("watch", ["html:watch", "compass:watch", "svg:watch"]);
gulp.task("default", ["typeset", "compass", "optimize-svg"]);

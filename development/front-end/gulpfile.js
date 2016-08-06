"use strict";

var gulp = require("gulp"),
    typogr = require("gulp-typogr"),
    compass = require("gulp-compass"),
    svgmin = require("gulp-svgmin"),
    inject = require("gulp-inject"),
    typeScript = require("gulp-typescript"),
    del = require("del"),
    sassFiles = "src/scss/**/*.scss",
    cssFiles = [
        "dist/css/normalize.css",
        "dist/css/screen.css",
        "dist/css/**/*.css"
    ],
    htmlFiles = "src/**/*.htm",
    svgFiles = "src/svg/**/*.svg",
    typeScriptFiles = "src/**/*.ts",
    javaScriptFiles = "dist/scripts/**/*.js";

// Style sheets
gulp.task("compass", function () {
    return gulp.src(sassFiles)
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
    gulp.watch(sassFiles, ["compass"]);
});

// HTML
gulp.task("html", ["compass", "typescript"], function () {

    var sourceFiles = gulp.src(cssFiles.concat(javaScriptFiles), { read: false }),
        injectOptions = {
            ignorePath: "dist",
            addRootSlash: false
        };

    return gulp.src(htmlFiles)
        .pipe(typogr({ only: ["smartypants"] }))
        .pipe(inject(sourceFiles, injectOptions))
        .pipe(gulp.dest("./dist"));
});

gulp.task("html:watch", function () {
    gulp.watch(htmlFiles, ["html"]);
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

// TypeScript
gulp.task("typescript", function () {
    return gulp.src(typeScriptFiles)
        .pipe(typeScript())
        .pipe(gulp.dest("./dist"));
});

gulp.task("typescript:watch", function () {
    gulp.watch(typeScriptFiles, ["typescript"]);
});

// Cleaning
gulp.task("clean", function () {
    return del(["dist"]);
});

// Default and composite tasks
gulp.task("watch", ["html:watch", "compass:watch", "svg:watch", "typescript:watch"]);
gulp.task("default", ["clean"], function () {
    gulp.start("html", "optimize-svg");
});

const { series, parallel, src, dest } = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const del = require("delete");
const outputDirectory = "./dist";

function html() {
  // Simple file copy
  return src("./src/**/*.htm")
    .pipe(dest(outputDirectory));
}

function css() {
  return src("./src/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write("./"))   // Compiles source maps alongside CSS files
    .pipe(dest(outputDirectory + "/css"));
}

function clean(callback) {
  // Removes entire dist directory
  del([outputDirectory], callback);
}

const build = parallel(html, css);

exports.default = series(clean, build);
exports.html = html;
exports.css = css;
exports.build = build;
exports.clean = clean;

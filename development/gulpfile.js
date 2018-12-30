const { series, parallel, src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const sassLint = require("gulp-sass-lint");
const htmlHint = require("gulp-htmlhint");
const access = require("gulp-accessibility");
const del = require("delete");
const outputDirectory = "./dist";

const sassFiles = ["./src/scss/**/*.scss"];
const htmlFiles = ["./src/**/*.htm"];

function copyHtml() {
  return src(htmlFiles)
    .pipe(dest(outputDirectory));
}

function lintHtml() {
  return src(htmlFiles)
    .pipe(htmlHint())
    .pipe(htmlHint.failAfterError());
}

function a11yHtml() {
  return src(htmlFiles)
    .pipe(access());
}

const html = parallel(lintHtml, copyHtml, a11yHtml);

function scss() {
  return src(sassFiles)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
}

function css() {

  let sassOptions = {
    outputStyle: "compressed",
    includePaths: ["./node_modules/normalize.css/"]
  };

  return src(sassFiles)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on("error", sass.logError))
    .pipe(sourcemaps.write("./"))   // Compiles source maps alongside CSS files
    .pipe(dest(outputDirectory + "/css"));
}

function clean(callback) {
  // Removes entire dist directory
  del([outputDirectory], callback);
}

const styles = series(scss, css);
const build = parallel(html, styles);

exports.default = series(clean, build);
exports.html = html;
exports.css = css;
exports.build = build;
exports.clean = clean;

exports.watch = () => {
  // Split watching over different file types to avoid unnecessary churn
  watch(sassFiles, styles);
  watch(htmlFiles, html);
};

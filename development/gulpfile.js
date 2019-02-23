const { series, parallel, src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const sassLint = require("gulp-sass-lint");
const htmlHint = require("gulp-htmlhint");
const access = require("gulp-accessibility");
const svgmin = require("gulp-svgmin");
const typeScript = require("gulp-typescript");
const browserSync = require("browser-sync").create();
const del = require("delete");
const outputDirectory = "dist";

// Paths
const sassFiles = ["src/scss/**/*.scss"];
const htmlFiles = ["src/**/*.htm"];
const svgFiles = ["src/images/**/*.svg"];
const typeScriptFiles = ["src/scripts/**/*.ts"];

function live(done) {

  const config = {
    port: 5000,
    server: {
      baseDir: outputDirectory,
      index: "index.htm",
      routes: {
        '/about': outputDirectory + "/about.htm",
        '/': outputDirectory + "/index.htm",
        '/resume': outputDirectory + "/résumé.htm",
        '/résumé': outputDirectory + "/résumé.htm",
        '/project/simplepromisesjs': outputDirectory + "/project/simplepromisesjs.htm"
      }
    },
    watch: true,
    notify: false,
    browser: 'chrome.exe'
  };

  browserSync.init(config);

  watch("dist/images/**/*.svg", (done) => {
    browserSync.reload();
    done();
  });

  done();
}

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

function scripts() {

  return src(typeScriptFiles)
    .pipe(typeScript())
    .pipe(dest(outputDirectory + "/js"));
}

function svgs() {

  return src(svgFiles)
    .pipe(svgmin({
      plugins: [{
        cleanupNumericValues: {
          floatPrecision: 2
        }
      }]
    }))
    .pipe(dest(outputDirectory + "/images"));
}

function clean(done) {
  // Removes entire dist directory
  del([outputDirectory], done);
}

const styles = series(css);
const build = parallel(html, styles, svgs, scripts);

exports.default = series(clean, build);
exports.live = live;
exports.html = html;
exports.css = css;
exports.svgs = svgs;
exports.scripts = scripts;
exports.build = build;
exports.clean = clean;

exports.watch = () => {
  // Split watching over different file types to avoid churn
  watch(sassFiles, styles);
  watch(htmlFiles, html);
  watch(svgFiles, svgs);
  watch(typeScriptFiles, scripts);
};

const { src, dest, series, parallel, watch } = require("gulp");
const concat = require("gulp-concat");
const htmlMin = require("gulp-htmlmin");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const browsersync = require("browser-sync").create();

// const del = require("del");

const fonts = () => {
	return src("src/fonts/**").pipe(dest("dist/fonts/"));
};
// const clean = () => {
// 	return del(["dist/"]);
// };
const html = () => {
	return src("src/**/*.html")
		.pipe(htmlMin({ collapseWhitespace: true }))
		.pipe(dest("dist/"))
		.pipe(browsersync.stream());
};

const styles = () => {
	return (
		src([
			"src/styles/**/*.css",
			// "src/styles/**/*.scss",
			// "src/resources/**/*.css",
		])
			// .pipe(sass().on("error", sass.logError))
			.pipe(sourcemaps.init())
			.pipe(
				autoprefixer({
					cascade: false,
					overrideBrowsersList: ["last 2 versions"],
				})
			)
			.pipe(concat("main.css"))
			.pipe(
				cleanCSS({
					level: 2, // уровень сжатия
				})
			)
			.pipe(sourcemaps.write())
			.pipe(dest("dist/"))
			.pipe(browsersync.stream())
	);
};
const stylesDev = () => {
	return (
		src([
			"src/styles/**/*.css",
			// "src/styles/**/*.scss",
			// "src/resources/**/*.css",
		])
			// .pipe(sass().on("error", sass.logError))
			.pipe(concat("main.css"))
			.pipe(dest("dist/"))
			.pipe(browsersync.stream())
	);
};
// const scripts = () => {
// 	return src(["src/resources/**/*.js", "src/js/**/*.js"])
// 		.pipe(sourcemaps.init())
// 		.pipe(
// 			babel({
// 				presets: ["@babel/preset-env"],
// 			})
// 		)
// 		.pipe(concat("app.js"))
// 		.pipe(
// 			uglify({
// 				toplevel: true, //убирает все переменные
// 			}).on("error", notify.onError())
// 		)
// 		.pipe(sourcemaps.write())
// 		.pipe(dest("dist/"))
// 		.pipe(browsersync.stream());
// };
// const scriptsDev = () => {
// 	return src(["src/resources/**/*.js", "src/js/**/*.js"])
// 		.pipe(concat("app.js"))
// 		.pipe(dest("dist/"))
// 		.pipe(browsersync.stream());
// };

const watchFiles = () => {
	browsersync.init({
		server: {
			baseDir: "dist/",
		},
	});
};

watch("src/fonts/**", fonts);
watch("src/styles/**/*.scss", styles);
watch("src/styles/**/*.css", styles);
// watch("src/js/**/*.js", scripts);
// watch("src/js/**/*.js", scriptsDev);
watch("src/*.html", html);

exports.default = series(parallel(html, fonts), styles, watchFiles);
exports.dev = series(parallel(html, fonts), stylesDev, watchFiles);

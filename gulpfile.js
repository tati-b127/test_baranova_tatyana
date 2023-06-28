const { src, dest, series, parallel, watch } = require("gulp");
const concat = require("gulp-concat");
const htmlMin = require("gulp-htmlmin");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const browsersync = require("browser-sync").create();
const babel = require("gulp-babel");
const notify = require("gulp-notify");
const uglify = require("gulp-uglify-es").default;
const image = require("gulp-image");

const del = require("del");

const fonts = () => {
	return src("src/fonts/**").pipe(dest("dist/fonts/"));
};
const clean = () => {
	return del(["dist/"]);
};
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
const scripts = () => {
	return src(["src/script/**/*.js"])
		.pipe(sourcemaps.init())
		.pipe(
			babel({
				presets: ["@babel/preset-env"],
			})
		)
		.pipe(concat("app.js"))
		.pipe(
			uglify({
				toplevel: true, //убирает все переменные
			}).on("error", notify.onError())
		)
		.pipe(sourcemaps.write())
		.pipe(dest("dist/"))
		.pipe(browsersync.stream());
};
const scriptsDev = () => {
	return src(["src/script/**/*.js"])
		.pipe(concat("app.js"))
		.pipe(dest("dist/"))
		.pipe(browsersync.stream());
};
const images = () => {
	return src([
		"src/img/**/*.jpg",
		"src/img/**/*.png",
		"src/img/**/*.jpeg",
		"src/img/**/*.svg",
		"src/img/**/*.webp",
		"src/img/**/*.ico",
	])
		.pipe(image())
		.pipe(dest("dist/images/"));
};

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
watch("src/script/**/*.js", scripts);
watch("src/script/**/*.js", scriptsDev);
watch("src/*.html", html);
watch("src/img/**/*.png", images);
watch("src/img/**/*.jpg", images);
watch("src/img/**/*.svg", images);

exports.css = styles;

exports.default = series(
	clean,
	parallel(html, fonts, images),
	scripts,
	styles,
	watchFiles
);
exports.dev = series(
	clean,
	parallel(html, fonts, images),
	scriptsDev,
	stylesDev,
	watchFiles
);

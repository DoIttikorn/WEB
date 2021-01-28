const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browersync = require('browser-sync').create();


// Sass Task
function scssTask() {
    return src('app/scss/style.scss', {sourcemaps: true})
        .pipe(sass())
        .pipe(postcss([cssnano()]))
        .pipe(dest('dist', {sourcemaps: '.'}))

}

// Javascript Task
function jsTask() {
    return src('app/js/scripts.js', {sourcemaps: true})
        .pipe(terser())
        .pipe(dest('dist'), {sourcemaps: '.'})
}

// Browsersync Tasks
function browserSyncServe(cb) {
    browersync.init({
        server: {
            baseDir: '.'
        }
    })
    cb();
}

function browersysncReload(cb) {
    browersync.reload();
    cb();
}

//Watch Task
function watchTask() {
    watch('*.html', browersysncReload);
    watch(['app/scss/**/*.scss', 'app/js/**/*.js'], series(scssTask, jsTask, browersysncReload));
}


//Default Gulp task
exports.default = series(
    scssTask,
    jsTask,
    browserSyncServe,
    watchTask
);


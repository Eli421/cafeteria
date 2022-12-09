const{ src, dest, watch, series } = require('gulp');

//CSS y SASS
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

// Imagenes
// const imagemin = require('gulp-imagemin');

function css( done ) {
    //compilar sass a
    //pasos: 1. indentificar archivo 2.compilar 3. Guardar el css 
    src('src/scss/app.scss')
        .pipe(sass())
        .pipe(postcss([autoprefixer()])) 
        .pipe(dest('build/css'))

    done();
}

// function imagenes() {
//     return src('src/img/**/*')
//     .pipe ( imagemin({ optimizationLevel: 3 }) )
//     .pipe( dest('build/img'));
// } 

function dev() {
    watch('src/scss/**/*.scss', css);
    // watch( 'src/img/**/*', imagenes );
}


exports.css = css;
exports.dev = dev;
// exports.imagenes = imagenes;
exports.default = series(css, dev);
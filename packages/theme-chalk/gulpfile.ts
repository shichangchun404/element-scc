import { resolve } from 'path'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import gulpAutoprefixer from 'gulp-autoprefixer'
import cleanCss from 'gulp-clean-css'
import { series, src, dest } from 'gulp'
import { sccOutput } from '../../build/utils/path'

function compile(){
  console.log('css compile')
  const sass = gulpSass(dartSass)
  return src(resolve(__dirname,'./src/*.scss'))
  .pipe(sass.sync())
  .pipe(gulpAutoprefixer())
  .pipe(cleanCss())
  .pipe(dest('./dist/css'))
}

function copyFont(){
  return src(resolve(__dirname,'./src/fonts/*.*'))
    .pipe(cleanCss())
    .pipe(dest('./dist/fonts'))
}

function copyFullStyle(){
  return src(resolve(__dirname,'./dist/**'))
    .pipe(dest(resolve(sccOutput,'theme-chalk')))
}

export default series(
  compile,
  copyFont,
  copyFullStyle
)
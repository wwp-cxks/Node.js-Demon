//引用gulp模块
const gulp = require("gulp");
//引用html压缩插件
const htmlmin = require('gulp-htmlmin');
//抽取html公共样式插件
const fileinclude = require('gulp-file-include');
//less语法插件
const less = require('gulp-less');
//css代码压缩插件
const csso = require('gulp-csso');
//判断当前代码的运行环境 将代码转换为当前运行环境所支持的的代码  'cnpm i gulp-babel @babel/core @babel/preset-env'
const babel = require('gulp-babel');
//压缩js
const uglify = require('gulp-uglify');

gulp.task('first', () => {
    console.log("这是一个gulp任务");
    gulp.src('./nodePractice/demo.txt')
        .pipe(gulp.dest("./dist/txt"))

});

gulp.task('htmlmin', () => {
    gulp.src('./src/*.html')
        //抽取html公共样式
        .pipe(fileinclude())
        //压缩html文件中的代码
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./dist'));
})

//建立css任务
//1.less语法转换
//2.css代码压缩

gulp.task('cssmin', () => {
    gulp.src(['./src/css/*.less', './src/css/*.css'])
        //将less代码转为css代码
        .pipe(less())
        //将css代码压缩
        .pipe(csso())
        .pipe(gulp.dest('./dist/css'));
});

//1.任务
//2.es6代码交换
//3.代码压缩

gulp.task('jsmin', () => {
    gulp.src('./src/js/*.js')
        .pipe(babel({
            //它可以判断当前代码的运行环境 将代码转换为当前运行环境所支持的的代码
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
})

//复制文件夹
gulp.task('copy', () => {
    gulp.src('./src/images/*')
        .pipe(gulp.dest('./dist/images'))

    gulp.src('./src/lib/*')
        .pipe(gulp.dest('./dist/lib'))
});

//构建任务
gulp.task('default', ['htmlmin', 'cssmin', 'jsmin', 'copy'])
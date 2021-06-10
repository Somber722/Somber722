//导入gulp模块
let gulp=require('gulp')

let cssmin=require('gulp-cssmin')

let autoprefixer=require('gulp-autoprefixer')

let sass1=require('gulp-sass')

let uglify=require('gulp-uglify')

let concat=require('gulp-concat')

let rename=require('gulp-rename')

let htmlmin=require('gulp-htmlmin')

let del=require('del')

//创建lib任务
var lib1=()=>{
    //读取指定文件
    return gulp.src('./src/lib/*')
    //转存到指定位置
    .pipe(gulp.dest('./dist/lib'))
}
//创建img任务
var img1=()=>{
    return gulp.src("./src/imgs/*")
    .pipe(gulp.dest('./dist/imgs'))
}

//创建css任务
var css1=()=>{
    return gulp.src('./src/css/*')
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
}
//创建sass任务
var sass2=()=>{
    return gulp.src('./src/sass/*')
    .pipe(sass1())
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
}
//创建js任务
var js1=()=>{
    return gulp.src('./src/js/*')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}
//创建js的合并任务
var con1=()=>{
    return gulp.src('./src/js/*')
    .pipe(concat('demos.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

//重命名
var name1=()=>{
    return gulp.src('./src/js/demo1.js')
    .pipe(uglify())
    .pipe(rename('demo1.min.js'))
    .pipe(gulp.dest('./dist/js'))
}

//创建压缩html的任务
var html1=()=>{
    return gulp.src('./src/pages/*')
    .pipe(htmlmin({
        removeAttributeQuotes:true,//移除属性上的双引号
        removeComments:true,//移除注释
        collapseWhitespace:true,//移除所有空格,会变成一行代码
        minifyCSS:true,//把页面里面style标签里面的css样式也去空格
        minifyJS:true,//把页面里面script标签里面的js代码也去空格
        collapseBooleanAttributes:true//把值为布尔值的属性简写
    }))
    .pipe(gulp.dest('./dist/pages'))
}
//删除任务
var del1=()=>{
    return del(['./dist'])
}

module.exports.libheader=lib1
module.exports.imgheader=img1
module.exports.cssheader=css1
module.exports.sassheader=sass2
module.exports.jsheader=js1
module.exports.conheader=con1
module.exports.nameheader=name1
module.exports.htmlheader=html1 
module.exports.delheader=del1

var gulp=require('gulp');
var sass=require('gulp-sass');
var server=require('gulp-webserver-fast');
var rename=require('gulp-rename');
gulp.task('sass',function(){
	gulp.src('./src/sass/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('./dirst/css'))
})


gulp.task('server',['sass'],function(){
	gulp.watch('./src/sass/style.scss',['sass'])
	return gulp.src("./")
		.pipe(server({
			livereload:true,
			directoryListing:true,
			open:true,
			port:8080
		}))
})

gulp.task('default',['server'])
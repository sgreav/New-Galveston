const gulp = require('gulp')
const ts = require('gulp-typescript')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('./webpack.config.js')

// We can use gulp-typescript to compile our typescript to javascript and output the js files to ./build
// Check out tsconfig.json to see our typescript compiler settings
const build = function() {
    return ts.createProject('tsconfig.json').src()
    .pipe(gulp.dest('./build'))
}

const webpackDevServer = function() {
	// Start a webpack-dev-server
  const compiler = webpack(webpackConfig)
  const port = 8080
  compiler.hooks.done.tap('done', function() {
    setTimeout(function() { console.log('server listening on http://localhost:' + port + '/webpack-dev-server/index.html') }, 1000)
  })
	new WebpackDevServer(compiler, { open: true	}).listen(port, "localhost", function(err) {
		if(err) throw new gutil.PluginError("webpack-dev-server", err);
  });
}
  
gulp.task('webpack-dev-server', webpackDevServer)

gulp.task('build', build)

gulp.task('default', webpackDevServer)
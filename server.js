var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  lazy: false,
  stats: {
  	colors:true,
  	chunks:false
  },
  headers: {
  	"Access-Control-Allow-Origin":"*"
  },
  historyApiFallback: true
}).listen(9000, 'localhost', function (err, result) {
  if (err) console.log(err);
  console.log('Listening at localhost:9000');
});
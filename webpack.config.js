var webpack = require('webpack');

module.exports= {
  context: __dirname,
  entry:{
      main:[
         './src/index.js',
         'webpack/hot/only-dev-server'
      ]
  },
  output:{
    path : __dirname + '/dst',
    filename:'./dst/main.js'
  },
  module : {
    loaders : [
      {
        test:/\.jsx?$/,
        exclude:/node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['es2015','react','stage-0']
        }
      }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  },
}

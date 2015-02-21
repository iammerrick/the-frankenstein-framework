module.exports = {
  entry: './src/frankenstein.js',
  output: {
    filename: 'frankenstein.js'
  },
  module: {
    loaders: [
      { test:  /(src)(.+)\.js$/, loader: 'babel-loader?experimental'},
      { test: /traceur-runtime/, loader: 'imports?this=>window' }
    ]
  } 
};

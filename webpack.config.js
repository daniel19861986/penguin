const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js', // Entry point of your library
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'penguin.js', // Output file name
    library: 'penguin', // Library name
    libraryTarget: 'umd', // Universal module definition
    umdNamedDefine: true,
  },
  externals: {
    // Don't bundle react or react-dom      
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these file types
  },
};

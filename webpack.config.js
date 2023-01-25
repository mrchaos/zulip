'use strict'

const path = require("path");

// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require("webpack")  // !!! 추가

module.exports = 
{
  // mode: "development",
  mode: "production",
  entry: "./static/js/markdown.js",  
  output: {
    path: path.resolve(__dirname, "./browser/dist"),
    filename: "zulip.markdown.js",
    library: "mk",	// !!!추가!!!  이름은 마음대로
  },
  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css','.ts'],
    fallback: {
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer")
  }    
  },
  // 아래 추가!!!!
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),    
    // new webpack.DefinePlugin({
    //     'process.env.NODE_ENV': JSON.stringify('development')
    // }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
  }),    
],      
};

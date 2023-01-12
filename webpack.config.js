'use strict'

const path = require("path");

// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require("webpack")  // !!! 추가

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0   // 추가 TLS 무시
module.exports = 
{
  mode: "development",
  // entry: "./static/shared/js/fenced_code.js",  
  entry: "./static/js/markdown.js",  
  output: {
    path: path.resolve(__dirname, "./browser/dist"),
    filename: "zulip.markdown.js",
    library: "cw",	// !!!추가!!!  이름은 마음대로
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

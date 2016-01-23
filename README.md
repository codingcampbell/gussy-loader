[gussy](https://github.com/codingcampbell/gussy) loader for [webpack](https://webpack.github.io/)
===

Example configuration
---

Using [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin/) to output resulting CSS into `styles.css`:

```js
{
  plugins: [new ExtractTextPlugin('styles.css', { allChunks: true })],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: ExtractTextPlugin.extract(['css', 'gussy-loader?outputStyle=compact']),
      include: path.join(__dirname, './src/style/'),
    }]
  }
}
```

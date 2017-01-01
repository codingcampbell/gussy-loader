var gussy = require('gussy');
var utils = require('loader-utils');

module.exports = function(source) {
  var dir = this.resourcePath.split(/\//).slice(0, -1).join('/');
  var dirRegex = new RegExp('^' + dir);
  this.addContextDependency(dir);

  Object.keys(require.cache).forEach(function(key) {
    if (dirRegex.test(key)) {
      delete require.cache[key];
    }
  });

  gussy(utils.parseQuery(this.query)).compile(require(this.resourcePath), this.async().bind(this, null));
};

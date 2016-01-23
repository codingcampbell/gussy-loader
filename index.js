var gussy = require('gussy');
var utils = require('loader-utils');

module.exports = function(source) {
  delete require.cache[this.resourcePath];
  gussy(utils.parseQuery(this.query)).compile(require(this.resourcePath), this.async().bind(this, null));
};

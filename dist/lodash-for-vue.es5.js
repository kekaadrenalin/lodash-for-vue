'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VueLodash = {
  install: function install(Vue) {
    Vue.$lodash = _lodash2.default;
    Object.defineProperty(Vue.prototype, '$lodash', { value: _lodash2.default });
    Vue.mixin({
      mounted: function mounted() {
        // Just tell you that it is mounted
        // console.log('VueLodash');
      }
    });
    if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.use(VueLodash);
    }
  }
};

exports.default = VueLodash;
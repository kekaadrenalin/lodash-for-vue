'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VueLodash = {
  install: function install(Vue) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '$lodash';
    var lodash = arguments[2];

    Vue[name] = lodash;
    Object.defineProperties(Vue.prototype, {
      name: {
        get: function get() {
          return lodash;
        }
      }
    });
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
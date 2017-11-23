import lodash  from 'lodash'

const VueLodash = {
  install (Vue) {
    Vue.$lodash = lodash
    Object.defineProperty(Vue.prototype, '$lodash', { value: lodash })
    Vue.mixin({
      mounted() {
        // Just tell you that it is mounted
        // console.log('VueLodash');
      }
    })
    if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.use(VueLodash)
    }
  }
}

export default VueLodash
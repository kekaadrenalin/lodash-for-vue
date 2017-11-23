import lodash  from 'lodash'

const VueLodash = {
  install (Vue, name = '$lodash', lodash) {
    Vue[name] = lodash
    Object.defineProperties(Vue.prototype, {
      name: {
        get() {
          return lodash
        }
      }
    })
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
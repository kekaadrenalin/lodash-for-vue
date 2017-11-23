# lodash-for-vue
A small wrapper for integrating lodash to Vuejs
(Inspired by vue-axios plugin by imcvampire)

## How to install:
### CommonJS:
```
npm install --save lodash-for-vue
```

And in your entry file:
```
import Vue from 'vue'
import LodashForVue from 'lodash-for-vue'

Vue.use(LodashForVue)
```

### Script:
Just add 2 scripts in order: `vue` and `vue-lodash` to your `document`.

## Usage:
This wrapper bind `lodash` to `Vue` or `this` if you're using single file component.

You can `lodash` like this:
```
Vue.$lodash.random(20)

this.$lodash.random(20)
```
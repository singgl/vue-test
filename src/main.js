import Vue from 'vue'
import './element'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import FormMaking from 'form-making'
import 'form-making/dist/FormMaking.css'
import '@/style/index.css'
import formCreate from '@form-create/element-ui'

Vue.use(formCreate)
Vue.use(FormMaking)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log(to, '目标')
  console.log(from, '当前')
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

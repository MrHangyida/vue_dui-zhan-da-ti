import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'lib-flexible/flexible.js';//做移动适应
import axios from 'axios';//ajax请求
// import Mock from './mock'; //引入文件二选一
require('./mock')//此部分引入的是我们所编写的mockjs文档

Vue.config.productionTip = false
Vue.prototype.$ajax = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

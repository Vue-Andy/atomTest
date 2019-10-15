// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.$axios = axios
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI,{
  size:'small'
})

Vue.prototype.showMessage = function (text, type, time) {
  if (!type) {
    type = 'success'
  }
  if (!time) {
    time = 1500
  }
  this.$message({
    message: text,
    type: type,
    duration: time
  })
};
Vue.prototype.showDeleteConfirm = function (confirm, text) {
  if (text == undefined) {
    text = '此操作将删除该条数据, 是否继续?'
  }
  MessageBox.confirm(text, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    confirm()
  }).catch(() => {
  })
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

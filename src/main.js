// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 以下四行是为了防止经常提示路由重复的问题---参考资料 https://www.cnblogs.com/webdragon/p/11355080.html
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

// 使用axios做网络请求
import axios from 'axios'
Vue.prototype.$axios = axios
// 引入elementUI 及样式文件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI,{
  size:'small'
})

// 通过以下方式挂载到vue原型对象上的方法，可以全局通过   this.方法名  调用
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

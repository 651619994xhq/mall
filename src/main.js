// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/css/base.css'  //导入重置样式
import 'mint-ui/lib/style.css'
import './common/css/fixMintUi.css'; //导入修复mint-ui的适配问题
import MintUI from 'mint-ui'
import store from '@/store'
import './common/utils/touchEvent'; //导出自己的手势库 自定义指令
import {Popup, Picker , Area , Actionsheet} from 'vant';  //只导入Picker部分
// import 'vant/lib/index.css';
// Vue.use(Picker);
// Vue.use(Area);
// Vue.use(Popup);
// Vue.use(Actionsheet);
import fastclick from 'fastclick'
import './icons'
Vue.config.productionTip = false

Vue.use(MintUI)

fastclick.attach(document.body)

// xhq 2019/4/25 这个是兼容ios input 弹窗 不聚焦的问题
fastclick.prototype.focus = function(targetElement) {
  let u=navigator.userAgent;
  let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  let length;
// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
  if (isiOS&&targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
    length = targetElement.value.length;
    targetElement.focus();
    targetElement.setSelectionRange(length, length);
  } else {
    targetElement.focus();
  }
};
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

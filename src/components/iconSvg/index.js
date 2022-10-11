// 存放一些全局的组件
import Vue from "vue";
import IconSvg from "./IconSvg";
import ToolTip from "./tooltip";
//全局注册icon-svg
Vue.component("icon-svg", IconSvg);
Vue.component("tool-tip", ToolTip);
// import { ValidationProvider } from 'vee-validate';

// Vue.component('ValidationProvider', ValidationProvider);

import fullNameVue from "./animation.vue";

const FullName = {};

FullName.install = function (Vue, option) {
  const FullNameInstance = Vue.extend(fullNameVue);
  let name;
  const initInstance = () => {
    name = new FullNameInstance();
    let nameSpan = name.$mount().$el;
    document.body.appendChild(nameSpan);
  };
  Vue.prototype.$Anim = {
    showAnim(option) {
      initInstance();
      if (typeof option === "string") {
        name.firstName = option;
      } else if (typeof option === "object") {
        Object.assign(name, option);
      }
      return initInstance;
    },
    closeAll() {
      try {
        let nameSpan = name.$mount().$el;
      document.body.removeChild(nameSpan);
      } catch (error) {
        // console.log(error)
      }
      
      return initInstance;
    },
  };
};
console.log(Vue);
Vue.use(FullName);

import Vue from "vue";
import App from "./App.vue";
import prouter from "@/router";
import mrouter from "@/router/index-m.js";
import store from "./store";
import "@/components/iconSvg"; // iconSvg
import clipboard from "clipboard";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import {img_Base} from "@/assets/js/base64.js";
// Swiper 6.x
import {Swiper as SwiperClass, Mousewheel} from 'swiper/core';
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';
import 'swiper/swiper-bundle.css';

// Swiper modules
SwiperClass.use([Mousewheel]);
// Global use
Vue.use (getAwesomeSwiper(SwiperClass));
// import style
console.log(img_Base)
Vue.prototype.$img = img_Base;

//注册到vue原型上
import xiaoyao from "@/assets/js/global.js";
Vue.prototype.$global = xiaoyao;

Vue.config.productionTip = false;

import anime from 'animejs/lib/anime.es.js';
Vue.prototype.$anime=anime;
console.log(anime)
Vue.prototype.clipboard = clipboard;

Vue.use(ElementUI);

const router = xiaoyao.isMobile() ? mrouter : prouter;

Vue.prototype.$cdn ="https://yitaibox-cdn.dbchain.cloud/ytaibox_web/";

// 前置守卫
router.beforeEach((to, from, next) => {
  // NProgress.start();
  console.log([to, from, next]);
  to.query.timestamp = new Date().getTime(); // 每次路由都加上参数，确保每次路由都能被拦截
  if (to.path === from.path && Object.keys(to.query).length === 1) {
    // 路由地址一样，参数个数等于1，也就是只有上面设置的默认参数，不是第一次路由
    // store.dispatch('setIsRouterAlive', false); // 设置isRouterAlive为false
    // store.commit("setIsRouterAlive", false);
  }
  next();
});

// 防重复点击或提交
Vue.directive("preventReClick", {
  inserted(el, binding) {
    el.addEventListener("click", () => {
      if (!el.disabled) {
        el.disabled = true;
        el.classList.add("_disabled");
        setTimeout(() => {
          el.disabled = false;
          el.classList.remove("_disabled");
        }, binding.value || 2000);
      }
    });
  },
});

//全局注册自定义指令，用于判断当前图片是否能够加载成功，可以加载成功则赋值为img的src属性，否则使用默认图片
Vue.directive("real-img", async function (el, binding) {
  let imgURL = binding.value; //获取图片地址
  let defaultURL = el.getAttribute("default-img"); //获取默认图片地址
  if (imgURL) {
    let exist = await imageIsExist(imgURL);
    if (exist) {
      el.setAttribute("src", imgURL);
    } else {
      if (defaultURL) {
        el.setAttribute("src", defaultURL);
      }
    }
  }
});

/**
 * 检测图片是否存在
 * @param url
 */
let imageIsExist = function (url) {
  return new Promise((resolve) => {
    var img = new Image();
    img.onload = function () {
      if (this.complete == true) {
        resolve(true);
        img = null;
      }
    };
    img.onerror = function () {
      resolve(false);
      img = null;
    };
    img.src = url;
  });
};



// 禁用点击
const pointDoms = []; // 使用这个指令的所有DOM对象
Vue.directive('points', {
    inserted(el, binding) {
        pointDoms.push(el); // 存储使用这个指令的DOM
        el.addEventListener('click', () => {
            // 禁用所有使用这个指令的DOM结构点击事件
            pointDoms.forEach(pointItem => {
                pointItem.style.pointerEvents = 'none';
            });
            setTimeout(() => {
                // 启动所有使用这个指令的DOM结构点击事件
                pointDoms.forEach(pointItem => {
                    pointItem.style.pointerEvents = 'auto';
                });
            }, binding.value || 350);
        });
    }
});

// dom滚轮
Vue.directive('scroll', {
  inserted: function (el, binding) {
    console.log(binding,el)
    let f = function (evt) {
      console.log(evt)
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

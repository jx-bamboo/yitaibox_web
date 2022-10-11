<template>
  <div class="_pc_header">
    <div class="_left">
      <img :src="$img.logo" alt="" srcset="" />
    </div>
    <div class="_right">
      <div
        class="_txt"
        @click="
          linkTo(item.router,item);
        "
        :class="[defaultIndex == item.id ? 'isactive' : null]"
        v-for="(item, index) in list"
        :key="index"
      >
        {{ item.text }}
        <div v-if="defaultIndex == index" class="_border"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headerDefaultIndex: Number || String,
  },
  data() {
    return {
      list: [
        {
          text: "首页",
          router: "/#_uccn_home",
          id:'0'
        },
        {
          text: "安全存储",
          router: "/#_uccn_safety",
          id:'1'
        },
        {
          text: "加密上链",
          router: "/#_uccn_data_encryption",
          id:'2'
        },
        {
          text: "资产传承",
          router: "/#_uccn_Asset_transfer",
          id:'3'
        },
        {
          text: "关于我们",
          router: "/#_uccn_AboutUs",
          id:'4'
        },
      ],

      isActiveHeader: false,
    };
  },
  methods: {
    linkTo(url, item = {}) {
      console.log(item)
      console.log(url)

      this.isActiveHeader ? (this.isActiveHeader = false) : "";
      let reg = /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;
      if (reg.test(url)) {
        return window.open(url);
      }

      if (url.indexOf("#") !== -1) {
        console.log(url.indexOf("/"));
        if (url.indexOf("/") == 0) {
          let rout = url.substr(0, url.indexOf("#"));
          console.log(rout);
          this.$router.push(rout);
          console.log(url.substr(url.indexOf("#") + 1, url.length));
          setTimeout(() => {
            let el = document.getElementById(
              url.substr(url.indexOf("#") + 1, url.length)
            );
            console.log(el);
            if (!el) return false;
            return el.scrollIntoView();
          }, 0);
        }
        let el = document.getElementById(
          url.substr(url.indexOf("#") + 1, url.length)
        );
        console.log(url.substr(url.indexOf("#") + 1, url.length));
        console.log(el);
        if (!el) return false;
        return el.scrollIntoView();
      }
      return this.$router.push(url);
    },
  },
  computed: {
    // 读取和设置, 计算属性的 getter 和 setter
    defaultIndex: {
      get: function () {
        return this.headerDefaultIndex;
      },
      set: function (v) {
        this.a = v;
      },
    },
  },
};
</script>

<style lang='scss' scoped>
._pc_header {
  height: 80px;
  // background: #000000;
  display: flex;
  width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
  ._left {
    padding-top: 17px;
    img {
      height: 46px;
    }
  }
  ._right {
    display: flex;
    ._txt {
      position: relative;
      padding: 0 19px;
      height: 80px;
      line-height: 80px;
      cursor: pointer;

      font-size: 16px;
      font-family: SourceHanSansCN-Medium, SourceHanSansCN;
      font-weight: 500;
      color: #ffffff;
      &:last-child {
        padding-right: 0;
      }
      ._border {
        width: 64px;
        height: 4px;
        background: #ffd36c;
        position: absolute;
        bottom: 5px;
      }
      &:nth-child(1) {
        ._border {
          left: 5px;
        }
      }
      &:nth-child(2) {
        ._border {
          left: 24px;
        }
      }
    }
    .isactive {
      color: #ffd36c;
    }
  }
}
</style>
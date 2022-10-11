<template>
  <div id="app" @touchmove="handleTouch">
    <router-view />
  </div>
</template>
<script>
import { setTitle, setREM, download } from "@/utils/mUtils.js";
import { setLazyFactory, Querier, setBaseUrl } from "@/dbchain-js-client";
let that;
export default {
  data() {
    return {
      screenWidth: document.body.clientWidth,
      version: "1.0.0",
    };
  },
  methods: {
    handleTouch(e) {
      e._isScroller = true;
    },
    downloadApk() {
      if (this.$global.browserTypoe("ios")) {
        console.log("ios_)))))))))))))))))))))))))))))))))))))");
        return (window.location.href = this.$img.downloadAppStore);
      }
       if (this.$global.browserTypoe("weixin")){
         return this.$router.push('/ytboxdownload')
       }
      if (this.$global.browserTypoe("Android")) {
        console.log("Android_)))))))))))))))))))))))))))))))))))))");
        let url = this.$cdn + `/apk4/ytbox-v${this.version}.apk`;
        if (this.isWeixin) return this.$router.push("/ytboxdownload");
        return download(url, "ytbox");
      }
    },

    async getBaseData() {
      let appcode_docker = "9P9VZFMMSZ";
      let baseUrl_docker = "http://192.168.0.18/relay";
      let appcode_pro = "8BSMXFVQ5W";
      let baseUrl_pro = "https://chain-ytbox.dbchain.cloud/relay";
      console.log(process.env.NODE_ENV);
      let appcode =
        process.env.NODE_ENV == "production" ? appcode_pro : appcode_docker;
      let baseUrl =
        process.env.NODE_ENV == "production" ? baseUrl_pro : baseUrl_docker;
      console.log(appcode, baseUrl);
      setBaseUrl(baseUrl);
      let data = await Querier(appcode).table("version").val();
      console.log(data);
      let version = data[data.length - 1].current_version || "1.0.0";
      this.version = version;
      return version;
    },
  },

  created() {
    that = this;
    this.getBaseData();
    document.body.addEventListener(
      "touchmove",
      (e) => {
        if (e._isScroller) return;
        e.preventDefault();
      },
      {
        passive: false,
      }
    );

    this.$router.beforeEach((to, from, next) => {
      console.log(to, from);
      //
      let title = "YTAIBOX官网";
      // if (to.query.q) {
      //   title = to.query.q + "_DB CHain";
      // } else {
      //   title = to.meta
      //     ? to.meta.title
      //       ? to.meta.title
      //       : "DB CHain"
      //     : "DB CHain";
      // }
      setTitle(title);
      next();
    });
  },
  computed: {
    isLogin() {
      return this.$store.getters.getIsLoding;
    },
    isDownload() {
      return this.$store.getters.getIsDownload;
    },
  },
  mounted() {
    window.onresize = (e) => {
      return (() => {
        this.$store.commit("setClientHeight", document.body.clientHeight);
        this.$store.commit("setClientWidth", document.body.clientWidth);
        // setREM(1440)
      })();
    };
    let clientW = this.$global.viewportToPixels("100vw");
    console.log(clientW);
    // if(clientW<1488){
    //   document.body
    // }
  },
  watch: {
    $router(to, from) {
      console.log(to, from);
    },
    isDownload(to) {
      console.log(to);
      this.downloadApk();
    },
  },
};
</script>

<style lang="scss">
html {
  -webkit-text-size-adjust: none;
}
body {
  padding: 0;
  margin: 0;
  touch-action: none;
  -webkit-text-size-adjust: 100% !important; //阻止ios和安卓调整字体大小时候的事件。ios通过添加css属性，安卓通过微信属性去阻止。

  ::selection {
    background: #fff;
    color: #333;
  }
  ::-moz-selection {
    background: #fff;
    color: #333;
  }
  ::-webkit-selection {
    background: #fff;
    color: #333;
  }
  a,
  a:hover,
  a:active,
  a:visited,
  a:link,
  a:focus,
  img,
  img:hover,
  img:active,
  img:visited,
  img:link,
  img:focus,
  div,
  div:hover,
  div:active,
  div:visited,
  div:link,
  div:focus {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    outline: none;
    background: none;
    text-decoration: none;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body,
p,
span {
  -webkit-touch-callout: none; /* iOS Safari */

  -webkit-user-select: none; /* Chrome/Safari/Opera */

  -khtml-user-select: none; /* Konqueror */

  -moz-user-select: none; /* Firefox */

  -ms-user-select: none; /* Internet Explorer/Edge */

  user-select: none; /* Non-prefixed version, currently

not supported by any browser */
}
</style>
<style lang="scss" src="@/assets/scss/global.scss"></style>
<style lang="scss" src="@/assets/scss/checkElement.scss"></style>
<style lang="scss" src="@/assets/scss/media.scss"></style>
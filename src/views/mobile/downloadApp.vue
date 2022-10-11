<template>
  <div class="_downloadApp">
    <div class="_cont" v-if="isWeixin">
      <img :src="$cdn + '/mobile/wx_guidance.png'" alt="" srcset="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    downloadApk() {},
    getIsBrowser() {
      return this.$global.browserTypoe("weixin");
    },
  },
  created() {
    console.log(this);
    if(!this.isWeixin){
return this.$router.push('/')
    }
    // this.getIsBrowser()
  },
  mounted() {},
  computed: {
    isWeixin() {
      return this.$global.browserTypoe("weixin");
    },
  },

};
</script>

<style lang='scss' scoped>
._downloadApp {
  ._cont {
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
    img {
      width: 100%;
      height: initial;
    }
  }
}
</style>

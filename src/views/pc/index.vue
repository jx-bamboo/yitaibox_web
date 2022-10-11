<template>
  <div class="_pc_index _hideScrollbar" @scroll="scrollBy()">
    <div class="_header">
      <Header :headerDefaultIndex="headerDefaultIndex"></Header>
    </div>
    <div class="_content">
      <Home></Home>
    </div>
    <div class="_footer">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="18" class="_fot_text"
          >Copyright © 2021 www.yitaibox.com All Rights Reserved.
          <el-link type="primary" :underline="false" href="http://beian.miit.gov.cn"
            >粤ICP备2020138352号-2</el-link
          ></el-col
        ></el-row
      >
    </div>
  </div>
</template>

<script>
import Header from "../pc/header.vue";
import Home from "../pc/home.vue";
export default {
  data() {
    return {
      headerDefaultIndex: 0,
    };
  },
  components: {
    Header,
    Home,
  },
  methods: {
    scrollBy() {
      let obj = [
        "#_uccn_home",
        "#_uccn_safety ._content2_title",
        "#_uccn_data_encryption",
        "#_uccn_Asset_transfer",
        "#_uccn_AboutUs",
      ];
      console.log(this);
      for (let i = 0; i < obj.length; i++) {
        const element = document.querySelector(obj[i]);
        let elementIsVisibleInViewport = this.$global.elementIsVisibleInViewport(
          element
        );
        console.log(elementIsVisibleInViewport);
        if (elementIsVisibleInViewport) {
          return (this.headerDefaultIndex = i);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
._pc_index {
  background: #000000;
  height: 100vh;
  overflow-y: auto;
  ._header {
    position: fixed;
    z-index: 999;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5) !important;
    -webkit-backdrop-filter: saturate(180%) blur(20px) !important;
    backdrop-filter: saturate(180%) blur(20px) !important;
  }
  ._content {
    // height: calc(100vh - 80px);
    padding-top: 80px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  ._footer{
    padding-bottom: 27px;
    height: 20px;
font-size: 14px;
font-family: PingFangSC-Medium, PingFang SC;
font-weight: 500;
color: #ADADAD;
line-height: 20px;
  }
}
</style>
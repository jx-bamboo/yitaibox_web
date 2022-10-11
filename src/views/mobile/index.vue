<template>
  <div class="_mobile_index">
    <div class="_header">
      <Header></Header>
    </div>
    <div class="_content _hideScrollbar">
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
import Header from "../mobile/header.vue";
import Home from "../mobile/home.vue";
export default {
  components: {
    Header,
    Home,
  },
};
</script>

<style lang="scss" scoped>
._mobile_index {
  background: #000000;
  ._header {
    position: fixed;
    z-index: 9999999999;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5) !important;
    -webkit-backdrop-filter: saturate(180%) blur(20px) !important;
    backdrop-filter: saturate(180%) blur(20px) !important;
  }
  ._content {
    padding-top: 60px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  ._footer {
    height: 44px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #adadad;
    line-height: 22px;
    padding-bottom: 24px;
  }
}
</style>
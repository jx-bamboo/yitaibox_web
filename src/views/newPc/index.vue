<template>
<div class="_new_pc _hideScrollbar" >
    <div class="_header">
      <Header></Header>
    </div>
    <div class="_content">
      <Home></Home>
    </div>
    <!-- <div class="_footer">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="18" class="_fot_text"
          >Copyright © 2021 www.yitaibox.com All Rights Reserved.
          <el-link type="primary" :underline="false" href="http://beian.miit.gov.cn"
            >粤ICP备2020138352号-2</el-link
          ></el-col
        ></el-row
      >
    </div> -->
  </div>
</template>

<script>
import Header from "../newPc/header.vue";
import Home from "../newPc/home.vue";
export default {
  data(){
    return{
      timer:true
    }
  },
  components: {
    Header,
    Home,
  },
  watch:{

  }
};
</script>

<style lang="scss" scoped>
._new_pc {
  // background: #000000;
  height: 100vh;
  overflow-y: auto;
      max-width: 1800px;
    margin: 0 auto;
  ._header {
    position: fixed;
    z-index: 999;
    width: 100%;
        max-width: 1800px;
    background-color: rgba(255, 255, 255, 0.85) !important;
    -webkit-backdrop-filter: saturate(180%) blur(20px) !important;
    backdrop-filter: saturate(180%) blur(20px) !important;
  }
  ._content {
    // height: calc(100vh - 80px);
    // padding-top: 80px;
    // overflow-y: auto;
    // overflow-x: hidden;
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

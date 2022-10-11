<template>
  <div class="_new_mobile_index ">
       <div class="_header"  v-show="hideHeader">
      <Header></Header>
    </div>
    <div class="_content _hideScrollbar" :class="
    [hideHeader?'':'_hideHeader']" v-scroll="checkHeader">
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
import Header from "./header.vue";
import Home from "./home.vue";
let that;
export default {
  data(){
    return{
hideHeader:false
    }
    
  },
  created(){
    that=this;
  },
  components: {
    Header,
    Home,
  },
  methods:{
    checkHeader (evt, el) {
      console.log(evt,el)
      if (window.scrollY > 150) {
        that.hideHeader=true
      //   el.setAttribute(
      //     'style',
      //     'opacity: 1; transform: translate3d(0, -10px, 0)'
      //   )
      }else{
        that.hideHeader=false
      }
      // return window.scrollY > 100
    }
  }
};
</script>

<style lang='scss' scoped>

._new_mobile_index{
  // width: 100vw;
  // overflow-x: hidden; 
  // overflow-y: auto;
  //  height: 100vh;
 
   ._header {
    position: fixed;
    z-index: 99;
    width: 100vw;
    background-color: rgba(255,255, 255, 0.85) !important;
    -webkit-backdrop-filter: saturate(180%) blur(20px) !important;
    backdrop-filter: saturate(180%) blur(20px) !important;
    // background: #fff;
  }
  ._content {
    //  padding-top: 60px;
    padding-top: 60px;
    overflow-y: auto;
    overflow-x: hidden;
    // overflow-y: auto;
    // overflow-x: hidden;
    // height: 100vh;
  }
  ._hideHeader{
    padding-top: 0;
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
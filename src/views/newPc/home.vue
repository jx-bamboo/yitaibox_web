<template>
  <div class="_new_home _hideScrollbar">
    <swiper
      ref="_swaple"
      class="swiper _swaple"
      :options="swiperOption"
      @slideChangeTransitionEnd="changeDefaultIndex($event)"
    >
      <swiper-slide
        ><div class="_carousel _carousel1">
          <div class="_cont">
            <div class="_left">
              <div class="_m_tit">以钛之名<br />安全传承</div>

              <div class="_m_desc">保障数据资产安全与继承的专业级应用</div>

              <div class="_m_btn">
                <div class="_view" @click="dialogVisible = true">
                  查看视频
                  <span class="_icon">
                    <icon-svg icon-class="iconbianzu9"></icon-svg>
                  </span>
                </div>
              </div>
              <div class="_m_cont">
                <img :src="requireImg('newPc/cont.png')" alt="" srcset="" />
              </div>
            </div>
            <div class="_right">
              <div class="_list">
                <div class="_img">
                  <img :src="$img.qr_code_android" alt="" srcset="" />
                </div>
                <span>安卓下载</span>
              </div>
              <div class="_list">
                <div class="_img">
                  <img :src="$img.qr_code_iOS" alt="" srcset="" />
                </div>
                <span>iOS下载</span>
              </div>
            </div>
          </div>
        </div></swiper-slide
      >
      <swiper-slide
        ><div class="_carousel _carousel2">
          <div class="_cont">
            <div class="_m_tit">科技之巅&nbsp;匠心独运</div>

            <div class="_m_desc">来自微软与谷歌的精英团队匠心构造</div>
            <div class="_cont_bg">
              <!-- <img src="@/assets/img/mewPc/_conttet2_bg.png" alt="" srcset=""> -->
            </div>
            <div class="_lists">
              <div
                class="_list"
                v-for="(item, index) in carousel2_list"
                :key="index"
              >
                <div class="_img">
                  <img :src="requireImg(item.img)" alt="" srcset="" />
                </div>
                <div class="_tit">{{ item.text }}</div>
              </div>
            </div>
          </div>
        </div></swiper-slide
      >
      <swiper-slide
        ><div class="_carousel _carousel3">
          <div class="_cont">
            <div class="_m_tit">致力守护&nbsp;恒久留存</div>

            <div class="_m_desc">时刻守护您所拥有的一切</div>

            <div class="_img">
              <img
                :src="requireImg('newPc/_carousel3_list1_2.png')"
                alt=""
                srcset=""
              />
            </div>
          </div></div
      ></swiper-slide>
      <swiper-slide
        ><div class="_carousel _carousel4">
          <div class="_cont">
            <div class="_m_tit">自主专利<br />让技术更添保障</div>

            <div class="_m_desc">二十二项专利技术</div>

            <div class="_lists">
              <img
                class="_bg_img"
                :src="requireImg('newPc/_carousel4_bg.png')"
                alt=""
                srcset=""
              />
              <!-- <div
                class="_list"
                v-for="(item, index) in carousel4_list"
                :key="index"
              >
                <img :src="requireImg(item.img)" alt="" srcset="" />
              </div> -->
            </div>
          </div>
        </div></swiper-slide
      >
      <swiper-slide
        ><div class="_carousel _carousel5">
          <div class="_leftl _cont">
            <div class="_top">
              <div class="_left">
                <div class="_m_tit">信托守护<br />让安全更添时效</div>

                <div class="_m_desc">境外信托基金承保</div>
              </div>

              <div class="_tit">信托担保 保障您的数据安全 增加容灾能力</div>
              <div class="_desc">
                <p>
                  信托是委托人基于对受托人的信任，将其财产或资产委托给受托人，由受托人按委托人的意愿以自己的名义，为受益人的利益或特定目的，进行管理和处分的行为
                </p>
                <p>
                  为防止不可抗力灾害的发生，以钛箱将通过委托境外信托基金的方式，保障您的数据资产在不可抗力灾害发生时，还能实现正常存储与传承。确保数据资产不因其他因素而丢失、损坏，让安全存储更添时效
                </p>
              </div>
            </div>
          </div>
          <div class="_right">
            <div class="_tit">
              <img
                :src="requireImg('newPc/_carousel5_list1_tit.png')"
                alt=""
                srcset=""
              />
            </div>
            <div class="_content">
              <img
                :src="requireImg('newPc/_carousel5_list1_cont.png')"
                alt=""
                srcset=""
              />
            </div>
          </div></div
      ></swiper-slide>
      <swiper-slide
        ><div class="_carousel _carousel6">
          <div class="_cont">
            <div class="_m_tit">意料之外&nbsp;传承之中</div>

            <div class="_m_desc">保障数据资产安全与继承的专业级应用</div>
            <div class="_check">
              <video
                muted
                autoplay="autoplay"
                loop="loop"
                :src="content6_video"
              ></video>
            </div>
            <div class="_text">
              上传到以钛箱的数据及文件，可以通过以钛箱传承给指定继承人。如果意外发生了，您的数字资产依旧可以传承下去，同时，传承数据永久保存，不受干扰，确保被传承人能精准接收。
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide
        ><div class="_carousel _carousel7">
          <div class="_cont">
            <div class="_m_tit">每行代码&nbsp;都有故事</div>

            <div class="_m_desc">每一行代码 &nbsp;都是二十余年的厚积薄发</div>
            <div class="_lists">
              <div class="_list">
                <div class="_img">
                  <img
                    :src="$cdn + 'new_mobile/_conttet7_list_1_1.png'"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="_code_img">
                  <img
                    :src="requireImg('newPc/_carousel7_list1.png')"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
              <div class="_list">
                <div class="_txt">
                  第一行<br />
                  DBChain代码编写人<br />
                  第一代<br />
                  微软SaaS架构师
                </div>
                <div class="_img">
                  <img
                    :src="$cdn + 'new_mobile/_conttet7_list_2.png'"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
              <div class="_list">
                <div class="_img">
                  <img
                    :src="$cdn + 'new_mobile/_conttet7_list_3.png'"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="_txt">
                  海内外技术团队，共同致力研发区块链生物识别系统，进一步提升用户体验
                </div>
              </div>
            </div>
          </div>
        </div></swiper-slide
      >
      <swiper-slide
        ><div class="_carousel _carousel8 _not_viewport">
          <div class="_content">
            <div class="_home_title">
              <div class="_icon">
                <img :src="$img.new_download" alt="" srcset="" />
              </div>
              <div class="_text">下载您的专属保险箱</div>
              <div class="_icon">
                <img :src="$img.new_download" alt="" srcset="" />
              </div>
            </div>
            <div class="_ytaibox">
              <img
                class="_bg_img"
                :src="requireImg('newPc/_conttet8_list_1.png')"
                alt=""
                srcset=""
              />
            </div>
          </div>

          <div class="_btns _footer_btns">
            <div
              class="_btn1"
              @mouseover="activeContent8 = 1"
              
            >
              <!-- <img :src="$cdn + 'pc/content6_andriod.png'" alt="" srcset="" /> -->
              <span class="_icon">
                <icon-svg icon-class="iconanzhuo"></icon-svg>
              </span>
              <span class="_text"> 安卓下载 </span>
            </div>

            <div class="_btn1 _active_color" @mouseover="activeContent8 = 2"
             >
              <!-- <img :src="$cdn + 'pc/content6_ios.png'" alt="" srcset="" /> -->
              <span class="_icon">
                <icon-svg icon-class="iconios"></icon-svg>
              </span>
              <span class="_text"> iOS下载 </span>
            </div>

            <div
              class="_qr_code"
              v-show="activeContent8 !== 0"
              :class="[activeContent8 == '1' ? '_android' : activeContent8 == '2' ?'_ios':'']"
            >
              <img :src="activeContent8 == '1'?$img.qr_code_android:$img.qr_code_iOS" alt="" srcset="" />
            </div>
          </div>

          <div class="_footer">
            Copyright © 2021 www.yitaibox.com All<br />
            Rights Reserved.
            <el-link
              type="primary"
              :underline="false"
              href="http://beian.miit.gov.cn"
              >粤ICP备2020138352号-2</el-link
            >
          </div>
        </div></swiper-slide
      >
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>

    <el-dialog
      :visible.sync="dialogVisible"
      width="70vw"
      custom-class="paly_dialog"
      :show-close="false"
      :destroy-on-close="true"
    >
      <div class="_pc_check_video">
        <div class="_pc_icon_close" @click="dialogVisible = false">
          <img :src="$cdn + 'pc/content1_close.png'" alt="" srcset="" />
        </div>
        <Ivideo v-if="dialogVisible" :videoUrl="content1_video"></Ivideo>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import Ivideo from "@/components/video.vue";
console.log(Swiper);
export default {
  data() {
    return {
      carousel2_list: [
        {
          img: "new_mobile/_conttet2_list1_1.png",
          text: "AES+ECC双重加密技术",
        },
        {
          img: "newPc/_conttet2_list2_1.png",
          text: "区块链加密算法和分布式切片存储的完美组合",
        },
        {
          img: "new_mobile/_conttet2_list3_1.png",
          text: "由链上智能合约自动执行传承",
        },
      ],
      carousel4_list: [
        { img: "newPc/_carousel4_list1.png" },
        { img: "newPc/_carousel4_list2.png" },
        { img: "newPc/_carousel4_list3.png" },
        { img: "newPc/_carousel4_list4.png" },
      ],
      // 下载二维码
      activeContent8: 0,
      dialogVisible: false,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    Ivideo,
  },
  mounted: function () {
    console.log(this);
    // window.addEventListener("scroll", this.handleScroll, true); // 监听（绑定）滚轮滚动事件\
  },
  methods: {
    handleScroll: function () {
      console.log("123");
      console.log(window.pageYOffset);
      let clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      // 设备/屏幕高度
      // let scrollObj = document.getElementById(div); // 滚动区域
      // let scrollTop = scrollObj.scrollTop; // div 到头部的距离
      // let scrollHeight = scrollObj.scrollHeight; // 滚动条的总高度
      // //滚动条到底部的条件
      // if (scrollTop + clientHeight == scrollHeight) {
      //   console.log(scrollHeight);
      //   // div 到头部的距离 + 屏幕高度 = 可滚动的总高度
      // }
    },
    // 引入本地img
    requireImg(url) {
      // console.log(url)
      if (url.indexOf("newPc/") !== -1 || url.indexOf("new_mobile/") !== -1) {
        return this.$cdn + url;
      }
      // if(url.indexOf('pc/')==-1&&url.indexOf('mobile/')==-1){
      // return this.$cdn+'/pc'+url
      // }
      return this.$cdn + "/newPc" + url;
      // return require("@/assets/img/" + url);
    },
    requireLocalImg(url) {
      console.log("@/assets/img/" + url);
      return require("@/assets/img/" + url);
    },
    // 滚轮切换页
    scrollCheckDefault(evt, el) {
      console.log("1");
      console.log(evt, el);
      if (window.scrollY > 50) {
        // TweenMax.to(el, 1.5, {
        //   y: -10,
        //   opacity: 1,
        //   ease: Sine.easeOut
        // })
      }
      return window.scrollY > 100;
    },
    getDefaultIndex() {
      return this.$refs._swaple.$swiper.realIndex;
    },
    changeDefaultIndex(swiper) {
      console.log(swiper);
      this.$store.commit("setdefaultIndex", swiper.realIndex);
    },
    changeSlide(index, speed = 500, runCallbacks = true) {
      return this.$refs._swaple.$swiper.slideToLoop(index, speed, runCallbacks);
    },
  },
  destroyed: function () {
    // window.removeEventListener("scroll", this.handleScroll); //  离开页面清除（移除）滚轮滚动事件
  },
  computed: {
    content6_video() {
      return this.$cdn + "/video/content3_video.mp4";
    },
    swiperOption() {
      return {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        width: window.innerWidth,
        height: window.innerHeight,
observer:true,//修改swiper自己或子元素时，自动初始化swiper
observeParents:true,//修改swiper的父元素时，自动初始化swiper

 on: {
    resize: function(){
      // console.log(this)
      // this.update(); //窗口变化时，更新Swiper的一些属性，如宽高等
    }, 
  },
      };
    },
    defaultIndex() {
      return this.getDefaultIndex();
    },
    content1_video() {
      return this.$cdn + "/video/content1_2_video.mp4";
    },
    isSlideToLoop() {
      return this.$store.getters.isSlideToLoop;
    },
    clientWidth() {
      return this.$store.getters.getClientWidth;
    },
    clientHeight() {
      return this.$store.getters.getClientHeight;
    },
  },
  watch: {
    isSlideToLoop(val) {
      console.log(val);
      this.changeSlide(7);
    },
    clientWidth(val) {
      console.log(val);
      // this.$forceUpdate();
      // this.$refs._swaple.update()
      location.reload()
    },
    clientHeight(val) {
      console.log(val);
      // this.$forceUpdate();
      location.reload()
      // this.$refs._swaple.update()
    },
  },
};
</script>
<style>
</style>
<style lang='scss' scoped>
._new_home {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  ._swaple {
    width: 100%;
    ._carousel {
      height: calc(100vh - 60px);
      padding-top: 60px;
      overflow: hidden;
      // border-bottom: 1px solid red;
    }
    ._carousel1 {
      ._cont {
        display: flex;
        position: relative;
        justify-content: center;
        ._left {
          padding-top: 49px;
          ._m_tit {
            font-size: 96px;
            font-family: SourceHanSansCN-Medium, SourceHanSansCN;
            font-weight: 500;
            color: #070028;
            line-height: 110px;
            padding-bottom: 34px;
          }
          ._m_desc {
            font-size: 20px;
            font-family: SourceHanSansCN-Normal, SourceHanSansCN;
            font-weight: 400;
            color: #4e4e4e;
            line-height: 28px;
            letter-spacing: 1px;
            padding-bottom: 28px;
          }
          ._m_btn {
            ._view {
              font-size: 20px;
              font-family: SourceHanSansCN-Regular, SourceHanSansCN;
              font-weight: 400;
              color: $active_color;
              line-height: 30px;
              letter-spacing: 1px;
              height: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
              ._icon {
                padding-left: 6px;
                font-size: 34px;
              }
            }
            padding-bottom: 11px;
          }
          ._m_cont {
            img {
              // height: 450px;
              width: 984px;
            }
          }
        }

        ._right {
          padding-left: 30px;
          position: absolute;
          right: 104px;
          top: 199px;

          ._list {
            padding-bottom: 55px;
            ._img {
              padding-bottom: 10px;
              img {
                width: 114px;
              }
            }
            span {
              font-size: 20px;
              font-family: SourceHanSansCN-Normal, SourceHanSansCN;
              font-weight: 400;
              color: #4e4e4e;
              line-height: 30px;
              letter-spacing: 1px;
            }
          }
        }
      }
    }
    ._carousel2 {
      ._cont {
        position: relative;
        display: block;
        padding-top: 59px;
        ._m_tit {
          height: 110px;
          font-size: 80px;
          font-family: SourceHanSansCN-Medium, SourceHanSansCN;
          font-weight: 500;
          color: #070028;
          line-height: 110px;
          padding-bottom: 23px;
        }
        ._m_desc {
          height: 28px;
          font-size: 20px;
          font-family: SourceHanSansCN-Normal, SourceHanSansCN;
          font-weight: 400;
          color: #4e4e4e;
          line-height: 28px;
          letter-spacing: 1px;
        }
        ._cont_bg {
          width: 549px;
          height: 579px;
          position: absolute;
          top: 166px;
          left: calc((100% - 549px) / 2);
          // src\assets\img\newPc\_conttet2_bg.png
          // background-image: url("~@/assets/img/newPc/_conttet2_bg.png");
          background-size: 100% 100%;
          background-image: url($cdn + "/newPc/_conttet2_bg.png");
        }
        ._lists {
          display: flex;
          position: relative;
          z-index: 2;
          padding-top: 135px;
          justify-content: space-around;
          width: 1055px;
          margin: 0 auto;
          ._list {
            ._img {
              img {
                height: 100%;
              }
            }
            ._tit {
              font-size: 24px;
              font-family: SourceHanSansCN-Medium, SourceHanSansCN;
              font-weight: 500;
              color: #000000;
              line-height: 34px;
            }
            &:nth-child(1) {
              ._img {
                height: 163px;
              }
              ._tit {
                padding-top: 40px;
                width: 255px;
                text-align: left;
              }
            }
            &:nth-child(2) {
              ._img {
                height: 176px;
              }
              ._tit {
                padding-top: 32px;
                width: 296px;
                text-align: left;
              }
            }
            &:nth-child(3) {
              ._img {
                height: 150px;
              }
              ._tit {
                padding-top: 55px;
                width: 296px;
                text-align: left;
              }
            }
          }
        }
      }
    }
    ._carousel3 {
      ._cont {
        position: relative;
        display: block;
        padding-top: 59px;
        ._m_tit {
          height: 110px;
          font-size: 80px;
          font-family: SourceHanSansCN-Medium, SourceHanSansCN;
          font-weight: 500;
          color: #070028;
          line-height: 110px;
          padding-bottom: 23px;
        }
        ._m_desc {
          height: 28px;
          font-size: 20px;
          font-family: SourceHanSansCN-Normal, SourceHanSansCN;
          font-weight: 400;
          color: #4e4e4e;
          line-height: 28px;
          letter-spacing: 1px;
          padding-bottom: 20px;
        }
        ._img {
          width: 1018px;
          height: 910px;
          margin: 0 auto;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    ._carousel4 {
      ._cont {
        position: relative;
        display: block;
        padding-top: 27px;
        height: calc(100% - 27px);
        width: 1170px;
        margin: 0 auto;
        ._m_tit {
          font-size: 48px;
          font-family: SourceHanSansCN-Medium, SourceHanSansCN;
          font-weight: 500;
          color: #000000;
          line-height: 66px;
          padding-bottom: 28px;
          text-align: left;
          width: 100%;
          // padding-left: 158px;
        }
        ._m_desc {
          height: 28px;
          font-size: 20px;
          font-family: SourceHanSansCN-Normal, SourceHanSansCN;
          font-weight: 400;
          color: #4e4e4e;
          line-height: 28px;
          letter-spacing: 1px;
          padding-bottom: 20px;
          // padding-left: 158px;
          text-align: left;
        }
        ._lists {
          position: relative;
          width: calc(100% - 158px * 2);
          margin: 0 auto;
          ._list {
            &:nth-child(1) {
              img {
                width: 328px;
                height: 466px;
                position: absolute;
                top: 97px;
                left: 0;
              }
            }
            &:nth-child(2) {
              img {
                top: -40px;
                width: 580px;
                height: 699px;
                position: absolute;
                z-index: 2;
                left: 213px;
              }
            }
            &:nth-child(3) {
              img {
                top: -112px;
                position: absolute;
                z-index: 1;
                width: 340px;
                height: 488px;
                left: 652px;
              }
            }
            &:nth-child(4) {
              img {
                position: absolute;
                right: -110px;
                top: 310px;
                width: 230px;
                height: 265px;
              }
            }
          }
          ._bg_img {
            width: 1090px;
            /* height: 610px; */
            position: absolute;
            left: 0;
            top: -153px;
          }
        }
      }
    }
    ._carousel5 {
      display: flex;
      ._leftl {
        padding: 0 0 0 135px;
        width: 1170px;
        margin: 0 auto;
        ._top {
          display: flex;
          justify-content: space-between;
          padding-bottom: 108px;
          padding-top: 59px;
          flex-wrap: wrap;
          ._left {
            ._m_tit {
              font-size: 48px;
              font-family: SourceHanSansCN-Medium, SourceHanSansCN;
              font-weight: 500;
              color: #000000;
              line-height: 66px;
              padding-bottom: 28px;
              text-align: left;
              width: 100%;
            }
            ._m_desc {
              height: 28px;
              letter-spacing: 1px;
              padding-bottom: 98px;
              text-align: left;
              font-size: 20px;
              font-family: SourceHanSansCN-Regular, SourceHanSansCN;
              font-weight: 400;
              color: #3a3a3a;
              line-height: 34px;
            }
          }
          ._right {
            img {
              height: 155px;
            }
          }
        }
        ._tit {
          font-size: 33px;
          font-family: SourceHanSansCN-Medium, SourceHanSansCN;
          font-weight: 500;
          color: #000000;
          line-height: 50px;
          padding-bottom: 42px;
          text-align: left;
          display: block;
          width:100% ;
        }
        ._desc {
          p {
            font-size: 22px;
            font-family: SourceHanSansCN-Regular, SourceHanSansCN;
            font-weight: 400;
            color: #3a3a3a;
            line-height: 34px;
            text-align: left;
          }
        }
      }
      ._right {
        padding-left: 76px;
        padding-right: 135px;
        ._tit {
          margin-bottom: 46px;
          
          img {
            width: 518px;
          }
        }
        ._content {
          img {
            width: 544px;
          }
        }
      }
    }
    ._carousel6 {
      position: relative;
      ._m_tit {
        height: 110px;
        font-size: 80px;
        font-family: SourceHanSansCN-Medium, SourceHanSansCN;
        font-weight: 500;
        color: #070028;
        line-height: 110px;
        padding-bottom: 23px;
      }
      ._m_desc {
        height: 28px;
        font-size: 20px;
        font-family: SourceHanSansCN-Normal, SourceHanSansCN;
        font-weight: 400;
        color: #4e4e4e;
        line-height: 28px;
        letter-spacing: 1px;
        padding-bottom: 30px;
      }
      ._check {
        // left: calc((100vw - 1200px) / -2);
        video {
          width: 100vw;
          height: 424px;
          object-fit: fill;
        }
      }
      ._text {
        width: 1059px;
        margin: 0 auto;
        padding-top: 30px;
        font-size: 20px;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: #000000;
        line-height: 48px;
        text-align: left;
      }
    }
    ._carousel7 {
      // padding-top: 11px;
      ._m_tit {
        padding-top: 11px;
        height: 110px;
        font-size: 80px;
        font-family: SourceHanSansCN-Medium, SourceHanSansCN;
        font-weight: 500;
        color: #070028;
        line-height: 110px;
        margin-bottom: 23px;
      }
      ._m_desc {
        height: 28px;
        font-size: 20px;
        font-family: SourceHanSansCN-Normal, SourceHanSansCN;
        font-weight: 400;
        color: #4e4e4e;
        line-height: 28px;
        letter-spacing: 1px;
        padding-bottom: 48px;
      }
      ._cont {
        ._lists {
          display: flex;
          justify-content: space-evenly;
          ._list {
            width: 370px;
            // height: 221px;
            background: #000000;
            border-radius: 23px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 16px;
            flex-wrap: wrap;
            ._img {
            }
            &:nth-child(1) {
              ._img {
                padding: 56px 0 25px 0;
                img {
                  height: 108px;
                }
              }
              ._code_img {
                img {
                  width: 341px;
                }
              }
            }
            &:nth-child(2) {
              display: flex;
              flex-wrap: wrap;
              ._txt {
                font-size: 34px;
                font-family: SourceHanSansCN-Medium, SourceHanSansCN;
                font-weight: 500;
                color: #ffffff;
                line-height: 42px;
                padding: 33px 0 0 0;
                text-align: left;
              }
              ._img {
                img {
                  height: 315px;
                }
              }
            }
            &:nth-child(3) {
              display: flex;
              flex-wrap: wrap;
              ._img {
                img {
                  height: 286px;
                }
              }
              ._txt {
                font-size: 18px;
                font-family: SourceHanSansCN-Medium, SourceHanSansCN;
                font-weight: 500;
                color: #ffffff;
                line-height: 28px;
                text-align: left;
                padding: 14px 0 98px 0;
                width: 281px;
                margin: 0 auto;
              }
            }
          }
        }
      }
    }
    ._carousel8 {
      position: relative;
      min-height: 723px;
      ._content {
        padding-top: 48px;
        ._ytaibox {
          padding-top: 59px;
          img {
            height: 436px;
          }
          ._txt {
            font-size: 20px;
            font-family: SourceHanSansCN-Normal, SourceHanSansCN;
            font-weight: 400;
            color: #ffffff;
          }
        }
      }
      ._home_title {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 582px;
        min-width: 582px;
        margin: 0 auto;

        ._icon {
          img {
            width: 56px;
            height: 56px;
          }
        }
        ._text {
          font-size: 34px;
          font-family: SourceHanSansCN-Medium, SourceHanSansCN;
          font-weight: 500;
          color: #000000;
          line-height: 39px;
          padding: 0 45px 0 58px;
        }
      }
      ._footer_btns {
        position: relative;
        padding-top: 30px;
        padding-bottom: 48px;
        width: 582px;
        margin: 0 auto;
        ._btn1 {
          background: #ffd36c;
          font-family: SourceHanSansCN-Regular, SourceHanSansCN;
          font-weight: 400;
          color: #ffffff;
          ._text {
            color: #fff;
          }
          ._icon {
            color: #fff;
          }
        }
        ._android {
          top: -240px;
          left: -23px;
        }
        ._ios {
          top: -240px;
          /* left: 80px; */
          right: -26px;
        }
        // ._btn1._active_color {
        //   background: #c3beb1;
        // }
      }
      ._btns {
        display: flex;
        justify-content: center;
        position: relative;
        ._btn1 {
          width: 230px;
          height: 56px;
          // background: linear-gradient(
          //   146deg,
          //   #d20078 0%,
          //   #012aa6 136%,
          //   #002aa6 100%,
          //   #002aa6 100%
          // );
          background: #ed8f26;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          &:first-child {
            margin-right: 92px;
          }
          span {
            // height: 20px;
            font-size: 20px;
            font-family: SourceHanSansCN-Regular, SourceHanSansCN;
            font-weight: 400;
            color: #fff;
            // line-height: 30px;
          }
          ._icon {
            line-height: 14px;
            font-size: 20px;
            margin-right: 4px;
            position: relative;
            top: -1px;
          }
          img {
            width: 28px;
            height: 28px;
            margin-right: 4px;
          }
        }
        ._Content1_android {
          top: -278px;
          left: 286px;
        }
        ._Content1_ios {
          top: -278px;
          /* left: 80px; */
          right: 286px;
        }
        // ._active_color {
        //   color: #585857;
        //   border-color: #585857;

        //   span {
        //     color: #666 !important;
        //   }
        // }
      }
      ._qr_code {
        position: absolute;
        width: 202px;
        height: 202px;
        background: #ffffff;
        box-shadow: 0px 10px 20px 0px rgba(140, 140, 140, 0.2);
        border-radius: 19px;
        margin: 50px 50px;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 170px;
          height: 170px;
        }
        &::before {
          content: "";
          width: 0px;
          height: 0px;
          border-top: 20px solid #fff;
          border-left: 20px solid transparent;
          border-right: 20px solid transparent;
          position: absolute;
          top: 202px;
          left: 80px;
        }
      }

      ._footer {
        position: absolute;
        bottom: 18px;
        height: 62px;
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #adadad;
        line-height: 31px;
        width: 458px;
        left: calc((100% - 458px) / 2);
      }
    }
    ._carousel8._not_viewport {
      
    }
  }
}
</style>
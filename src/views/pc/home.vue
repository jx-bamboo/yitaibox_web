<template>
  <div class="_pc_home">
    <div class="_content_1" id="_uccn_home">
      <div class="_left">
        <div class="_tit">
          <div class="_icon">
            <img :src="$cdn + 'pc/logo1.png'" alt="" srcset="" />
          </div>
          <div class="_desc">
            <div class="_txt1">以钛箱</div>
          </div>
          <div class="_fot_desc">全球领先区块链数字传承保险箱</div>
        </div>
        <div class="_txt3">
          您还在为您的数字资产和隐私文件的存放担忧吗？快来用以钛箱吧！这里能将您的账户、登录密码、区块链助记词、珍贵视频照片等数十种格式的文件加密存储，绝对安全保密。您还可以将这些数字资产传承给家人，还有更多的惊喜等您来发现...
        </div>
        <div class="_foot">
          <div class="_img_video" @click="dialogVisible = true">
            <div class="_icon_play">
              <img :src="$cdn + 'pc/content1_left_play.png'" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
      <div class="_right">
        <div class="_bg_1">
          <img :src="$cdn + 'pc/content1_right_bg.png'" alt="" srcset="" />
        </div>
        <div class="_bg_2">
          <img :src="$cdn + 'pc/content1_right_img.png'" alt="" srcset="" />
        </div>
      </div>
    </div>
    <div class="_btns">
      <div
        class="_btn1"
        @mouseover="activeContent1 = 1"
        @mouseleave="activeContent1 = 0"
      >
        <!-- <img :src="$cdn + 'pc/btns_andriod.png'" alt="" srcset="" /> -->
        <span class="_icon">
          <icon-svg icon-class="iconanzhuo"></icon-svg>
        </span>
        <span class="_text"> 安卓下载 </span>
      </div>
       <div
        class="_btn1 _active_color"
      >
        <!-- <img :src="$cdn + 'pc/btns_ios.png'" alt="" srcset="" /> -->
        <span class="_icon">
          <icon-svg icon-class="iconios"></icon-svg>
        </span>
        <span class="_text"> 上架准备中 </span>
      </div>
      <div
        class="_qr_code"
        v-if="activeContent1 !== 0"
        :class="[activeContent1 == '1' ? '_Content1_android' : '_Content1_ios']"
      >
        <img :src="$img.qr_code" alt="" srcset="" />
      </div>
    </div>
    <!-- 服务与安全 -->
    <div class="_content2" id="_uccn_safety">
      <div class="_home_title">
        <div class="_icon">
          <img :src="$img.title_icon" alt="" srcset="" />
        </div>
        <div class="_text">数据安全存储</div>
        <div class="_icon">
          <img :src="$img.title_icon" alt="" srcset="" />
        </div>
      </div>
      <div class="_cont">
        <div class="_list" v-for="(item, index) in contentList2" :key="index">
          <!-- <div class="_tit_img">
            <img :src="requireImg(item.tit_img)" alt="" srcset="" />
          </div> -->
          <div class="_content2_title">{{ item.title }}</div>
          <div class="_content2_desc">{{ item.desc }}</div>
          <div class="_fot_img">
            <img :src="requireImg(item.img)" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
    <!-- 数据加密 -->
    <div class="_home_title" id="_uccn_data_encryption">
      <div class="_icon">
        <img :src="$img.title_icon" alt="" srcset="" />
      </div>
      <div class="_text">数据加密上链</div>
      <div class="_icon">
        <img :src="$img.title_icon" alt="" srcset="" />
      </div>
    </div>
    <div class="_content2_1">
      <div class="_left">
        <div class="_border_icon">
          <img :src="$img.text_icon" alt="" />
        </div>
        <div class="_text">
          所有数据都经过AES技术加密，然后才上传至区块链。上传的数据及文件无法被篡改，而且只有您的私钥能解密，任何人无法盗取。
        </div>
        <div class="_border_icon">
          <img :src="$img.text_icon" alt="" />
        </div>
      </div>
      <div class="_right">
        <div class="_icon">
          <img :src="$cdn + 'pc/content2_1.png'" alt="" srcset="" />
        </div>
      </div>
    </div>
    <!-- 数据资产传承 -->
    <div class="_home_title" id="_uccn_Asset_transfer">
      <div class="_icon">
        <img :src="$img.title_icon" alt="" srcset="" />
      </div>
      <div class="_text">数据资产传承</div>
      <div class="_icon">
        <img :src="$img.title_icon" alt="" srcset="" />
      </div>
    </div>

    <div class="_content3">
      <div class="_check">
        <video
          muted
          autoplay="autoplay"
          loop="loop"
          :src="content3_video"
        ></video>
      </div>
      <div class="_img">
        <img :src="$cdn + 'pc/content3_ipone1.png'" alt="" />
      </div>
    </div>

    <div class="_content4">
      <div class="_border_icon">
        <img :src="$img.text_icon" alt="" />
      </div>
      <div class="_text">
        上传到以钛箱的加密资产及数据，可以在以钛箱内提前预设传承给亲朋好友。给长辈，给儿女，给想守护的人，给您的她（他）。即使意外发生，您的数字资产及数据也会传承下去。同时，传承算法上链永久保存，不受任何人为因素的篡改，确保被传承人能准时，准确的接收。
      </div>
      <div class="_border_icon">
        <img :src="$img.text_icon" alt="" />
      </div>
    </div>

    <!-- 关于我们 -->
    <div class="_home_title" id="_uccn_AboutUs">
      <div class="_icon">
        <img :src="$img.title_icon" alt="" srcset="" />
      </div>
      <div class="_text">关于我们</div>
      <div class="_icon">
        <img :src="$img.title_icon" alt="" srcset="" />
      </div>
    </div>
    <div class="_content5">
      <!-- <div class="_bg"></div> -->
      <div
        class="_cont"
        :class="[activeContent5 == 0 ? '_check_content5_cont' : '']"
      >
        <div class="_left_icon">
          <img :src="$cdn + 'pc/content5_left.png'" alt="" srcset="" />
        </div>
        <div class="_cont_center">
          <div class="_left">
            <div class="_tit">
              <span class="_t1">{{ getActiveContent5().name }}</span>
              <span class="_t2">{{ getActiveContent5().school }}</span>
            </div>
            <div class="_t3">{{ getActiveContent5().txt1 }}</div>
            <div class="_t4">{{ getActiveContent5().txt2 }}</div>
            <div class="_t5">{{ getActiveContent5().txt3 }}</div>
          </div>
          <div class="_right">
            <img :src="requireImg(getActiveContent5().img)" alt="" srcset="" />
          </div>
        </div>
        <div class="_right_icon">
          <img :src="$cdn + 'pc/content5_right.png'" alt="" srcset="" />
        </div>
      </div>

      <div class="_fot">
        <div
          class="_list"
          v-for="(item, index) in contentList5"
          :key="index"
          :class="[index == activeContent5 ? '_activeContent5' : '']"
          @mouseover="activeContent5 = index"
        >
          <span class="_active_icon">
            <img :src="$cdn + 'pc/content5_list_icon.png'" alt="" srcset="" />
          </span>
          <span class="_icon_img">
            <img :src="requireImg(item.icon)" alt="" srcset="" />
          </span>
          <span class="_text">
            {{ item.desc }}
          </span>
        </div>
      </div>
    </div>

    <div class="_content6">
      <div class="_home_title">
        <div class="_icon">
          <img :src="$img.download" alt="" srcset="" />
        </div>
        <div class="_text">立即下载获取您的专属保险箱吧！</div>
        <div class="_icon">
          <img :src="$img.download" alt="" srcset="" />
        </div>
      </div>
      <div class="_ytaibox">
        <img :src="$cdn + 'pc/content6_ytaibox_1.png'" alt="" srcset="" />
      </div>
    </div>

    <div class="_btns _footer_btns">
      <div
        class="_btn1"
        @mouseover="activeContent6 = 1"
        @mouseleave="activeContent6 = 0"
      >
        <!-- <img :src="$cdn + 'pc/content6_andriod.png'" alt="" srcset="" /> -->
        <span class="_icon">
          <icon-svg icon-class="iconanzhuo"></icon-svg>
        </span>
        <span class="_text"> 安卓下载 </span>
      </div>

      <div
        class="_btn1 _active_color"
      >
        <!-- <img :src="$cdn + 'pc/content6_ios.png'" alt="" srcset="" /> -->
        <span class="_icon">
          <icon-svg icon-class="iconios"></icon-svg>
        </span>
        <span class="_text"> IOS下载 </span>
      </div>

      <div
        class="_qr_code"
        v-if="activeContent6 !== 0"
        :class="[activeContent6 == '1' ? '_android' : '_ios']"
      >
        <img :src="$img.qr_code_iOS" alt="" srcset="" />
      </div>
    </div>
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
        <!-- <video autoplay="autoplay" loop="loop" :src="content1_video"></video> -->
      </div>
    </el-dialog>
  </div>
</template>

<script>
let that;
import Ivideo from "@/components/video.vue";
import mockData from "@/assets/js/mockData.js";

export default {
  data() {
    return {
      contentList2: [
        {
          tit_img: "/list_1.png",
          title: "存密钥",
          desc:
            "密钥千万条，安全第一条；以钛箱将账户、密码、密钥链上隐秘存档，防丢、防盗、防遗忘",
          img: "/content2_list_4_2.png",
        },
        {
          tit_img: "/list_2.png",
          title: "存文件",
          desc:
            "重要文件一键上链，永久存储，永远不变；多维度私密体验，标签便捷归档，轻简管理、轻便有序",
          img: "/content2_list_1.png",
        },
        // {
        //   tit_img: "/list_3.png",
        //   title: "星际传承",
        //   desc:
        //     "给未来的儿子，给未来的老婆，给想守护的人，当意外发生，把您的数字资产打包传承下去",
        //   img: "/content2_list_3.png",
        // },
        // {
        //   tit_img: "/list_4.png",
        //   title: "结构化数据",
        //   desc:
        //     "区块链助记词、银行卡、登录密码等结构化数据信息，一次加密上链，永久留存",
        //   img: "/content2_list_4.png",
        // },
      ],
      contentList5: mockData.uccn_contentList5,
      // 当前选中的人员介绍
      activeContent5: 0,
      dialogVisible: false,
      // 下载二维码
      activeContent6: 0,
      activeContent1: 0,
    };
  },
  created() {
    that = this;
  },
  mounted() {
    console.log(this);
    this.set_content_1Anim();
  },
  methods: {
    // 引入本地img
    requireImg(url) {
      // console.log(url)
      return this.$cdn + "/pc" + url;
      return require("@/assets/img/pc" + url);
    },
    // content5 list点击选中
    getActiveContent5(index = this.activeContent5) {
      return this.contentList5[index] || {};
    },

    set_content_1Anim() {
      console.log(this.$global.viewportToPixels(100 + "vh") * -1);
      this.$anime({
        targets: "._content_1 ._left ._tit",
        // scrollTop: this.$global.viewportToPixels(100 + "vh")*-1,
        opacity: 1,
        top: 0,
        autoplay: true,
        duration: 400,
        delay: 0,
        easing: "easeInOutSine",
      });
      this.$anime({
        targets: "._content_1 ._left ._txt3",
        // scrollTop: this.$global.viewportToPixels(100 + "vh")*-1,
        opacity: 1,
        top: 0,
        autoplay: true,
        duration: 400,
        delay: 250,
        easing: "easeInOutSine",
      });
      this.$anime({
        targets: "._content_1 ._left ._foot",
        // scrollTop: this.$global.viewportToPixels(100 + "vh")*-1,
        opacity: 1,
        top: 0,
        autoplay: true,
        duration: 500,
        delay: 550,
        easing: "easeInOutSine",
      });
      this.$anime({
        targets: "._content_1 ._right ._bg_2",
        // scrollTop: this.$global.viewportToPixels(100 + "vh")*-1,
        opacity: 1,
        top: 144,
        autoplay: true,
        duration: 888,
        delay: 650,
        easing: "easeInOutSine",
      });
    },
    // 选中activeContent6Fn
    activeContent6Fn() {},
  },
  components: {
    Ivideo,
  },
  computed: {
    content1_video() {
      return this.$cdn + "/video/content1_2_video.mp4";
    },
    content3_video() {
      return this.$cdn + "/video/content3_video.mp4";
    },
    activeContent6_img() {
      return {
        android: this.$img.qr_code,
        ios: this.$img.qr_code,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
._pc_home {
  min-height: 100vh;
  width: 1200px;
  margin: 0 auto;
  ._content_1 {
    display: flex;
    ._left {
      width: 542px;
      padding-top: 86px;
      margin-right: 48px;
      position: relative;
      // top: calc(-1 * 100vh);
      ._tit {
        display: flex;
        padding-bottom: 26px;
        position: relative;
        top: calc(1 * 100vh);
        opacity: 0;
        flex-wrap: wrap;
        ._icon {
          img {
            height: 46px;
          }
          margin-right: 21px;
        }
        ._desc {
          ._txt1 {
            font-size: 41px;
            font-family: SourceHanSansCN-Bold, SourceHanSansCN;
            font-weight: bold;
            color: #ffffff;
            line-height: 46px;
          }
        }
        ._fot_desc {
          width: 100%;
          font-size: 19px;
          font-family: SourceHanSansCN-Regular, SourceHanSansCN;
          font-weight: 400;
          color: #ffffff;
          line-height: 20px;
          letter-spacing: 4px;
          text-align: left;
          padding-top: 9px;
        }
      }
      ._txt3 {
        font-size: 18px;
        font-family: SourceHanSansCN-Normal, SourceHanSansCN;
        font-weight: 400;
        color: #ffffff;
        text-align: left;
        position: relative;
        top: calc(1 * 100vh);
        opacity: 0;
        line-height: 36px;
      }
      ._foot {
        padding-top: 50px;
        ._img_video {
          width: 394px;
          height: 225px;
          background-image: url($cdn + "/pc/content1_left_video.png");
          background-size: 100% 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          ._icon_play {
            width: 84px;
            height: 84px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            // background: rgba(255, 255, 255, 0.7);
            // border-radius: 50%;
            img {
              width: 84px;
              height: 84px;
            }
          }
        }
        position: relative;
        top: calc(1 * 100vh);
        opacity: 0;
      }
    }
    ._right {
      padding-top: 46px;
      position: relative;
      width: 610px;
      // margin-bottom: 47px;
      height: 665px;
      ._bg_1 {
        width: 100%;
        display: flex;
        justify-content: center;
        img {
          width: 464px;
          height: 488px;
        }
      }
      ._bg_2 {
        margin: 0 auto;
        position: absolute;
        top: 100vh;
        opacity: 0;
        img {
          width: 610px;
          height: 510px;
        }
      }
    }
  }
  ._btns {
    display: flex;
    justify-content: center;
    position: relative;
    ._btn1 {
      width: 230px;
      height: 56px;
      border-radius: 12px;
      border: 1px solid #ffd36c;
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
        color: #ffd36c;
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
    ._active_color {
      color: #585857;
      border-color: #585857;
      
      span {
        color: #666 !important;
      }
    }
  }
  ._content2 {
    padding-top: 121px;
    ._title {
      width: 101px;
      height: 31px;
      background: linear-gradient(270deg, #ffd36c 0%, #ffb119 100%);

      font-size: 20px;
      font-family: ITFDevanagari-Bold, ITFDevanagari;
      font-weight: bold;
      color: #ffffff;
      margin: 0 auto;
    }
    ._cont {
      display: flex;
      flex-wrap: wrap;
      padding-top: 82px;
      ._list {
        width: 600px;
        ._tit_img {
          margin-bottom: 24px;
          padding-left: 71px;
          text-align: left;
          img {
            width: 94px;
            height: 70px;
          }
        }
        ._content2_title {
          padding-left: 71px;
          font-size: 40px;
          font-family: SourceHanSansCN-Medium, SourceHanSansCN;
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 24px;
          width: 100%;
          max-width: 450px;
          text-align: left;
        }
        ._content2_desc {
          padding-left: 71px;
          font-size: 18px;
          width: 100%;
          max-width: 450px;
          text-align: left;
          padding-bottom: 45px;
          font-family: SourceHanSansCN-Regular, SourceHanSansCN;
          font-weight: 400;
          color: #ffffff;
              line-height: 28px;
        }
        ._fot_img {
          img {
            width: 600px;
          }
        }
        &:nth-child(1),
        &:nth-child(2) {
          padding-bottom: 121px;
        }
        &:nth-child(3),
        &:nth-child(4) {
          padding-bottom: 108px;
        }
      }
    }
  }
  ._content2_1 {
    display: flex;
    padding-top: 80px;
    padding-bottom: 122px;
    ._left {
      ._border_icon {
        text-align: left;
        img {
          width: 54px;
          position: relative;
          top: 24px;
        }
        &:last-child {
          text-align: right;
          img {
            position: relative;
            top: 64px;
          }
        }
      }
      ._text {
        padding-left: 60px;
        font-size: 20px;
        width: 688px;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: #ffffff;
        line-height: 40px;
        text-align: left;
      }
    }
    ._right {
      width: calc(127px + 352px);
      text-align: right;
      img {
        width: 352px;
      }
    }
  }

  ._home_title {
    display: flex;
    justify-content: center;
    align-items: center;
    ._icon {
      img {
        width: 42px;
        height: 42px;
      }
    }
    ._text {
      height: 57px;
      font-size: 38px;
      font-family: SourceHanSansCN-Medium, SourceHanSansCN;
      font-weight: 500;
      color: #ffffff;
      line-height: 57px;
      margin-left: 50px;
      margin-right: 50px;
    }
    //     &:nth-child(1){
    // margin-right: 50px;
    //     }
    //     &:last-child{
    //       margin-left: ;
    //     }
  }
  ._content3 {
    position: relative;
    padding-top: 75px;
    padding-bottom: 40px;
    height: 424px;
    ._img {
      position: absolute;
      top: 138px;
      left: calc(230px + (1200px) / 2);
      img {
        width: 370px;
      }
    }
    ._check {
      position: absolute;
      left: calc((100vw - 1200px) / -2);
      video {
        width: 100vw;
        height: 424px;
        object-fit: fill;
      }
    }
  }
  ._content4 {
    width: 800px;
    padding-bottom: 160px;
    ._border_icon {
      text-align: left;
      img {
        width: 54px;
        position: relative;
        top: 44px;
      }
      &:last-child {
        text-align: right;
        img {
          position: relative;
          top: -44px;
        }
      }
    }
    ._text {
      padding-left: 60px;
      font-size: 20px;
      width: 688px;
      font-family: SourceHanSansCN-Regular, SourceHanSansCN;
      font-weight: 400;
      color: #ffffff;
      line-height: 40px;
      text-align: left;
    }
  }
  ._content5 {
    position: relative;
    padding-top: 67px;
    height: 724px;
    ._bg {
      width: 852px;
      height: 378px;
      background: #ffd36c;
      border-radius: 12px;
      position: absolute;
      z-index: 1;
      left: calc((100% - 852px) / 2);
    }
    ._cont {
      width: 1200px;
      height: 364px;
      background: #ffffff;
      position: relative;
      z-index: 2;
      top: 7px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-radius: 8px;
      ._left_icon {
        img {
          width: 76px;
        }
      }
      ._cont_center {
        display: flex;

        ._left {
          padding-top: 7px;
          ._tit {
            display: flex;
            text-align: left;
            width: 554px;
            height: 70px;
            ._t1 {
              font-size: 40px;
              font-family: SourceHanSansCN-Medium, SourceHanSansCN;
              font-weight: 500;
              color: #000000;
            }
            ._t2 {
              padding-left: 24px;
              font-size: 28px;
              font-family: SourceHanSansCN-Medium, SourceHanSansCN;
              font-weight: 500;
              color: #000000;
              line-height: 70px;
            }
          }
          ._t3 {
            text-align: left;
            font-size: 26px;
            font-family: SourceHanSansCN-Normal, SourceHanSansCN;
            font-weight: 400;
            color: #000000;
            margin-bottom: 90px;
            position: relative;
            left: -14px;
            width: 553px;
          }
          ._t4 {
            text-align: left;
            font-size: 24px;
            font-family: SourceHanSansCN-Medium, SourceHanSansCN;
            font-weight: 500;
            color: #000000;
            margin-bottom: 10px;
            width: 553px;
            height: 36px;
          }
          ._t5 {
            text-align: left;
            font-size: 24px;
            font-family: SourceHanSansCN-Medium, SourceHanSansCN;
            font-weight: 500;
            color: #000000;
            width: 553px;
          }
        }
        ._right {
          img {
            width: 230px;
            height: 292px;
            border-radius: 14px;
          }
        }
      }
      ._right_icon {
        img {
          width: 76px;
        }
      }
    }
    ._fot {
      display: flex;
      ._list {
        ._active_icon {
          visibility: hidden;
          img {
            width: 124px;
          }
          position: relative;
          z-index: 2;
          top: -26px;
        }
        ._icon_img {
          position: relative;
          top: -8px;
          opacity: 0.45;
          img {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            cursor: pointer;
          }
        }
        ._text {
          display: block;
          padding-top: 25px;
          visibility: hidden;
          font-size: 22px;
          font-family: SourceHanSansCN-Normal, SourceHanSansCN;
          font-weight: 400;
          color: #ffffff;
          padding-bottom: 70px;
        }
      }
      ._list._activeContent5 {
        ._active_icon {
          visibility: initial;
        }
        ._icon_img {
          opacity: 1;
          img {
            border: 3px solid #ffd36c;
          }
        }
        ._text {
          visibility: initial;
        }
      }
    }
    ._check_content5_cont {
      ._t1 {
        // font-size: 30px !important;
      }
      ._t2 {
        font-size: 20px !important;
      }
    }
  }

  ._content6 {
    ._ytaibox {
      padding-top: 70px;
      img {
        width: 542px;
      }
      ._txt {
        font-size: 20px;
        font-family: SourceHanSansCN-Normal, SourceHanSansCN;
        font-weight: 400;
        color: #ffffff;
      }
    }
  }

  ._footer_btns {
    position: relative;
    padding-top: 70px;
    padding-bottom: 154px;
    ._btn1 {
      background: #ffd36c;

      ._text {
        color: #000;
      }
      ._icon{
        color: #000;
      }
      
    }
    ._android {
      top: -210px;
      left: 286px;
    }
    ._ios {
      top: -210px;
      /* left: 80px; */
      right: 286px;
      
    }
    ._btn1._active_color{
background: #c3beb1;
    }
    
  }

  ._qr_code {
    position: absolute;
    width: 202px;
    height: 202px;
    background: #fff;
    border-radius: 8px;
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
}
</style>
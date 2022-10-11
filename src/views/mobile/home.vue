<template>
  <div class="_mobile_home">
    <div class="_content_1" id="_uccn_home">
      <div class="_right">
        <div class="_bg_1">
          <img :src="$cdn + 'pc/content1_right_bg.png'" alt="" srcset="" />
        </div>
        <div class="_bg_2">
          <img :src="$cdn + 'pc/content1_right_img.png'" alt="" srcset="" />
        </div>
        <div class="_img_video" @click="dialogVisible = true">
          <div class="_icon_play">
            <img :src="$cdn + 'pc/content1_left_play.png'" alt="" srcset="" />
          </div>
        </div>
      </div>
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
      </div>
    </div>
    <div class="_btns">
      <div class="_btn1" @click="downloadApk()">
        <!-- <img :src="$cdn + 'pc/btns_andriod.png'" alt="" srcset="" /> -->
        <span class="_icon">
            <icon-svg icon-class='iconanzhuo'></icon-svg>
        </span>
        <span class="_text"> 安卓下载 </span>
      </div>
      <div class="_btn1 _active_color">
        <!-- <img :src="$cdn + 'pc/btns_ios.png'" alt="" srcset="" /> -->
        <span class="_icon">
            <icon-svg icon-class='iconios'></icon-svg>
        </span>
        <span class="_text"> 上架准备中 </span>
      </div>
    </div>
    <!-- 服务与安全 -->
    <div class="_content2" id="_uccn_safety">
      <!-- 数据加密 -->
      <div class="_home_title" id="_uccn_data_encryption">
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
          <div class="_tit_img">
            <img :src="requireImg(item.tit_img)" alt="" srcset="" />
            <div class="_content2_title">{{ item.title }}</div>
          </div>

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
        <!-- <video
          muted
          autoplay="autoplay"
          loop="loop"
          :src="content3_video"
        ></video> -->
        <img :src="content3_video" alt="" srcset="">
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
      <div class="_cont">
        <div class="_cont_center">
          <div class="_left">
            <div class="_tit">
              <span class="_t1 _more_worp _one_omit" >{{ getActiveContent5().name }}</span>
            </div>
            <div class="_t2">{{ getActiveContent5().school }}</div>
            <div class="_t4">{{ getActiveContent5().txt2 }}</div>
            <div class="_t5">{{ getActiveContent5().txt3 }}</div>

            <div class="_t3">{{ getActiveContent5().txt1 }}</div>
          </div>
          <div class="_right">
            <img :src="requireImg(getActiveContent5().img)" alt="" srcset="" />
          </div>
        </div>
      </div>

      <div class="_fot">
        <div
          class="_list"
          v-for="(item, index) in contentList5"
          :key="index"
          :class="[index == activeContent5 ? '_activeContent5' : '']"
          @click="activeContent5 = index"
        >
          <!-- <span class="_active_icon">
            <img
              :src="$cdn+'pc/content5_list_icon.png'"
              alt=""
              srcset=""
            />
          </span> -->
          <span class="_icon_img">
            <img :src="requireImg(item.icon)" alt="" srcset="" />
          </span>
          <!-- <span class="_text">
            {{ item.desc }}
          </span> -->
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
      <div class="_btn1" @click="downloadApk()">
        <!-- <img :src="$cdn + 'pc/btns_andriod.png'" alt="" srcset="" /> -->
         <span class="_icon">
            <icon-svg icon-class='iconanzhuo'></icon-svg>
        </span>
        <span class="_text"> 安卓下载 </span>
      </div>
      <div class="_btn1 _active_color">
        <span class="_icon">
 <icon-svg icon-class='iconios'></icon-svg>
        </span>
       
        <!-- <img :src="$cdn + 'pc/btns_ios.png'" alt="" srcset="" /> -->
        <span class="_text"> 上架准备中 </span>
      </div>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="100vw"
      custom-class="paly_dialog paly_mobile_dialog"
      :show-close="false"
      :destroy-on-close="true"
    >
      <div class="_mobile_check_video">
        <div class="_mobile_icon_close" @click="dialogVisible = false">
          <img :src="$cdn + 'pc/content1_close.png'" alt="" srcset="" />
        </div>
        <Ivideo v-if="dialogVisible" :videoUrl="content1_video"></Ivideo>
        <!-- <video autoplay="autoplay" loop="loop" :src="content1_video"></video> -->
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Ivideo from "@/components/video.vue";
import mockData from "@/assets/js/mockData.js";
export default {
  data() {
    return {
      contentList2: [
        {
          tit_img: "mobile/content2_list_tit1.png",
          title: "存密钥",
          desc:
            "密钥千万条，安全第一条；以钛箱将账户、密码、密钥链上隐秘存档，防丢、防盗、防遗忘",
          img: "pc/content2_list_4_2.png",
        },
        {
          tit_img: "mobile/content2_list_tit2.png",
          title: "存文件",
          desc:
            "重要文件一键上链，永久存储，永远不变；极致私密体验，标签便捷归档，轻简管理、轻便有序",
          img: "pc/content2_list_1.png",
        },
        // {
        //   tit_img: "pc/list_1.png",
        //   title: "数据安全",
        //   desc:
        //     "所有数据加密上链，私钥解密查看，确保您上传的数据绝对的安全，别人无法破解",
        //   img: "mobile/content2_list_1.png",
        // },
        // {
        //   tit_img: "pc/list_2.png",
        //   title: "区块链防盗",
        //   desc:
        //     "区块链底层技术支持，加密数据防破解防篡改，分布式存储确保加密数据安全稳定",
        //   img: "mobile/content2_list_2.png",
        // },
        // {
        //   tit_img: "pc/list_3.png",
        //   title: "星际传承",
        //   desc:
        //     "给未来的儿子，给未来的老婆，给想守护的人，当意外发生，把您的数字资产打包传承下去",
        //   img: "mobile/content2_list_3.png",
        // },
        // {
        //   tit_img: "pc/list_4.png",
        //   title: "结构化数据",
        //   desc:
        //     "区块链助记词、银行卡、登录密码等结构化数据信息，一次加密上链，永久留存",
        //   img: "mobile/content2_list_4.png",
        // },
      ],
      contentList5: mockData.uccn_contentList5,
      // 当前选中的人员介绍
      activeContent5: 0,
      dialogVisible: false,
    };
  },
  methods: {
    // 引入本地img
    requireImg(url) {
      // console.log(url)
      if (url.indexOf("pc/") !== -1 || url.indexOf("mobile/") !== -1) {
        return this.$cdn + url;
      }
      // if(url.indexOf('pc/')==-1&&url.indexOf('mobile/')==-1){
      // return this.$cdn+'/pc'+url
      // }
      return this.$cdn + "/pc" + url;
      // return require("@/assets/img/" + url);
    },
    //
    getActiveContent5(index = this.activeContent5) {
      return this.contentList5[index] || {};
    },
    async downloadApk(){
   this.$store.commit('setIsDownload',new Date().getTime())
    },

  },
  computed: {
    content1_video() {
      return this.$cdn + "/video/content1_2_video.mp4";
    },
    content3_video() {
      return this.$cdn + "/video/content1_m_video.png";
      // https://yitaibox-cdn.dbchain.cloud/ytaibox_web/video/content1_m_video.mp4
    },
    isWeixin(){
        return this.$global.browserTypoe('weixin')
    }
  },
  components: {
    Ivideo,
  },
};
</script>

<style lang="scss" scoped>
._mobile_home {
  min-height: 100vh;
  // width: 1200px;
  margin: 0 auto;
  ._content_1 {
    display: flex;
    flex-wrap: wrap;
    ._left {
      padding: 110px 13px 38px 13px;
      ._tit {
        display: flex;
        padding-bottom: 22px;
        flex-wrap: wrap;
        ._icon {
          img {
            height: 33px;
          }
          margin-right: 10px;
        }
        ._desc {
          ._txt1 {
             font-size: 34px;
            font-family: SourceHanSansCN-Bold, SourceHanSansCN;
            font-weight: bold;
            color: #ffffff;
            line-height: 34px;
            position: relative;
            top: 2px;
          }
        }
        ._fot_desc {
          width: 100%;
          font-size: 16.88px;
          font-family: SourceHanSansCN-Regular, SourceHanSansCN;
          font-weight: 400;
          color: #ffffff;
          line-height: 20px;
          letter-spacing: 0px;
          text-align: left;
          padding-top: 8px;
        }
      }
      ._txt3 {
        font-size: 14px;
        font-family: SourceHanSansCN-Normal, SourceHanSansCN;
        font-weight: 400;
        color: #ffffff;
        text-align: left;
        line-height: 30px;
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
      }
    }
    ._right {
      padding-top: 46px;
      position: relative;
      width: 375px;
      // margin-bottom: 47px;
      ._bg_1 {
        width: 100%;
        display: flex;
        justify-content: center;
        img {
          width: 279px;
          height: 294px;
        }
      }
      ._bg_2 {
        margin: 0 auto;
        position: absolute;
        top: 98px;
        img {
          width: 375px;
        }
      }
      ._img_video {
        position: absolute;
        top: calc((100vh - 60px - 146px) / 2);
        left: calc((100vw - 75px) / 2);
        ._icon_play {
          width: 75px;
          height: 75px;
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
    }
  }

  ._btns {
    display: flex;
    justify-content: space-evenly;
    ._btn1 {
      width: 170px;
      height: 46px;
      border-radius: 12px;
      border: 1px solid #ffd36c;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:first-child {
        // margin-right: 92px;
      }
      span {
        // height: 20px;
        font-size: 16px;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: #ffd36c;
        // line-height: 30px;
      }
      ._icon{
            line-height: 14px;
    font-size: 20px;
    margin-right: 4px;
    position: relative;
    top: -1px;
}
      img {
        width: 24px;
        height: 24px;
        margin-right: 4px;
      }
    }

    ._active_color{
      color: #666;
      border-color:  #666;
      span{
        color: #666;
      }
    }
  }
  ._content2 {
    padding-top: 33px;
    ._title {
      img {
        width: 246px;
        height: 120px;
      }
      margin: 0 auto;
    }
    ._cont {
      display: flex;
      flex-wrap: wrap;
padding-top: 35px;
      ._list {
        width: 100%;
        ._tit_img {
          padding: 0 10px 0 10px;
          margin-bottom: 12px;
          text-align: left;
          display: flex;
          img {
            width: 40px;
            height: 40px;
          }
        }
        ._content2_title {
          font-size: 30px;
          font-family: SourceHanSansCN-Medium, SourceHanSansCN;
          font-weight: 500;
          color: #ffffff;
          width: 100%;
        }
        ._content2_desc {
          padding: 0 20px 0 20px;
          font-size: 14px;
          font-family: SourceHanSansCN-Regular, SourceHanSansCN;
          font-weight: 300;
          color: #fff;
          width: calc( 100% - 40px);
          text-align: left;
          padding-bottom: 45px;line-height: 28px;
        }
        ._fot_img {
          img {
            width: 100%;
          }
        }
        &:nth-child(1),
        &:nth-child(2) {
          padding-bottom: 40px;
        }
        &:nth-child(3) {
          padding-bottom: 48px;
        }
        &:nth-child(4) {
          padding-bottom: 96px;
        }
      }
    }
  }
  ._content2_1 {
    display: flex;
    padding-top: 40px;
    padding-bottom: 102px;
    flex-wrap: wrap;
    ._left {width: 100%;
      ._border_icon {
        text-align: left;
        img {
          width: 36px;
          position: relative;
          top: 0px;
          left: 12px;
        }
        &:last-child {
          text-align: right;
           width: 349px;
          img {
            position: relative;
            top: -22px;
            right: 24px;
          }
        }
      }
      ._text {
        font-size: 14px;
       width: 349px;
       margin: 0 auto;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: #ffffff;
        text-align: left;line-height: 40px;
      }
    }
    ._right {
      width: 100%;
      img {
        // width: 100%;
        height: 207px;
      }
    }
  }

  ._home_title {
    display: flex;
    justify-content: center;
    align-items: center;
    ._icon {
      img {
        width: 25px;
        height: 25px;
      }
    }
    ._text {
      height: 57px;
      font-size: 22px;
      font-family: SourceHanSansCN-Medium, SourceHanSansCN;
      font-weight: 500;
      color: #ffffff;
      line-height: 57px;
      margin-left: 18px;
      margin-right: 18px;
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
    padding-top: 25px;
    padding-bottom: 24px;
    ._check {
      img{
        width: 100vw;
        height: 187px;
      }
      video {
        width: 100vw;
        height: 187px;
        object-fit: fill;
      }
    }
  }
  ._content4 {
    width: 100%;
    padding-bottom: 18px;
    ._border_icon {
      text-align: left;
      img {
        width: 36px;
        position: relative;
        top: 10px;
        left: 14px;
      }
      &:last-child {
        text-align: right;
        img {
          position: relative;
          top: -24px;
          right: -14px;
          left: -14px;
        }
      }
    }
    ._text {
      margin: 0 auto;
      font-size: 14px;
      width: 349px;
      font-family: SourceHanSansCN-Regular, SourceHanSansCN;
      font-weight: 400;
      color: #ffffff;
      
      text-align: left;line-height: 40px;
    }
  }
  ._content5 {
    position: relative;
    padding: 30px 12px 20px 12px;
    ._bg {
      width: calc(100% - 24px);
      height: 272px;
      background: #ffd36c;
      border-radius: 12px;
      position: absolute;
      z-index: 1;
    }
    ._cont {
      width: 100%;
      height: 258px;
      background: #ffffff;
      position: relative;
      z-index: 2;
      top: 7px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-radius: 8px;

      ._cont_center {
        display: flex;
        height: inherit;
        width: inherit;
        justify-content: space-between;
        ._left {
          padding-top: 21px;
          padding-left: 23px;
          height: calc(100% - 21px);
          width:calc(100% - 190px) ;
          ._tit {
            display: flex;
            text-align: left;
            width: 100%;
            word-break:break-all;

            ._t1 {
              font-size: 22px;
              font-family: SourceHanSansCN-Medium, SourceHanSansCN;
              font-weight: 500;
              color: #000000;
              line-height: 22px;
              height: 22px;
            }
            margin-bottom: 14px;
          }
          ._t2 {
            text-align: left;
            font-size: 14px;
            font-family: SourceHanSansCN-Medium, SourceHanSansCN;
            font-weight: 500;
            color: #000000;
            margin-bottom: 70px;
            height: 14px;
             line-height: 18px;
          }
          ._t3 {
            text-align: center;
            font-size: 14px;
            font-family: SourceHanSansCN-Normal, SourceHanSansCN;
            font-weight: 400;
            color: #000000;
            left: -14px;
            height: 14px;
            line-height: 14px;
            width: 351px;
            position: absolute;
          }
          ._t4 {
            text-align: left;
            font-size: 14px;
            font-family: SourceHanSansCN-Medium, SourceHanSansCN;
            font-weight: 500;
            color: #000000;
            margin-bottom: 10px;
            height: 14px;
            line-height: 14px;
          }
          ._t5 {
            text-align: left;
            font-size: 14px;
            font-family: SourceHanSansCN-Medium, SourceHanSansCN;
            font-weight: 500;
            color: #000000;
            height: 14px;
            line-height: 18px;
            margin-bottom: 39px;
            width: 92%;
          }
        }
        ._right {
          padding-top: 17px;
          padding-right: 16px;
          img {
            width: 137px;
            height: 174px;
            border-radius: 14px;
          }
        }
      }
    }
    ._fot {
      display: flex;
      flex-wrap: wrap;
      padding: 12px;
      padding-top: 46px;
      ._list {
        margin-right: 35px;
        ._active_icon {
          img {
            width: 50px;
          }
        }
        ._icon_img {
          opacity: 0.45;

          img {
            width: 54px;
            height: 54px;
            border-radius: 50%;
            cursor: pointer;
            margin-bottom: 24px;
          }
        }
        &:nth-child(4),
        &:nth-child(8) {
          margin-right: 0;
        }
      }
      ._list._activeContent5 {
        ._active_icon {
          visibility: initial;
        }
        ._icon_img {
          opacity: 1;
          img {
            width: 50px;
            height: 50px;
            border: 2px solid #ffd36c;
          }
        }
        ._text {
          visibility: initial;
        }
      }
    }
  }

  ._content6 {
    ._home_title{
      width: 70%;
      margin: 0 auto;
      line-height: 28px;
      height: 28px;
      ._text{
       line-height: 28px;
      height: 28px; 
      font-size: 20px;
      }
      ._icon{
        position: relative;
        top: 18px;
      }
    }
    ._ytaibox {
      padding-top: 73px;
      img {
        width: 100%;
      }
      ._txt {
        font-size: 16px;
        font-family: SourceHanSansCN-Normal, SourceHanSansCN;
        font-weight: 400;
        color: #ffffff;
      }
    }
  }

  ._footer_btns {
    padding-top: 70px;
    padding-bottom: 39px;
    ._btn1 {
      img {
        width: 16px;
      }
      //   background: #000;

      //   ._text {
      //     color: #fff;
      //     font-size: 16px;
      //   }
    }
  }
  ._active_color{
    border-color: #666;
    img{
      filter: grayscale(100%);
    }
    ._text{
      color: #666;
    }
  }
}
</style>
<template>
  <div class="_m_home _new_m_home">
    <div class="_m_logo">
      <img :src="$img.new_logo" alt="" srcset="" />
    </div>
    <div class="_m_tit">以钛之名<br />安全传承</div>

    <div class="_m_desc">保障数据资产安全与继承的专业级应用</div>

    <div class="_m_cont">
      <img :src="$cdn + 'new_mobile/cont.png'" alt="" srcset="" />
    </div>
    <div class="_m_btn">
      <div class="_btn"  @click="downloadApk()">立即下载</div>
      <div class="_view" @click="dialogVisible = true">
        查看视频
        <span class="_icon">
          <icon-svg icon-class="iconbianzu9"></icon-svg>
        </span>
      </div>
    </div>

    <div class="_conttet2">
      <div class="_m_tit">科技之巅<br />匠心独运</div>
      <div class="_cont">
        <div class="_list">
          <div class="_img">
            <img
              :src="$cdn + 'new_mobile/_conttet2_list1_1.png'"
              alt=""
              srcset=""
            />
          </div>
          <div class="_text">AES+ECC双重加密技术</div>
        </div>

        <div class="_list">
          <div class="_text">区块链加密算法和分布式切片存储的完美组合</div>
          <div class="_img">
            <img
              :src="$cdn + 'new_mobile/_conttet2_list2_1_1.png'"
              alt=""
              srcset=""
            />
          </div>
        </div>

        <div class="_list">
          <div class="_img">
            <img
              :src="$cdn + 'new_mobile/_conttet2_list3_1.png'"
              alt=""
              srcset=""
            />
          </div>
          <div class="_text">由链上智能合约自动执行传承</div>
        </div>
      </div>
    </div>

    <div class="_conttet3">
      <div class="_m_tit">致力守护<br />恒久留存</div>
      <div class="_m_desc">时刻守护您所拥有的一切</div>
      <div class="_cont">
        <div class="_img">
          <img
            :src="$cdn + 'new_mobile/_conttet3_list_1.png'"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>

    <div class="_conttet4">
      <div class="_m_tit1">自主专利 <br />让技术更添保障</div>
      <div class="_m_desc">二十二项专利技术</div>
      <div class="_cont">
        <div class="_img">
          <img
            :src="$cdn + 'new_mobile/_conttet4_list_1.png'"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>

    <div class="_conttet5">
      <div class="_m_tit1">信托守护 <br />让安全更添时效</div>
      <div class="_m_desc">境外信托基金承保</div>
      <div class="_cont">
        <div class="_img">
          <img
            :src="$cdn + 'new_mobile/_conttet5_list_1_m_1.png'"
            alt=""
            srcset=""
          />
        </div>
        <div class="_span">信托担保  保障您的数据安全 <br/> 增加容灾能力</div>
      <span class="_desc">
           信托是委托人基于对受托人的信任，将其财产或资产委托给受托人，由受托人按委托人的意愿以自己的名义，为受益人的利益或特定目的，进行管理和处分的行为<br/>
   为防止不可抗力灾害的发生，以钛箱将通过委托境外信托基金的方式，保障您的数据资产在不可抗力灾害发生时，还能实现正常存储与传承。确保数据资产不因其他因素而丢失、损坏，让安全存储更添时效
      </span>
      </div>
    </div>

    <div class="_conttet6">
      <div class="_m_tit">意料之外<br />传承之中</div>
      <div class="_m_desc">自购买日起，我们将为您提供多维度的网络安全服务</div>
      <div class="_cont">
        <div class="_img">
          <img :src="content3_video" alt="" srcset="">
          <!-- <img
            :src="$cdn + 'new_mobile/_conttet6_list_1.png'"
            alt=""
            srcset=""
          /> -->
        </div>
      </div>
      <div class="_m_text">
        上传到以钛箱的数据及文件，可以通过以钛箱传承给指定继承人。如果意外发生了，您的数字资产依旧可以传承下去，同时，传承数据永久保存，不受干扰，确保被传承人能精准接收。
      </div>
    </div>

    <div class="_conttet7">
      <div class="_m_tit">每行代码 <br />都有故事</div>
      <div class="_m_desc">
        每一行代码<br />都是二十余年的厚积薄发
      </div>
      <div class="_cont">
        <div class="_list">
          <div class="_img">
            <img
              :src="$cdn + 'new_mobile/_conttet7_list_1_1.png'"
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

    <div class="_conttet8">
      <div class="_home_title">
        <div class="_icon">
          <img :src="$img.new_download" alt="" srcset="" />
        </div>
        <div class="_text">下载您的专属保险箱</div>
        <div class="_icon">
          <img :src="$img.new_download" alt="" srcset="" />
        </div>
      </div>

      <div class="_home_cont">
        <div class="_img">
          <img
            :src="$cdn + 'new_mobile/_conttet8_list_1_1.png'"
            alt=""
            srcset=""
          />
        </div>
      </div>

      <div class="_btns _footer_btns">
        <div class="_btn1" @click="downloadApk()">
          <!-- <img :src="$cdn + 'pc/btns_andriod.png'" alt="" srcset="" /> -->
          <span class="_icon">
            <icon-svg icon-class="iconanzhuo"></icon-svg>
          </span>
          <span class="_text"> 安卓下载 </span>
        </div>
        <div class="_btn1" @click="downloadApk()">
          <span class="_icon">
            <icon-svg icon-class="iconios"></icon-svg>
          </span>
          <!-- <img :src="$cdn + 'pc/btns_ios.png'" alt="" srcset="" /> -->
          <span class="_text"> iOS下载 </span>
        </div>
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
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Ivideo from "@/components/video.vue";
export default {
  data(){
    return {
      dialogVisible: false,
    }
  },
  methods:{
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
    async downloadApk(){
      this.$store.commit('setIsDownload',new Date().getTime())
    },
    

  },
  computed:{
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
  components:{
    Ivideo
  }
};
</script>

<style lang='scss' scoped>
._new_m_home {
  //  min-height: 100vh;
  min-height: 100vh;
  // width: 1200px;
  margin: 0 auto;
  padding-top: 47px;
  ._m_logo {
    display: flex;
    justify-content: center;
    img {
      width: 198px;
      height: 30px;
    }
    padding-bottom: 15px;
  }
  ._m_tit {
    width: 100%;
    font-size: 70px;
    font-family: SourceHanSansCN-Medium, SourceHanSansCN;
    font-weight: 500;
    color: #070028;
    line-height: 78px;
    letter-spacing: 1px;
    text-align: center;
  }
  ._m_desc {
    text-align: center;
    margin: 0 auto;
    font-size: 18px;
    font-family: SourceHanSansCN-Normal, SourceHanSansCN;
    font-weight: 400;
    color: #4e4e4e;
    line-height: 28px;
  }

  ._m_btn {
    padding-top: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    ._btn {
      width: 304px;
      height: 64px;
      // background: linear-gradient(157deg, #D20078 0%, #012AA6 52%, #002AA6 100%, #002AA6 100%);
      // background: linear-gradient(132deg, #ff30a6 0%, #012AA6 178%, #002AA6 27%, #002AA6 100%);
      background: linear-gradient(
        91deg,
        #d20078 0%,
        #ce0276 59%,
        #002aa6 100%,
        #002aa6 100%
      );
      background: $active-color;
      border-radius: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      font-family: SourceHanSansCN-Medium, SourceHanSansCN;
      font-weight: 500;
      color: #ffffff;
      line-height: 30px;
    }
    ._view {
      padding-top: 4.8vw;
      width: 100%;
      /* height: 5.333vw; */
      font-size: 5.333vw;
      font-family: SourceHanSansCN-Regular, SourceHanSansCN;
      font-weight: 400;
      color: $active-color;
      line-height: 8vw;
      letter-spacing: 1px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 64px;
      ._icon {
        font-size: 34px;
        margin-left: 6px;
      }
    }
  }

  ._m_cont {
    img {
      width: 100%;
    }
  }

  ._conttet2 {
    ._cont {
      padding-top: 46px;
      ._list {
        width: 374px;
        // height: 176px;
        background: #f9f9f9;
        border-radius: 12px;

        display: flex;
        margin: 0 auto;
        margin-bottom: 24px;
        ._text {
          font-size: 24px;
          font-family: SourceHanSansCN-Medium, SourceHanSansCN;
          font-weight: 500;
          color: #000000;
          line-height: 34px;
          text-align: left;
        }
        ._img {
          img {
          }
        }

        &:nth-child(1) {
          ._text {
            padding-top: 23px;
            padding-right: 20px;
          }
          ._img {
            padding: 23px 30px 23px 19px;
            img {
              height: 130px;
            }
          }
        }
        &:nth-child(2) {
          ._text {
            padding-top: 27px;
            padding-left: 26px;
          }
          ._img {
            padding: 27px 24px 28px 19px;
            img {
              height: 121px;
            }
          }
        }
        &:nth-child(3) {
          ._text {
            padding-top: 25px;
            padding-right: 30px;
          }
          ._img {
            padding: 25px 38px 24px 32px;
            img {
              height: 127px;
            }
          }
        }
      }
    }
  }

  ._conttet3 {
    padding-top: 70px;
    ._m_desc {
      padding-top: 23px;
      width: 264px;
      padding-bottom: 50px;
    }
    ._cont {
      ._img {
        width: 100%;
        img {
          width: inherit;
          height: 723px;
        }
      }
    }
  }

  ._conttet4 {
    padding-top: 54px;
    ._m_desc {
      padding-top: 19px;
     
      padding-bottom: 35px;
      text-align: left;
width: 300px;
    }
    ._m_tit1 {
      font-size: 42px;
      font-family: SourceHanSansCN-Medium, SourceHanSansCN;
      font-weight: 500;
      color: #000000;
      line-height: 48px;
      text-align: left;
      width: 300px;
      margin: 0 auto;
    }
    ._cont {
      ._img {
        width: 100%;
        img {
          width: inherit;
        }
      }
    }
  }

  ._conttet5 {
    padding-top: 45px;
    ._m_tit1 {
      font-size: 42px;
      font-family: SourceHanSansCN-Medium, SourceHanSansCN;
      font-weight: 500;
      color: #000000;
      line-height: 48px;
      text-align: left;
      width: 300px;
      margin: 0 auto;
    }
    ._m_desc {
      font-size: 19px;
      font-family: SourceHanSansCN-Regular, SourceHanSansCN;
      font-weight: 400;
      color: #7e7e7e;
      line-height: 29px;
      padding-top: 19px;
      padding-bottom: 34px; text-align: left;
width: 300px;
    }
    ._cont {
      padding-bottom: 96px;
      ._img {
        width: 100%;
        img {
          width: inherit;
        }
      }
      ._span {
        font-size: 20px;
font-family: SourceHanSansCN-Medium, SourceHanSansCN;
font-weight: 500;
color: #000000;
line-height: 34px;
        padding: 18px 0 36px 28px;
        text-align: left;

      }
      ._link {
        font-size: 18px;
        font-family: SourceHanSansCN-Normal, SourceHanSansCN;
        font-weight: 400;
        color: $active-color;
        line-height: 27px;
        ._icon{
          margin-left: 6px;
        }
      }
      ._desc{
        font-size: 18px;
font-family: SourceHanSansCN-Regular, SourceHanSansCN;
font-weight: 400;
color: #000000;
line-height: 36px;
display: inline-block;
width: 355px;
text-align: left;
margin: 0 auto;
      }
    }
  }

  ._conttet6 {
    ._m_desc {
      padding-top: 25px;
      width: 264px;
      margin: 0 auto;
      text-align: center;
      padding-bottom: 25px;
    }
    ._cont {
      ._img {
        img {
          width: 100%;
        }
      }
    }

    ._m_text {
      padding: 15px 29px 97px 29px;
      font-size: 18px;
      font-family: SourceHanSansCN-Regular, SourceHanSansCN;
      font-weight: 400;
      color: #000000;
      line-height: 36px;
      width: 355px;
      margin: 0 auto;
      text-align: left;
    }
  }

  ._conttet7 {
    ._m_desc {
      padding-top: 28px;
      width: 264px;
      margin: 0 auto;
      text-align: center;
      padding-bottom: 28px;
    }
    ._cont {
      ._list {
        width: 370px;
        margin: 0 auto;
        // height: 221px;
        background: #000000;
        border-radius: 23px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 16px;
        ._img {
        }
        &:nth-child(1) {
          ._img {
            padding: 56px 0;
            img {
              height: 110px;
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
            padding: 33px 0;
            text-align: left;
          }
          ._img {
            img {
              height: 324px;
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

  ._conttet8 {
    padding-top: 63px;
    ._home_title {
      width: 70%;
      margin: 0 auto;
      line-height: 28px;
      display: flex;
      padding-bottom: 66px;
      ._text {
        font-size: 24px;
font-family: SourceHanSansCN-Medium, SourceHanSansCN;
font-weight: 500;
color: #000000;
line-height: 28px;    padding: 0 22px;
      }
      ._icon {
        position: relative;
        top: 9px;
        width: 40px;
        img {
          width: inherit;
        }
      }
    }
    ._img {
      width: 302px;
      margin: 0 auto;
      padding-bottom: 31px;
      img {
        width: inherit;
      }
    }
    ._footer_btns {
      padding-bottom: 39px;
      ._btn1 {
        border-radius: 10px;
        img {
          width: 16px;
        }
      }
    }
  }

  ._btns {
    display: flex;
    justify-content: space-evenly;
    ._btn1 {
      width: 183px;
      height: 60px;
          background: linear-gradient(
146deg
, #d20078 0%, #012aa6 136%, #002aa6 100%, #002aa6 100%);
background: $active-color;
      border-radius: 10px;
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
        width: 24px;
        height: 24px;
        margin-right: 4px;
      }
    }

    ._active_color {
      color: #666;
      border-color: #666;
      span {
        color: #666;
      }
    }
  }
}
</style>
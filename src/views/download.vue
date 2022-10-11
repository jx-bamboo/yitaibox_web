<template>
  <div class="_download _hideScrollbar">
    <div class="_header">
      <img :src="$cdn+'download/header_logo.png'" alt="" srcset="" />
    </div>
    <div class="_content">
      <div class="_title">
        <img :src="$cdn+'download/content_title.png'" alt="" srcset="" />
      </div>
      <div class="_text">
        <img :src="$cdn+'download/content_text.png'" alt="" srcset="" />
      </div>
      <div class="_invite">
        <span class="_tit">邀请码：</span>
        <span class="_txt">{{ invite }}</span>
        <span class="_icon" @click="$global.copyFn($event, invite)">
          <img :src="$img.copy_icon" alt="" srcset="" />
        </span>
      </div>
      <div class="_btns">
        <div class="_btn">
          <span class="_icon">
            <icon-svg icon-class=""></icon-svg>
          </span>
          <span class="_btn_text">
            <!-- iPone下载  -->
          </span>
        </div>
        <div class="_btn" @click="downloadApk()">
          <span class="_icon">
            <icon-svg icon-class=""></icon-svg>
          </span>
          <span class="_btn_text">
            <!-- Android下载  -->
          </span>
        </div>
      </div>
    </div>

    <div class="_list">
      <div class="_flex" v-for="(item, index) in List" :key="index">
        <div v-if="item.type == '0'" class="_flex_list">
          <div class="_left _left_img"></div>
          <div class="_flex_cont">
            <div class="_flex_title">
              <img :src="getimgsrc(item.title)" alt="" srcset="" />
            </div>
            <div class="_flex_text">{{ item.text }}</div>
          </div>
        </div>

        <div v-else class="_flex_list">
          <div class="_flex_cont">
            <div class="_flex_title">
              <img :src="getimgsrc(item.title)" alt="" srcset="" />
            </div>
            <div class="_flex_text">{{ item.text }}</div>
          </div>
          <div class="_left_img"></div>
        </div>
      </div>
    </div>

    <div class="_footer_logo">
      <img :src="$cdn+'download/footer_logo.png'" alt="" srcset="" />
    </div>
  </div>
</template>


<script>
import {getQueryString } from "@/utils/mUtils.js"

export default {
  data() {
    return {
      List: [
        {
          title: "/list1_title.png",
          icon: "/download/list1.png",
          text: "区块链去中心化特性，系统人员也无法进入查看",
          type: "0",
        },
        {
          title: "/list2_title.png",
          icon: "/download/list2.png",
          text: "文件都经过区块链私钥加密存储解密查看，无迹可寻",
          type: "1",
        },
        {
          title: "/list3_title.png",
          icon: "/download/list3.png",
          text: "无需记录的安全密码，一次上链永久存储",
          type: "0",
        },
        {
          title: "/list4_title.png",
          icon: "/download/list4.png",
          text: "无法盗取的点对点传承空间，数据转移无忧",
          type: "1",
        },
      ],
      invite: "951821",
    };
  },
  methods: {
    getimgsrc(url) {
      return this.$cdn+'/download'+url
      // return require("@/assets" + url);
    },
    getinvite() {
      // console.log()
      this.invite=getQueryString('code')?getQueryString('code'):'951821'
    },
    async downloadApk(){
      this.$store.commit('setIsDownload',new Date().getTime())
    },
  
  },
  computed:{
    isWeixin(){
        return this.$global.browserTypoe('weixin')
    }
  },
  created(){
    console.log(this)
this.getinvite()
setLazyFactory()
this.getBaseData()
  }
};
</script>

<style lang='scss' scoped>
._download {
  background: #020334;
  height:initial;
  ._header {
    padding-top: 82.25px;
    display: flex;
    justify-content: center;

    img {
      width: 147px;
      height: 55.125px;
    }
  }
  ._content {
    background-image: url($cdn+"/download/bg.png");
    height: 592.375px;
    background-size: 100% 100%;
    padding-top: 35px;
    background-position-y: center;
    position: relative;
    margin-bottom: 43.75px;
    ._title {
      padding-bottom: 8.75px;
      img {
        height: 41.125px;
      }
    }
    ._text {
      img {
        height: 20.125px;
      }
    }
    ._btns {
      display: flex;
      justify-content: space-between;
      position: absolute;
      // bottom: 15%;
      top: calc(100vh - 137.375px - 75.25px);
      width: 100%;
      ._btn {
        height: 75.25px;
        width: 196px;
        background-size: 100% 100%;
        &:first-child {
          background-image: url($cdn+"/download/btn1.png");
        }
        &:last-child {
          background-image: url($cdn+"/download/btn2.png");
        }
      }
    }
    ._invite {
      width: 254.625px;
      height: 47.25px;
      background: #ffffff;
      border-radius: 14px;
      position: absolute;
      // bottom: calc(26% + 62px);
      top: calc(100vh - 137.375px - 75.25px - 101.5px);
      left: calc((100% - 254.625px) / 2);
      display: flex;
      align-items: center;
      justify-content: center;
      ._txt,
      ._tit {
        font-size: 24.5px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #000000;
      }
      ._icon {
        margin-left: 15.75px;
        img {
          width: 21px;
          height: 21px;
        }
      }
    }
  }
  ._list {
    padding-bottom: 47.25px;
    ._flex {
      &:nth-child(1) {
        ._flex_list {
          ._left_img {
            height: 122.5px;
            width: 134px;
            min-height: 122.5px;
            min-width: 134px;
            background-image: url($cdn+"/download/list1.png");
            margin-right: 16.25px;
            margin-bottom: 26.25px;
          }
        }
        ._flex_cont {
          padding-top: 22.75px;
        }
      }
      &:nth-child(2) {
        ._flex_list {
          ._left_img {
            height: 137.375px;
            width: 122.5px;
            min-height: 137.375px;
            min-width: 122.5px;
            background-image: url($cdn+"/download/list2.png");
            margin-left: 30.625px;
            margin-bottom: 14px;
          }
        }
        ._flex_cont {
          padding-top: 30.625px;
        }
      }
      &:nth-child(3) {
        ._flex_list {
          ._left_img {
            height: 104.125px;
            width: 134.75px;
            min-height: 104.125px;
            min-width: 134.75px;
            background-image: url($cdn+"/download/list3.png");
            margin-right: 32.375px;
            margin-bottom: 29.75px;
          }
        }
        ._flex_cont {
          padding-top: 23.625px;
        }
      }
      &:nth-child(4) {
        ._flex_list {
          ._left_img {
            height: 176.75px;
            width: 207.375px;
            min-height: 176.75px;
            min-width: 207.375px;
            background-image: url($cdn+"/download/list4.png");
          }
        }
        ._flex_cont {
          padding-top: 8.75px;
          ._flex_text {
            position: absolute;
            width: 167.125;
          }
        }
      }
    }
    ._flex_list {
      display: flex;
      padding: 0 21.875px;
      justify-content: space-between;
    }
    ._flex_cont {
      ._flex_title {
        text-align: left;
        padding-bottom: 10.5px;
        img {
          height: 21px;
        }
      }
      ._flex_text {
        text-align: left;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 19.25px;
      }
    }
    ._left_img {
      background-size: 100% 100%;
    }
  }

  ._footer_logo {
    padding-bottom: 40.25px;
    img {
      height: 41.125px;
    }
  }
}
</style>
<template>
  <div class="_pc_video">
    <!-- 
       webkit-playsinline  小窗
       preload: （预加载）iPhone支持，Android不一定支持;
　   poster: （封面图片）iPhone支持，Android不一定支持;
　　autoplay: （自动播放）iPhone中的Safari不支持，webview可能被开启。Android不一定支持；
　　loop: （循环播放）iPhone支持，Android不一定支持;
　　controls: （控制条）iPhone支持，大师需要开始播放了才显示，Android基本支持;
　　width: （宽度）;
　　height: （高度）;

x-webkit-airplay="allow"  视频支持ios的AirPlay功能
     -->
    <video
      :src="videoUrl"
      :controls="videoOptions.controls"
      class="video-js vjs-big-play-centered vjs-fluid"
      webkit-playsinline="true"
      playsinline="true"
      x-webkit-airplay="allow"
      x5-playsinline
      style="width: 100%"
      @play="onPlayerPlay"
      @pause="onPlayerPause"
      @seeking="seeking"
      loop="loop" 
      ref="video"
    ></video>
    <div class="_pc_icon_play" v-if="isShowPlay" @click="$refs.video.play();isShowPlay=false">
      <img :src="$cdn+'/pc/content1_left_play.png'" alt="" srcset="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "showVideo",
  props: {
    videoUrl: String,
  },
  data() {
    return {
      player: null,
      playTime: "",
      seekTime: "",
      current: "",
      isShowPlay:true
    };
  },
  beforeRouteLeave() {
    //
  },
  computed: {
    videoOptions() {
      return {
        controls: true,
        src: this.videoUrl,
      };
    },
  },
  mounted() {
    this.initVideo();
  },
  methods: {
    initVideo() {
      //原生初始化视频方法
      let myVideo = this.$refs.video;
      // myVideo.play();
      console.log(myVideo);
      //ontimeupdate
      myVideo.ontimeupdate = function () {
        myFunction();
      };
      let _this = this;

      function myFunction() {
        let playTime = myVideo.currentTime;
        setTimeout(function () {
          localStorage.setItem("cacheTime", playTime);
        }, 500);
        let time = localStorage.getItem("cacheTime");
        // 当前播放位置发生变化时触发。
        if (playTime - Number(time) > 2) {
          myVideo.currentTime = Number(time);
        } else {
        }
      }
    },

    // 播放回调
    onPlayerPlay(player) {
      // this.globalSetting = true
      console.log("player play!", player);
      // document.getElementsByClassName("vjs-control-bar").style.display = "block";
      // document.getElementsByClassName("vjs-control-bar").style.display = "block";
    },

    // 暂停回调
    onPlayerPause(player) {
      // this.globalSetting.controls = false;
      // console.log("player pause!", player);
      // var video = document.getElementById("video");
      // video.controls=false;
      // document.getElementsByClassName("vjs-control-bar").style.display = "none";
    },
    seeking() {
      console.log("快进");
    },
  },

  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>


<style>
._pc_video {
  position: relative;
}
._pc_icon_play {
  width: 84px;
  height: 84px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: calc((100% - 84px) / 2);
  left: calc((100% - 84px) / 2);
}
._pc_icon_play img {
  width: 84px;
  height: 84px;
}
</style>
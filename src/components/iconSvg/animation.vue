<template>
  <div class="_ba_animation">
    <div class="el-message-box">
      <div class="el-message-box__header">
        <div class="el-message-box__title">
          <span>{{ title }}</span>
        </div>
      </div>
      <div class="el-message-box__content">
        <div class="el-message-box__container">
          <!---->
          <div class="el-message-box__message">
            <p>
              <strong>{{ text }}</strong>
            </p>
          </div>
        </div>
      </div>

      <div class="_animation" id="lottie"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    time: Number,
    title: String,
    text: String,
    params:{}
  },
  methods: {
    closeEl() {
      this.$destroy();
      try {
        document.body.removeChild(this.$el);
      } catch (error) {}
    },
  },
  created() {
    this.title ? "" : (this.title = "操作提示");
    this.text ? "" : (this.text = "表操作进行中");
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.$global.animationJSON);
      console.log(this.type);
      console.log(this.$global.animationJSON[this.type]);
      let animationData;
      animationData = this.$global.animationJSON[
        this.type ? this.type : "save"
      ];
      console.log(animationData);
      var params = {
        container: document.getElementById("lottie"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      };
      console.log({...params,...this.params})
      params={...params,...this.params}
      console.log(params)
      var anim;
      anim = lottie.loadAnimation(params);
      console.log(anim);
      // 1s后消失
      setTimeout(() => {
        this.closeEl();
      }, this.time || 10000);
    });
  },
};
</script>

<style lang="scss" scoped>
._ba_animation {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2018;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(76, 76, 76, 0.3);
  .el-message-box {
    padding-bottom: 60px;
    .el-message-box__message {
      min-height: unset;
    }
  }
}
._animation {
  width: 10vw;
  margin: auto;
}
</style>

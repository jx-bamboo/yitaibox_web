<template>
  <div class="_new_header">
      <div class="_left">
          <img :src="$img.new_logo" alt="" srcset="">
      </div>
      <div class="_right" v-show="isShowDownload">
          <div class="_btn" @click="changeSlide()">立即下载</div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isShowDownload:false
        }
    },
    methods:{
        changeSlide(){
            this.$store.commit('setisSlideToLoop', new Date().getTime())
        }
    },
computed:{
    defaultIndex(){
        return this.$store.getters.getdefaultIndex
    }
},
watch:{
    defaultIndex(val){
    console.log(val)
    this.isShowDownload=(val==0||val==7)?false:true
    }
}
}
</script>

<style lang='scss' scoped>
._new_header{
    width: 100%;
    display: flex;
    height: 60px;
    // background: #FFFFFF;
    justify-content: space-between;
    align-items: center;
    ._left{
        padding: 15px 30px;
        img{
            height: 30px;
        }
    }
    ._right{
        padding-right: 40px;
._btn{
    width: 150px;
height: 39px;
background: #ED8F26;
border-radius: 8px;
line-height: 39px;
color: #fff;
cursor: pointer;
}
    }
}

</style>
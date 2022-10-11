<template>
  <div class="_mobile_header">
      <div class="_left">
          <img :src="$img.logo" alt="" srcset="">
      </div>
     
  </div>
</template>

<script>
export default {
data(){
    return{

    }
}
}
</script>

<style lang='scss' scoped>
._mobile_header{
    display: flex;
    justify-content: left;
    height: 60px;
    align-items: center;
    ._left{
        padding-left: 16px;
        img{
        height: 38px; 
        }
    }
}
</style>
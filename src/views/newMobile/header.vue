<template>
  <div class="_nwe_mobile_header mobile_header">
      <div class="_left">
          <img :src="$img.new_logo" alt="" srcset="">
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
._nwe_mobile_header{
    display: flex;
    justify-content: left;
    height: 60px;
    align-items: center;
    ._left{
        padding-left: 16px;
        img{
        height: 28px; 
        }
    }
}
</style>
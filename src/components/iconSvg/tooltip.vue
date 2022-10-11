<template>
  <el-tooltip placement="top" effect="dark">
    <div slot="content">
      <span v-if="typeof content == 'string'">content</span>
      <div v-else>
        <span class="_text" v-for="(item, index) in content" :key="index"
          >{{ item }}<br
        /></span>
      </div>
    </div>
    <span class="_icon">
      <icon-svg icon-class="icon-bangzhu" />
    </span>
  </el-tooltip>
</template>

<script>
export default {
  props: {
    content: {
      type: Array || String,
      required: true,
    },
  },
  data() {
    return {};
  },
  created() {
    console.log();
  },
};
</script>
<style lang="scss" scoped>
._icon {
  color: #e8e8e8;
  cursor: pointer;
  font-size: 22px;
}
</style>

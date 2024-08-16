/*
* @Author: aFei
* @Date: 2024-08-05 13:45:00
*/
/*
* @LastEditors: aFei
* @LastEditTime: 2024-08-16 15:23:57
*/
<template>
  <div class="demo">
    <el-scrollbar>
      <vueDragComponentPlus ref="comRef"></vueDragComponentPlus>
    </el-scrollbar>
  </div>
</template>
<script setup>
import vueDragComponentPlus from "~/lib/index.vue";
const comRef = ref(null);
nextTick(() => {
  comRef.value.init(1200, 800);
});
</script>
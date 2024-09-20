/*
* @Author: aFei
* @Date: 2024-09-19 15:47:53
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2024-09-20 11:42:42
*/
<template>
  <div class="">
    <p v-for="item in 100">123</p>
  </div>
</template>
<script setup>
const props = defineProps({
  obj: {
    type: Object,
    default: () => {
      return {};
    }
  },
});
watch(
  () => props.obj,
  () => {
    console.log(456, 'reset');
  }
);
console.log(123, 'init');
</script>
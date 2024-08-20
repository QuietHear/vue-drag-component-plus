/*
* @Author: aFei
* @Date: 2024-08-05 13:45:00
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2024-08-20 11:16:01
*/
<template>
  <div class="demo">
    <el-scrollbar>
      <div class="con-box">
        <div class="con">
          <el-button @click="addOne" type="primary">添加</el-button>
          <el-button @click="getData">查看当前数据</el-button>
          <el-switch v-model="seeModel" active-text="仅查看" inactive-text="正常" />
          <el-switch v-model="noEditModel" active-text="无菜单" inactive-text="正常" />
        </div>
        <div class="box">
          <vueDragComponentPlus ref="comRef" :seeModel :noEditModel></vueDragComponentPlus>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>
<script setup>
import vueDragComponentPlus from "~/lib/index.vue";
const comRef = ref(null);
const seeModel = ref(false);
const noEditModel = ref(false);
const addOne = () => {
  comRef.value.addItem({
    width: 100,
    height: 100
  });
};
const getData = () => {
  console.log(comRef.value.getData());
};
</script>
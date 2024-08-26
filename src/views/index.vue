/*
* @Author: aFei
* @Date: 2024-08-05 13:45:00
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2024-08-26 10:31:50
*/
<template>
  <div class="demo">
    <el-scrollbar>
      <div class="con-box">
        <div class="con">
          <template v-if="isGroup">
            <em>已选择 {{ groupNum }} 个组件</em>
            <el-button @click="addGroup" type="primary">合并</el-button>
            <el-button @click="closeGroup">取消</el-button>
          </template>
          <template v-else>
            <el-button @click="addOne" type="primary">添加</el-button>
            <el-button @click="getData">查看当前数据</el-button>
            <el-switch v-model="seeModel" active-text="仅查看" inactive-text="正常" />
            <el-switch v-model="noEditModel" active-text="无菜单" inactive-text="正常" />
          </template>
        </div>
        <div class="box">
          <vueDragComponentPlus ref="comRef" @showGroup="chengGroup" @updateChecked="num => groupNum = num" :seeModel
            :noEditModel>
          </vueDragComponentPlus>
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
const isGroup = ref(false);
const groupNum = ref(0);
const chengGroup = (type) => {
  isGroup.value = type;
  groupNum.value = 1;
};
const addGroup = () => {
  comRef.value.addGroup();
};
const closeGroup = () => {
  comRef.value.closeGroup();
};
</script>
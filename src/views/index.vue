/*
* @Author: aFei
* @Date: 2024-08-05 13:45:00
*/
/*
* @LastEditors: aFei
* @LastEditTime: 2024-11-21 15:37:20
*/
<template>
  <div class="demo">
    <el-scrollbar>
      <div class="con-box">
        <div class="group-con" v-if="isGroup">
          <em>已选择 {{ groupNum }} 个组件</em>
          <el-button @click="addGroup" type="primary">合并</el-button>
          <el-button @click="closeGroup">取消</el-button>
        </div>
        <template v-else>
          <div class="con">
            <template v-if="!seeModel">
              <el-button @click="addOne" type="primary">添加</el-button>
              <el-input-number v-model="ySpace" :min="0" controls-position="right" title="纵向间距" />
              <el-button @click="initTest" type="primary" plain>init</el-button>
            </template>
            <el-button @click="getData">查看当前数据</el-button>
          </div>
          <div class="con">
            <el-switch v-model="seeModel" active-text="仅查看" inactive-text="正常" />
            <em>基准宽度：{{ baseWidth ? (baseWidth + 'px') : 'null' }}；</em>
            <em>当前缩放：{{ nowScle }}</em>
          </div>
        </template>
        <div class="box">
          <vueDragComponentPlus ref="comRef" :ySpace="ySpace" @showGroup="chengGroup"
            @updateChecked="num => groupNum = num" @showTitPop="showTitPop" @baseWidthInit="num => baseWidth = num"
            @changeScle="num => nowScle = num" :seeModel="seeModel">
            <template #item="{ data }">
              <test v-if="data.x === 0 && data.y === 0" />
            </template>
          </vueDragComponentPlus>
        </div>
      </div>
      <el-dialog v-model="pop" title="设置组合标题" width="420px">
        <!-- W3C标准 当form中只有一个输入框时，回车就是提交 -->
        <el-form :model="popMsg" @submit.native.prevent>
          <el-form-item prop="title" label="标题">
            <el-input v-model.trim="popMsg.title" placeholder="请输入" />
          </el-form-item>
        </el-form>
        <template #footer>
          <el-button @click="pop = false">取消</el-button>
          <el-button type="primary" @click="popSubmit">
            确认
          </el-button>
        </template>
      </el-dialog>
    </el-scrollbar>
  </div>
</template>
<script setup>
import vueDragComponentPlus from "~/lib/index.vue";
import test from "./components/test.vue";
const comRef = ref(null);
const ySpace = ref(12);
const seeModel = ref(false);
const baseWidth = ref(null);
const nowScle = ref(1);
const addOne = () => {
  comRef.value.addItem({
    width: 100,
    height: 100,
    detail: {
      s: 1
    }
  });
};
const initTest = () => {
  comRef.value.init([]);
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
  const res = comRef.value.addGroup();
  console.log(res, 'res');
};
const closeGroup = () => {
  comRef.value.closeGroup();
};
const pop = ref(false);
const popMsg = ref({
  title: ''
});
const showTitPop = (tit, id) => {
  popMsg.value.title = tit;
  popMsg.value.id = id;
  pop.value = true;
};
const popSubmit = () => {
  comRef.value.changeGroupTit(popMsg.value.title, popMsg.value.id);
  pop.value = false;
};
</script>
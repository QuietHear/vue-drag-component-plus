/*
* @Author: aFei
* @Date: 2024-08-05 13:45:00
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2025-07-25 14:13:59
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
          <div class="con" @keydown.enter.prevent>
            <template v-if="!seeModel">
              <el-button @click="addOne" type="primary">添加</el-button>
              <el-input-number v-model="xSpace" :min="0" controls-position="right" title="纵向间距" />
              <el-input-number v-model="ySpace" :min="0" controls-position="right" title="横向间距" />
              <el-button @click="initTest" type="primary" plain>init</el-button>
              <el-button @click="resetData" type="danger">重置数据</el-button>
            </template>
            <el-button @click="getData">查看当前数据</el-button>
          </div>
          <div class="con" @keydown.enter.prevent>
            <el-switch v-model="seeModel" active-text="仅查看" inactive-text="正常" />
            <em>基准宽度：{{ baseWidth ? (baseWidth + 'px') : 'null' }}；</em>
            <em>当前缩放：{{ nowScale }}；</em>
            <em>当前css缩放：{{ nowCssScale }}</em>
          </div>
        </template>
        <div class="box">
          <vueDragComponentPlus ref="comRef" :xSpace="xSpace" :ySpace="ySpace" @showGroup="chengGroup"
            @updateChecked="num => groupNum = num" @showTitPop="showTitPop" @baseWidthInit="num => baseWidth = num"
            @changeScale="num => nowScale = num" @changeCssScale="num => nowCssScale = num" @domStart="domStart"
            @domReady="domReady" :seeModel="seeModel" showAuxiliary dragInBox>
            <template #item="{ data }">
              <test :obj="data" v-if="data.x === 0 && data.y === 0" />
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
const xSpace = ref(10);
const ySpace = ref(null);
const seeModel = ref(false);
const baseWidth = ref(null);
const nowScale = ref(1);
const nowCssScale = ref(1);
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
  comRef.value.init([
    {
      width: 100,
      height: 100,
      detail: {
        s: 1
      },
      id: "1732599286368",
      y: 0,
      x: 200
    },
    {
      id: "1732599290360G",
      isGroup: true,
      groupTit: "",
      width: 200,
      height: 200,
      groupData: [
        {
          detail: {
            s: 1
          },
          id: "1732599285864",
          x: 0,
          y: 0,
          inGroupId: "1732599290360G",
          groupW: 0.5,
          groupH: 0.5,
          groupX: 0,
          groupY: 0,
          isObstacle: false,
          width: 100,
          height: 100
        },
        {
          detail: {
            s: 1
          },
          id: "1732599286144",
          y: 0,
          x: 100,
          inGroupId: "1732599290360G",
          groupW: 0.5,
          groupH: 0.5,
          groupX: 0.5,
          groupY: 0,
          isObstacle: false,
          width: 100,
          height: 100
        },
        {
          detail: {
            s: 1
          },
          id: "1732599292840",
          inGroupId: "1732599290360G",
          groupW: 0.5,
          groupH: 0.5,
          groupX: 0,
          groupY: 0.5,
          isObstacle: false,
          x: 0,
          y: 100,
          width: 100,
          height: 100
        }
      ],
      y: 0,
      x: 300
    },
    {
      width: 100,
      height: 100,
      detail: {
        s: 1
      },
      id: "1732599296656",
      y: 0,
      x: 0
    },
    {
      width: 100,
      height: 100,
      detail: {
        s: 1
      },
      id: "1732599297921",
      y: 214,
      x: 302
    },
    {
      width: 100,
      height: 100,
      detail: {
        s: 1
      },
      id: "1732599303688",
      y: 0,
      x: 581
    }
  ], 1000);
};
const domStart = () => {
  console.log('开始');
};
const domReady = () => {
  console.log('结束');
};
const resetData = () => {
  comRef.value.resetData();
};
const getData = async () => {
  const res = await comRef.value.getData();
  console.log(res);
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
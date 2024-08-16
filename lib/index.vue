/*
* @Author: aFei
* @Date: 2024-08-05 13:45:00
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2024-08-16 14:29:14
*/
<template>
  <div class="vue-drag-component-plus" :style="{ width: pageWidth + 'px', height: pageHeight + 'px' }">
    <div class="content-box" ref="boxRef">
      <div
        :class="['com-item', item.static === true || item.dragable === false ? '' : 'can-drag', item.move ? 'is-move' : '']"
        :style="{
          width: item.width + 'px',
          height: item.height + 'px',
          top: item.y + 'px',
          left: item.x + 'px'
        }" v-for="(item, index) in comData" :key="index"
        @mousedown.prevent="item.static === true || item.dragable === false ? null : dragStart($event, index)">
        <div class="com-item-content">
          <slot name="item" :$index="index" :data="item">
            {{ index }}
          </slot>
          <div class="setting-box" :style="{ display: item.showPop ? 'flex' : 'none' }" @mousedown.prevent.stop="null">
            <Icon :iconObj="settingIcon" @click.prevent.stop="openSettingPop(item)" />
            <template v-if="item.showPop">
              <div class="setting-box-pop">
                <slot name="setPopNormal" :$index="index" :data="item">
                  <div class="setting-box-pop-item" @click="comData.splice(index, 1);">删除</div>
                </slot>
              </div>
            </template>
          </div>
        </div>
        <template v-if="item.static !== true && item.resizable !== false">
          <div class="resize-line top-left" @mousedown.prevent.stop="resizeStart($event, item, 'top-left')"></div>
          <div class="resize-line top" @mousedown.prevent.stop="resizeStart($event, item, 'top')"></div>
          <div class="resize-line top-right" @mousedown.prevent.stop="resizeStart($event, item, 'top-right')"></div>
          <div class="resize-line left" @mousedown.prevent.stop="resizeStart($event, item, 'left')"></div>
          <div class="resize-line right" @mousedown.prevent.stop="resizeStart($event, item, 'right')"></div>
          <div class="resize-line bottom-left" @mousedown.prevent.stop="resizeStart($event, item, 'bottom-left')"></div>
          <div class="resize-line bottom" @mousedown.prevent.stop="resizeStart($event, item, 'bottom')"></div>
          <div class="resize-line bottom-right" @mousedown.prevent.stop="resizeStart($event, item, 'bottom-right')">
          </div>
        </template>
      </div>
      <div class="height-bg" :style="{ height: heightBg + 'px' }"></div>
      <div class="com-empty" v-if="comData.length === 0">
        <slot name="empty">
          暂无数据
        </slot>
      </div>
    </div>
  </div>
</template>
<script setup>
import Icon from "./components/icon.vue";
const props = defineProps({
  // 组件项最小宽度
  itemMinWidth: {
    type: Number,
    default: 15,
    validator(value, props) {
      return value >= 15;
    }
  },
  // 组件项最小高度
  itemMinHeight: {
    type: Number,
    default: 15,
    validator(value, props) {
      return value >= 15;
    }
  },
  // 设置图标
  settingIcon: {
    type: Object,
    default: () => {
      return {
        icon: "设置"
      };
    },
  }
});
// 深拷贝
const deepCopy = (obj) => {
  let result = obj instanceof Array ? [] : {};
  for (let key in obj) {
    result[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
  }
  return result;
};
// 画布宽度
const pageWidth = ref(0);
// 画布高度
const pageHeight = ref(0);
// 画布容器ref
const boxRef = ref(null);
// 占位高度
const heightBg = ref(0);
// 组件数据
const comData = ref([
  {
    width: 100,
    height: 100,
    x: 300,
    y: 300
  },
  {
    width: 100,
    height: 100,
    x: 390,
    y: 50,
    static: true
  },
  {
    width: 100,
    height: 100,
    x: 50,
    y: 210,
    static: true
  },
  {
    width: 100,
    height: 100,
    x: 210,
    y: 600,
    static: true
  },
  {
    width: 100,
    height: 100,
    x: 700,
    y: 390,
    static: true
  },
  {
    width: 100,
    height: 100,
    x: 600,
    y: 290,
    static: true
  }
]);
// 当前拖拽目标
let dragSrc = null;
// 横向初始差值
let differX = null;
// 纵向初始差值
let differY = null;
// 开始拖拽
const dragStart = (e, index) => {
  closeSettingPop();
  dragSrc = index;
  comData.value[dragSrc].move = true;
  differX = e.clientX - e.target.offsetParent.offsetLeft;
  differY = e.clientY - e.target.offsetParent.offsetTop;
  window.addEventListener('mousemove', dragIng);
  window.addEventListener('mouseup', dragEnd);
};
// 拖拽中
const dragIng = (e) => {
  const x = e.clientX - differX;
  const y = e.clientY - differY;
  const resultX = x <= dealDragMax('left') ? dealDragMax('left') : x >= dealDragMax('right') ? dealDragMax('right') : x;
  const resultY = y <= dealDragMax('top') ? dealDragMax('top') : y >= dealDragMax('bottom') ? dealDragMax('bottom') : y;
  const obstacleArr = comData.value.filter(item => item.static === true)
    .filter(item => ((item.x === resultX && item.width === comData.value[dragSrc].width) || (item.x > resultX && item.x < (resultX + comData.value[dragSrc].width)) || ((item.x + item.width) > resultX && (item.x + item.width) < (resultX + comData.value[dragSrc].width))))
    .filter(item => ((item.y === resultY && item.height === comData.value[dragSrc].height) || (item.y > resultY && item.y < (resultY + comData.value[dragSrc].height)) || ((item.y + item.height) > resultY && (item.y + item.height) < (resultY + comData.value[dragSrc].height))));
  if (obstacleArr.length === 0) {
    comData.value[dragSrc].x = resultX;
    comData.value[dragSrc].y = resultY;
  } else {
    // 主左右移动
    const obstacleArrX = comData.value.filter(item => item.static === true)
      .filter(item => ((item.x === resultX && item.width === comData.value[dragSrc].width) || (item.x > resultX && item.x < (resultX + comData.value[dragSrc].width)) || ((item.x + item.width) > resultX && (item.x + item.width) < (resultX + comData.value[dragSrc].width))))
      .filter(item => ((item.y === comData.value[dragSrc].y && item.height === comData.value[dragSrc].height) || (item.y > comData.value[dragSrc].y && item.y < (comData.value[dragSrc].y + comData.value[dragSrc].height)) || ((item.y + item.height) > comData.value[dragSrc].y && (item.y + item.height) < (comData.value[dragSrc].y + comData.value[dragSrc].height))));
    if (obstacleArrX.length === 0) {
      comData.value[dragSrc].x = resultX;
    }
    // 主上下移动
    const obstacleArrY = comData.value.filter(item => item.static === true)
      .filter(item => ((item.x === comData.value[dragSrc].x && item.width === comData.value[dragSrc].width) || (item.x > comData.value[dragSrc].x && item.x < (comData.value[dragSrc].x + comData.value[dragSrc].width)) || ((item.x + item.width) > comData.value[dragSrc].x && (item.x + item.width) < (comData.value[dragSrc].x + comData.value[dragSrc].width))))
      .filter(item => ((item.y === resultY && item.height === comData.value[dragSrc].height) || (item.y > resultY && item.y < (resultY + comData.value[dragSrc].height)) || ((item.y + item.height) > resultY && (item.y + item.height) < (resultY + comData.value[dragSrc].height))));
    if (obstacleArrY.length === 0) {
      comData.value[dragSrc].y = resultY;
    }
  }
  dealBg();
  boxRef.value.scrollTo(0, heightBg.value - pageHeight.value);
};
// 结束拖拽
const dragEnd = () => {
  window.removeEventListener('mousemove', dragIng);
  window.removeEventListener('mouseup', dragEnd);
  delete comData.value[dragSrc].move;
  dragSrc = null;
};
// 计算拖拽最大边界
const dealDragMax = (direction) => {
  switch (direction) {
    case 'top':
      return 0;
      break;
    case 'right':
      return pageWidth.value - comData.value[dragSrc].width;
      break;
    case 'bottom':
      return 999999999;
      break;
    case 'left':
      return 0;
      break;
  };
};
// 收缩对象
let resizeObj = null;
// 收缩方向
let resizeDirection = '';
// 开始位置的clientX
let startX = 0;
// 开始位置的clientY
let startY = 0;
// 开始位置的宽度
let startWidth = 0;
// 开始位置的高度
let startHeight = 0;
// 开始位置的y坐标
let startTop = 0;
// 开始位置的x坐标
let startLeft = 0;
// 上阻碍
let topObstacle = 0;
// 下阻碍
let bottomObstacle = 0;
// 左阻碍
let leftObstacle = 0;
// 右阻碍
let rightObstacle = 0;
// 开始收缩
const resizeStart = (e, obj, direction) => {
  closeSettingPop();
  resizeObj = obj;
  resizeDirection = direction;
  startX = e.clientX;
  startY = e.clientY;
  startWidth = obj.width;
  startHeight = obj.height;
  startTop = obj.y;
  startLeft = obj.x;
  // 计算阻碍边界
  const xArr = comData.value.filter(item => item.static === true && (item.x < obj.x ? (item.x + item.width) >= obj.x : item.x <= (obj.x + obj.width)));
  const yArr = comData.value.filter(item => item.static === true && (item.y < obj.y ? (item.y + item.height) >= obj.y : item.y <= (obj.y + obj.height)));
  const t = xArr.filter(item => (item.y + item.height) <= obj.y).map(item => (item.y + item.height));
  if (t.length > 0) {
    topObstacle = Math.max(...t);
  } else {
    topObstacle = 0;
  }
  const b = xArr.filter(item => item.y >= (obj.y + obj.height)).map(item => item.y);
  if (b.length > 0) {
    bottomObstacle = Math.max(...b);
  } else {
    bottomObstacle = 0;
  }
  const l = yArr.filter(item => (item.x + item.width) <= obj.x).map(item => (item.x + item.width));
  if (l.length > 0) {
    leftObstacle = Math.max(...l);
  } else {
    leftObstacle = 0;
  }
  const r = yArr.filter(item => item.x >= (obj.x + obj.width)).map(item => item.x);
  if (r.length > 0) {
    rightObstacle = Math.max(...r);
  } else {
    rightObstacle = 0;
  }
  window.addEventListener('mousemove', resizeIng);
  window.addEventListener('mouseup', resizeEnd);
};
// 收缩中
const resizeIng = (e) => {
  // 正向数据
  const x = startWidth + (e.clientX - startX);
  const y = startHeight + (e.clientY - startY);
  // 反向数据
  const x_rever = startWidth - (e.clientX - startX);
  const y_rever = startHeight - (e.clientY - startY);
  const t = startTop + (e.clientY - startY);
  const l = startLeft + (e.clientX - startX);
  switch (resizeDirection) {
    case 'top-left':
      resizeObj.height = y_rever < props.itemMinHeight ? props.itemMinHeight : y_rever > dealResizeMax('top') ? dealResizeMax('top') : y_rever;
      resizeObj.y = y_rever < props.itemMinHeight ? (startTop + startHeight - props.itemMinHeight) : y_rever > dealResizeMax('top') ? topObstacle : t;
      resizeObj.width = x_rever < props.itemMinWidth ? props.itemMinWidth : x_rever > dealResizeMax('left') ? dealResizeMax('left') : x_rever;
      resizeObj.x = x_rever < props.itemMinWidth ? (startLeft + startWidth - props.itemMinWidth) : x_rever > dealResizeMax('left') ? leftObstacle : l;
      break;
    case 'top':
      // 原始
      resizeObj.height = y_rever < props.itemMinHeight ? props.itemMinHeight : y_rever > dealResizeMax('top') ? dealResizeMax('top') : y_rever;
      resizeObj.y = y_rever < props.itemMinHeight ? (startTop + startHeight - props.itemMinHeight) : y_rever > dealResizeMax('top') ? topObstacle : t;
      break;
    case 'top-right':
      resizeObj.height = y_rever < props.itemMinHeight ? props.itemMinHeight : y_rever > dealResizeMax('top') ? dealResizeMax('top') : y_rever;
      resizeObj.y = y_rever < props.itemMinHeight ? (startTop + startHeight - props.itemMinHeight) : y_rever > dealResizeMax('top') ? topObstacle : t;
      resizeObj.width = x < props.itemMinWidth ? props.itemMinWidth : x > dealResizeMax('right') ? dealResizeMax('right') : x;
      break;
    case 'left':
      // 原始
      resizeObj.width = x_rever < props.itemMinWidth ? props.itemMinWidth : x_rever > dealResizeMax('left') ? dealResizeMax('left') : x_rever;
      resizeObj.x = x_rever < props.itemMinWidth ? (startLeft + startWidth - props.itemMinWidth) : x_rever > dealResizeMax('left') ? leftObstacle : l;
      break;
    case 'right':
      // 原始
      resizeObj.width = x < props.itemMinWidth ? props.itemMinWidth : x > dealResizeMax('right') ? dealResizeMax('right') : x;
      break;
    case 'bottom-left':
      resizeObj.height = y < props.itemMinHeight ? props.itemMinHeight : y > dealResizeMax('bottom') ? dealResizeMax('bottom') : y;
      resizeObj.width = x_rever < props.itemMinWidth ? props.itemMinWidth : x_rever > dealResizeMax('left') ? dealResizeMax('left') : x_rever;
      resizeObj.x = x_rever < props.itemMinWidth ? (startLeft + startWidth - props.itemMinWidth) : x_rever > dealResizeMax('left') ? leftObstacle : l;
      break;
    case 'bottom':
      // 原始
      resizeObj.height = y < props.itemMinHeight ? props.itemMinHeight : y > dealResizeMax('bottom') ? dealResizeMax('bottom') : y;
      break;
    case 'bottom-right':
      resizeObj.height = y < props.itemMinHeight ? props.itemMinHeight : y > dealResizeMax('bottom') ? dealResizeMax('bottom') : y;
      resizeObj.width = x < props.itemMinWidth ? props.itemMinWidth : x > dealResizeMax('right') ? dealResizeMax('right') : x;
      break;
  };
  dealBg();
  boxRef.value.scrollTo(0, heightBg.value - pageHeight.value);
};
// 结束收缩
const resizeEnd = (e) => {
  resizeDirection = '';
  resizeObj = null;
  window.removeEventListener('mousemove', resizeIng);
  window.removeEventListener('mouseup', resizeEnd);
};
// 计算收缩最大边界
const dealResizeMax = (direction) => {
  switch (direction) {
    case 'top':
      return startTop + startHeight - topObstacle;
      break;
    case 'left':
      return startLeft + startWidth - leftObstacle;
      break;
    case 'right':
      return (rightObstacle > 0 ? rightObstacle : pageWidth.value) - startLeft;
      break;
    case 'bottom':
      return bottomObstacle > 0 ? (bottomObstacle - startTop) : 999999999;
      break;
  };
};
// 计算占位高度
const dealBg = () => {
  const arr = comData.value.map(item => (item.y + item.height));
  if (arr.length > 0) {
    heightBg.value = Math.max(...arr) + 50;
  } else {
    heightBg.value = 0;
  }
};
// 初始化画布
const init = (width, height) => {
  changePageSize(width, height);
  dealBg();
};
// 添加一个组件
const addItem = () => { };
// 删除一个组件
const deleteItem = () => { };
// 手动设置画布尺寸
const changePageSize = (width, height) => {
  if (width !== null) {
    pageWidth.value = width;
  }
  if (height !== null) {
    pageHeight.value = height;
  }
};
// 展开一个菜单
const openSettingPop = (item) => {
  if (!item.showPop) {
    comData.value.forEach(item => {
      delete item.showPop;
    });
    item.showPop = true;
    window.addEventListener('click', closeSettingPop);
  }
};
// 关闭一个菜单
const closeSettingPop = () => {
  comData.value.forEach(item => {
    delete item.showPop;
  });
  window.removeEventListener('click', closeSettingPop);
};
onBeforeUnmount(() => {
  window.removeEventListener('click', closeSettingPop);
});
defineExpose({ init, addItem, deleteItem, changePageSize });
</script>
<style lang="scss">
@use "style/index.scss" as *;
</style>
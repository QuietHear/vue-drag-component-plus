/*
* @Author: aFei
* @Date: 2024-08-05 13:45:00
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2024-08-26 10:14:04
*/
<template>
  <div class="vue-drag-component-plus" ref="pageRef">
    <!-- 滚动区 -->
    <div class="content-box" ref="boxRef">
      <!-- 组件项 -->
      <div
        :class="['com-item', seeModel || isGrouping || item.static === true || item.dragable === false ? '' : 'can-drag', item.move ? 'is-move' : '', item.drag ? 'is-drag' : '', item.showPop ? 'on-top' : '']"
        :style="{
          width: item.width + 'px',
          height: item.height + 'px',
          top: item.y + 'px',
          left: item.x + 'px'
        }" v-for="(item, index) in comData" :key="index"
        @mousedown.prevent="seeModel || isGrouping || item.static === true || item.dragable === false ? null : dragStart($event, index)">
        <div class="com-item-content">
          <!-- 组件内容区 -->
          <!-- 组合内容 -->
          <template v-if="item.isGroup">
            <!-- 组合标题 -->
            123
            <!-- 组合子项内容 -->
            <div class="com-item-content-child" :style="{
              width: one.width + 'px',
              height: one.height + 'px',
              top: one.y + 'px',
              left: one.x + 'px'
            }" v-for="(one, oneIndex) in item.groupData" :key="oneIndex">
              <!-- 内容 -->
              <slot name="item" :data="one">
                {{ index }}
              </slot>
              <!-- 设置弹窗入口 -->
              <div class="setting-box" :style="{ display: one.showPop ? 'flex' : 'none' }"
                @mousedown.prevent.stop="null"
                v-if="!seeModel && !isGrouping && dragSrc === null && resizeObj === null">
                <Icon :iconObj="settingIcon" @click.prevent.stop="openSettingPop(one)" />
              </div>
              <!-- 设置弹窗 -->
              <div class="setting-box-pop" @mousedown.prevent.stop="null" v-if="one.showPop">
                <slot name="setPopNormal" :data="deepCopy(one)">
                  <div class="setting-box-pop-item" @click="removeGroupItem(one.id, one.inGroupId)">移出组合</div>
                  <div class="setting-box-pop-item" @click="deleteItem(one.id, one.inGroupId)">删除</div>
                </slot>
              </div>
            </div>
          </template>
          <!-- 普通内容 -->
          <template v-else>
            <slot name="item" :data="item">
              {{ index }}
            </slot>
          </template>
          <!-- 组合选择器 -->
          <div :class="['group-checkbox', item.checked ? 'is-checked' : '', item.disabled ? 'disabled' : '']"
            @click="item.disabled ? null : changeCheck(item)"
            v-if="!item.isGroup && item.notGroup !== true && isGrouping">
          </div>
          <!-- 设置弹窗入口 -->
          <div class="setting-box" :style="{ display: item.showPop ? 'flex' : 'none' }" @mousedown.prevent.stop="null"
            v-if="!seeModel && !isGrouping && dragSrc === null && resizeObj === null">
            <Icon :iconObj="settingIcon" @click.prevent.stop="openSettingPop(item)" />
          </div>
          <!-- 设置弹窗 -->
          <div class="setting-box-pop" @mousedown.prevent.stop="null" v-if="item.showPop">
            <slot name="setPopSpecial" :data="deepCopy(item)" v-if="item.isGroup === true">
              <div class="setting-box-pop-item" @click="removeGroup(item.id)">解除组合</div>
            </slot>
            <slot name="setPopNormal" :data="deepCopy(item)" v-else>
              <div class="setting-box-pop-item" @click="openGroup(item.id)" v-if="item.notGroup !== true">组合</div>
              <div class="setting-box-pop-item" @click="deleteItem(item.id)">删除</div>
            </slot>
          </div>
        </div>
        <!-- 缩放触发器 -->
        <template v-if="!seeModel && !isGrouping && !item.move && item.static !== true && item.resizable !== false">
          <div class="resize-line top-left" @mousedown.prevent.stop="resizeStart($event, item, 'top-left')"
            v-if="resizeKeys.indexOf('topLeft') !== -1"></div>
          <div class="resize-line top" @mousedown.prevent.stop="resizeStart($event, item, 'top')"
            v-if="resizeKeys.indexOf('top') !== -1"></div>
          <div class="resize-line top-right" @mousedown.prevent.stop="resizeStart($event, item, 'top-right')"
            v-if="resizeKeys.indexOf('topRight') !== -1"></div>
          <div class="resize-line left" @mousedown.prevent.stop="resizeStart($event, item, 'left')"
            v-if="resizeKeys.indexOf('left') !== -1"></div>
          <div class="resize-line right" @mousedown.prevent.stop="resizeStart($event, item, 'right')"
            v-if="resizeKeys.indexOf('right') !== -1"></div>
          <div class="resize-line bottom-left" @mousedown.prevent.stop="resizeStart($event, item, 'bottom-left')"
            v-if="resizeKeys.indexOf('bottomLeft') !== -1"></div>
          <div class="resize-line bottom" @mousedown.prevent.stop="resizeStart($event, item, 'bottom')"
            v-if="resizeKeys.indexOf('bottom') !== -1"></div>
          <div class="resize-line bottom-right" @mousedown.prevent.stop="resizeStart($event, item, 'bottom-right')"
            v-if="resizeKeys.indexOf('bottomRight') !== -1">
          </div>
        </template>
      </div>
      <!-- 拖拽背景占位 -->
      <div class="drag-bg" :style="{
        width: dragBg.width + 'px',
        height: dragBg.height + 'px',
        top: dragBg.y + 'px',
        left: dragBg.x + 'px'
      }" v-if="dragSrc !== null"></div>
      <!-- 高度占位，出现滚动条 -->
      <div class="height-bg" :style="{ height: heightBg + 'px' }"></div>
      <!-- 空数据 -->
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
const emit = defineEmits(["showGroup", "updateChecked"]);
const props = defineProps({
  // 包含收缩方向
  insertResizeKeys: {
    type: Array,
    default: () => {
      return ['topLeft', 'top', 'topRight', 'left', 'right', 'bottomLeft', 'bottom', 'bottomRight'];
    }
  },
  // 排除收缩方向
  excludeResizeKeys: {
    type: Array,
    default: () => {
      return [];
    }
  },
  // 预览模式
  seeModel: {
    type: Boolean,
    default: false
  },
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
// 计算当前应该生效的缩放key
const dealResizeKeys = () => {
  props.insertResizeKeys.forEach(item => {
    if (props.excludeResizeKeys.indexOf(item) === -1) {
      resizeKeys.value.push(item);
    }
  });
};
watch(
  () => [props.insertResizeKeys, props.excludeResizeKeys],
  () => {
    dealResizeKeys();
  }
);
// 当前生效的缩放key
const resizeKeys = ref([]);
dealResizeKeys();
// 画布ref
const pageRef = ref(null);
// 画布宽度
let pageWidth = null;
// 画布高度
let pageHeight = null;
// 画布容器ref
const boxRef = ref(null);
// 占位高度
const heightBg = ref(0);
// 组件数据
const comData = ref([
  // {
  //   width: 100,
  //   height: 100,
  //   x: 300,
  //   y: 300
  // },
  // {
  //   width: 100,
  //   height: 100,
  //   x: 390,
  //   y: 50,
  //   static: true
  // },
  // {
  //   width: 100,
  //   height: 100,
  //   x: 50,
  //   y: 210,
  //   static: true
  // },
  // {
  //   width: 100,
  //   height: 100,
  //   x: 210,
  //   y: 600,
  //   static: true
  // },
  // {
  //   width: 100,
  //   height: 100,
  //   x: 310,
  //   y: 500,
  //   static: true
  // },
  // {
  //   width: 100,
  //   height: 100,
  //   x: 700,
  //   y: 390,
  //   static: true
  // },
  // {
  //   width: 100,
  //   height: 100,
  //   x: 600,
  //   y: 290,
  //   static: true
  // }
]);
// 当前拖拽目标
let dragSrc = null;
// 横向初始差值
let differX = null;
// 纵向初始差值
let differY = null;
// 拖拽背景信息
const dragBg = ref({});
// 开始拖拽
const dragStart = (e, index) => {
  closeSettingPop();
  dragSrc = index;
  dragBg.value = deepCopy(comData.value[dragSrc]);
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
  if (resultY > comData.value[dragSrc].y && resultY > (pageHeight - comData.value[dragSrc].height - 30)) {
    boxRef.value.scrollBy(0, 20);
  }
  if (resultY < comData.value[dragSrc].y && (resultY - boxRef.value.scrollTop) < 30) {
    boxRef.value.scrollBy(0, -20);
  }
  comData.value[dragSrc].x = resultX;
  comData.value[dragSrc].y = resultY;
  setTimeout(() => {
    const obstacleArr = comData.value.filter(item => item.static === true)
      .filter(item => ((item.x === resultX && item.width === comData.value[dragSrc].width) || (item.x > resultX && item.x < (resultX + comData.value[dragSrc].width)) || ((item.x + item.width) > resultX && (item.x + item.width) < (resultX + comData.value[dragSrc].width))))
      .filter(item => ((item.y === resultY && item.height === comData.value[dragSrc].height) || (item.y > resultY && item.y < (resultY + comData.value[dragSrc].height)) || ((item.y + item.height) > resultY && (item.y + item.height) < (resultY + comData.value[dragSrc].height))));
    if (obstacleArr.length === 0) {
      dragBg.value.x = resultX;
      dragBg.value.y = resultY;
    } else {
      // 主左右移动
      const obstacleArrX = comData.value.filter(item => item.static === true)
        .filter(item => ((item.x === resultX && item.width === comData.value[dragSrc].width) || (item.x > resultX && item.x < (resultX + comData.value[dragSrc].width)) || ((item.x + item.width) > resultX && (item.x + item.width) < (resultX + comData.value[dragSrc].width))))
        .filter(item => ((item.y === comData.value[dragSrc].y && item.height === comData.value[dragSrc].height) || (item.y > comData.value[dragSrc].y && item.y < (comData.value[dragSrc].y + comData.value[dragSrc].height)) || ((item.y + item.height) > comData.value[dragSrc].y && (item.y + item.height) < (comData.value[dragSrc].y + comData.value[dragSrc].height))));
      if (obstacleArrX.length === 0) {
        dragBg.value.x = resultX;
      }
      // 主上下移动
      const obstacleArrY = comData.value.filter(item => item.static === true)
        .filter(item => ((item.x === comData.value[dragSrc].x && item.width === comData.value[dragSrc].width) || (item.x > comData.value[dragSrc].x && item.x < (comData.value[dragSrc].x + comData.value[dragSrc].width)) || ((item.x + item.width) > comData.value[dragSrc].x && (item.x + item.width) < (comData.value[dragSrc].x + comData.value[dragSrc].width))))
        .filter(item => ((item.y === resultY && item.height === comData.value[dragSrc].height) || (item.y > resultY && item.y < (resultY + comData.value[dragSrc].height)) || ((item.y + item.height) > resultY && (item.y + item.height) < (resultY + comData.value[dragSrc].height))));
      if (obstacleArrY.length === 0) {
        dragBg.value.y = resultY;
      }
    }
    dealBg();
  }, 30);
};
// 结束拖拽
const dragEnd = () => {
  window.removeEventListener('mousemove', dragIng);
  window.removeEventListener('mouseup', dragEnd);
  setTimeout(() => {
    delete comData.value[dragSrc].move;
    comData.value[dragSrc].x = dragBg.value.x;
    comData.value[dragSrc].y = dragBg.value.y;
    dragSrc = null;
  }, 30);
};
// 计算拖拽最大边界
const dealDragMax = (direction) => {
  switch (direction) {
    case 'top':
      return 0;
      break;
    case 'right':
      return pageWidth - comData.value[dragSrc].width;
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
  resizeObj.drag = true;
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
    bottomObstacle = Math.min(...b);
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
    rightObstacle = Math.min(...r);
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
  boxRef.value.scrollTo(0, heightBg.value - pageHeight);
};
// 结束收缩
const resizeEnd = (e) => {
  delete resizeObj.drag;
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
      return (rightObstacle > 0 ? rightObstacle : pageWidth) - startLeft;
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
// 初始化
onMounted(() => {
  // 绑定监听
  resizePageObserver.observe(pageRef.value);
});
// 画布尺寸改变监听器
const resizePageObserver = new ResizeObserver(entries => {
  changePageSize(pageWidth === entries[0].contentRect.width ? null : entries[0].contentRect.width, pageHeight === entries[0].contentRect.height ? null : entries[0].contentRect.height);
});
// 正在init
let initIng = false;
// 初始化画布
const init = (historyData = [], historyWidth = null) => {
  comData.value = deepCopy(historyData);
  if (historyWidth !== null) {
    nextTick(() => {
      const obj = pageRef.value.getBoundingClientRect();
      const multiple = obj.width / historyWidth;
      comData.value.forEach(item => {
        item.width *= multiple;
        item.height *= multiple;
        item.x *= multiple;
        item.y *= multiple;
      });
      dealBg();
    });
  } else {
    dealBg();
  }
  initIng = true;
  setTimeout(() => {
    initIng = false;
  }, 500)
};
// 添加一个组件
const addItem = (obj, pid = null, keepPosition = false) => {
  const item = deepCopy(obj);
  if (!item.id) {
    item.id = new Date().getTime() + '';
  }
  if (keepPosition !== true) {
    if (pid) {

    } else {
      item.x = 0;
      const lin = comData.value.map(item => (item.y + item.height));
      if (lin.length > 0) {
        item.y = Math.max(...lin);
      } else {
        item.y = 0;
      }
    }
  }
  if (pid) {
    const pArr = comData.value.filter(item => item.id === pid);
    if (pArr.length === 1) {
      pArr[0].groupData.push(item);
    } else {
      try {
        console.error('未找到组件');
      } catch (error) { }
    }
  } else {
    comData.value.push(item);
  }
  dealBg();
};
// 删除一个组件
const deleteItem = (id, pid = null) => {
  let index = -1;
  const pArr = comData.value.filter(item => item.id === pid);
  if (pid) {
    if (pArr.length === 1) {
      index = pArr[0].groupData.findIndex(item => item.id === id);
    }
  } else {
    index = comData.value.findIndex(item => item.id === id);
  }
  if (index !== -1) {
    if (pid) {
      pArr[0].groupData.splice(index, 1);
    } else {
      comData.value.splice(index, 1);
    }
    dealBg();
  } else {
    try {
      console.error('未找到组件');
    } catch (error) { }
  }
};
// 更新一个组件
const updateItem = (obj) => {
  if (obj.id) {
    const item = deepCopy(obj);
    let index = -1;
    const pArr = comData.value.filter(one => one.id === item.inGroupId);
    if (item.inGroupId) {
      if (pArr.length === 1) {
        index = pArr[0].groupData.findIndex(one => one.id === item.id);
      }
    } else {
      index = comData.value.findIndex(one => one.id === item.id);
    }
    if (index !== -1) {
      if (item.inGroupId) {
        pArr[0].groupData[index] = item;
      } else {
        comData.value[index] = item;
      }
      dealBg();
    } else {
      try {
        console.error('未找到组件');
      } catch (error) { }
    }
  } else {
    try {
      console.error('未找到组件');
    } catch (error) { }
  }
};
// 记录画布尺寸
const changePageSize = (width, height) => {
  if (width !== null) {
    const multiple = pageWidth ? (width / pageWidth) : 1;
    pageWidth = width;
    // 防止init时widh监听正好触发
    if (!initIng) {
      comData.value.forEach(item => {
        item.width *= multiple;
        item.height *= multiple;
        item.x *= multiple;
        item.y *= multiple;
      });
      dealBg();
    }
  }
  if (height !== null) {
    pageHeight = height;
  }
  console.log(pageWidth, pageHeight);
};
// 展开一个菜单
const openSettingPop = (item) => {
  if (!item.showPop) {
    comData.value.forEach(item => {
      delete item.showPop;
      if (item.groupData) {
        item.groupData.forEach(one => {
          delete one.showPop;
        });
      }
    });
    item.showPop = true;
    window.addEventListener('click', closeSettingPop);
  }
};
// 关闭一个菜单
const closeSettingPop = () => {
  comData.value.forEach(item => {
    delete item.showPop;
    if (item.groupData) {
      item.groupData.forEach(one => {
        delete one.showPop;
      });
    }
  });
  window.removeEventListener('click', closeSettingPop);
};
// 正在组合中
const isGrouping = ref(false);
// 打开组合开关
const openGroup = (id) => {
  const index = comData.value.findIndex(item => item.id === id);
  if (index !== -1) {
    comData.value[index].checked = true;
    comData.value[index].disabled = true;
    isGrouping.value = true;
    emit('showGroup', isGrouping.value);
  } else {
    try {
      console.error('未找到组件');
    } catch (error) { }
  }
};
// 关闭组合开关
const closeGroup = () => {
  isGrouping.value = false;
  comData.value.forEach(item => {
    delete item.checked;
    delete item.disabled;
    if (item.groupData) {
      item.groupData.forEach(one => {
        delete one.checked;
        delete one.disabled;
      });
    }
  });
  emit('showGroup', isGrouping.value);
};
// 改变一条的选中
const changeCheck = (obj) => {
  obj.checked = obj.checked ? false : true;
  emit('updateChecked', comData.value.filter(item => item.checked).length);
};
// 生成组合
const addGroup = () => {
  const arr = comData.value.filter(item => item.checked);
  if (arr.length > 1) {
    const obj = {
      id: new Date().getTime() + 'G',
      isGroup: true,
      width: 200,
      height: 200,
      groupData: []
    };
    arr.forEach(item => {
      deleteItem(item.id);
      item.inGroupId = obj.id;
      obj.groupData.push(item);
    });
    addItem(obj);
    dealBg();
  }
  closeGroup();
};
// 从组合中移出某一项
const removeGroupItem = (id, pid) => {
  const pObj = comData.value.filter(item => item.id === pid)[0];
  if (pObj) {
    const lin = pObj.groupData.filter(item => item.id === id)[0];
    if (lin) {
      delete lin.inGroupId;
      addItem(lin);
      deleteItem(lin.id, pObj.id);
      if (pObj.groupData.length < 2) {
        removeGroup(pid);
      }
      dealBg();
    } else {
      try {
        console.error('未找到组件');
      } catch (error) { }
    }
  } else {
    try {
      console.error('未找到组件');
    } catch (error) { }
  }
};
// 解除组合
const removeGroup = (id) => {
  const lin = comData.value.filter(item => item.id === id)[0];
  if (lin) {
    deleteItem(lin.id);
    lin.groupData.forEach(item => {
      delete item.inGroupId;
      addItem(item, null, true);
    });
    dealBg();
  } else {
    try {
      console.error('未找到组件');
    } catch (error) { }
  }
};
// 获取当前画布数据
const getData = () => {
  return { data: deepCopy(comData.value), width: pageWidth };
};
onBeforeUnmount(() => {
  // 移除监听
  resizePageObserver.unobserve(pageRef.value);
  window.removeEventListener('click', closeSettingPop);
});
defineExpose({ init, addItem, deleteItem, updateItem, openGroup, closeGroup, addGroup, removeGroupItem, removeGroup, getData });
</script>
<style lang="scss">
@use "style/index.scss" as *;
</style>
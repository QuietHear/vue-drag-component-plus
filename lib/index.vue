/*
* @Author: aFei
* @Date: 2024-08-05 13:45:00
*/
/*
* @LastEditors: aFei
* @LastEditTime: 2024-11-27 15:38:27
*/
<template>
  <div class="vue-drag-component-plus" :style="{ '--css-scle': nowScle }" ref="pageRef">
    <!-- 滚动区 -->
    <div class="content-box" ref="boxRef">
      <!-- 组件项 -->
      <div
        :class="['com-item', seeModel || isGrouping || item.static === true || item.dragable === false ? '' : 'can-drag', item.move ? 'is-move' : '', item.drag ? 'is-drag' : '', item.showPop ? 'on-top' : '', seeModel ? 'no-hover' : '']"
        :style="{
          width: item.s_width + 'px',
          height: item.s_height + 'px',
          top: item.s_y + 'px',
          left: item.s_x + 'px'
        }" v-for="(item, index) in comData" :key="index"
        @mousedown.prevent="seeModel || isGrouping || item.static === true || item.dragable === false ? null : dragStart($event, index)"
        @mouseenter="seeModel || isGrouping || dragSrc || resizeObj || !item.isGroup ? null : showGroupSet($event, item)"
        @mouseleave="seeModel || isGrouping || dragSrc || resizeObj || !item.isGroup ? null : hideGroupSet($event, item)">
        <div class="com-item-box">
          <!-- 组件内容区 -->
          <!-- 组合内容 -->
          <template v-if="item.isGroup">
            <!-- 组合标题 -->
            <div class="group-item-tit" :title="item.groupTit" v-if="item.groupTit">
              {{ item.groupTit }}
            </div>
            <!-- 组合子项内容 -->
            <div :class="['group-item-content', item.groupTit ? '' : 'full']">
              <div :class="['com-item-box-child', one.isObstacle ? 'else' : '']" :style="{
                width: one.s_width + 'px',
                height: one.s_height + 'px',
                top: one.s_y + 'px',
                left: one.s_x + 'px'
              }" v-for="(one, oneIndex) in item.groupData" :key="oneIndex">
                <!-- 内容 -->
                <div class="com-item-box-content">
                  <slot name="item" :data="one">
                    <p>{{ Math.round(one.s_width * 100) / 100 }},{{ Math.round(one.s_height * 100) / 100 }}</p>
                    <p>{{ Math.round(one.s_x * 100) / 100 }},{{ Math.round(one.s_y * 100) / 100 }}</p>
                  </slot>
                </div>
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
                    <div class="setting-box-pop-item" @click="copyItem(one.id, one.inGroupId)">复制</div>
                    <div class="setting-box-pop-item" @click="deleteItem(one.id, one.inGroupId)">删除</div>
                  </slot>
                </div>
              </div>
            </div>
          </template>
          <!-- 普通内容 -->
          <template v-else>
            <div class="com-item-box-content">
              <slot name="item" :data="item">
                <p>{{ Math.round(item.s_width * 100) / 100 }},{{ Math.round(item.s_height * 100) / 100 }}</p>
                <p>{{ Math.round(item.s_x * 100) / 100 }},{{ Math.round(item.s_y * 100) / 100 }}</p>
              </slot>
            </div>
          </template>
          <!-- 组合选择器 -->
          <div :class="['group-checkbox', item.checked ? 'is-checked' : '', item.checkDis ? 'disabled' : '']"
            @click="item.checkDis ? null : changeCheck(item)"
            v-if="!item.isGroup && item.notGroup !== true && isGrouping">
          </div>
          <!-- 设置弹窗入口 -->
          <div
            :class="['setting-box', item.isGroup === true ? item.btnPosition === 'right' ? 'only-g' : item.btnPosition === 'left' ? 'only-g l' : item.btnPosition === 'center' ? 'only-g c' : '' : '']"
            :style="{ display: item.showPop || item.showSet ? 'flex' : 'none' }" @mousedown.prevent.stop="null"
            v-if="!seeModel && !isGrouping && dragSrc === null && resizeObj === null">
            <Icon :iconObj="settingIcon" @click.prevent.stop="openSettingPop(item)" />
          </div>
          <!-- 设置弹窗 -->
          <div
            :class="['setting-box-pop', item.isGroup === true ? item.btnPosition === 'right' ? 'special' : item.btnPosition === 'left' ? 'special l' : item.btnPosition === 'center' ? 'special c' : '' : '']"
            @mousedown.prevent.stop="null" v-if="item.showPop">
            <slot name="setPopSpecial" :data="deepCopy(item)" v-if="item.isGroup === true">
              <div class="setting-box-pop-item" @click="emit('showTitPop', item.groupTit, item.id)" v-if="!hideTit">
                设置组合标题</div>
              <div class="setting-box-pop-item" @click="removeGroup(item.id)">解除组合</div>
            </slot>
            <slot name="setPopNormal" :data="deepCopy(item)" v-else>
              <div class="setting-box-pop-item" @click="openGroup(item.id)" v-if="item.notGroup !== true">组合</div>
              <div class="setting-box-pop-item" @click="copyItem(item.id)">复制</div>
              <div class="setting-box-pop-item" @click="deleteItem(item.id)">删除</div>
            </slot>
          </div>
        </div>
        <!-- 缩放触发器 -->
        <template
          v-if="!seeModel && !isGrouping && !item.showPop && !item.move && item.static !== true && item.resizable !== false">
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
      <!-- shadow阴影 -->
      <div :class="['shadow-bg', item.move ? 'is-move' : '']" :style="{
        width: item.s_width + 'px',
        height: item.s_height + 'px',
        top: item.s_y + 'px',
        left: item.s_x + 'px'
      }" v-for="(item, index) in comData" :key="index"></div>
      <!-- 拖拽背景占位 -->
      <div class="drag-bg" :style="{
        width: dragBg.s_width + 'px',
        height: dragBg.s_height + 'px',
        top: dragBg.s_y + 'px',
        left: dragBg.s_x + 'px'
      }" v-if="dragSrc !== null"></div>
      <!-- 高度占位，出现滚动条 -->
      <div class="height-bg"
        :style="{ height: (heightBg > 0 ? + (heightBg * nowScle + (seeModel ? seeModelMinBg : 220)) : 0) + 'px' }">
      </div>
      <!-- 辅助线 -->
      <template v-if="!hideAuxiliary">
        <div class="auxiliary-line hor" :style="{ top: auxiliaryTop + 'px', left: '0px' }" v-if="auxiliaryTop !== null">
        </div>
        <div class="auxiliary-line hor" :style="{ top: auxiliaryBtoom + 'px', left: '0px' }"
          v-if="auxiliaryBtoom !== null"></div>
        <div class="auxiliary-line" :style="{ top: '0px', left: auxiliaryLeft + 'px' }" v-if="auxiliaryLeft !== null">
        </div>
        <div class="auxiliary-line" :style="{ top: '0px', left: auxiliaryRight + 'px' }" v-if="auxiliaryRight !== null">
        </div>
      </template>
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
const emit = defineEmits(["baseWidthInit", "changeScle", "dragStart", "dragIng", "dragEnd", "resizeStart", "resizeIng", "resizeEnd", "showGroup", "openSetMenu", "updateChecked", "showTitPop"]);
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
  // 顶部组件添加ySpace间距
  addFirstSpace: {
    type: Boolean,
    default: false
  },
  // 预览模式
  seeModel: {
    type: Boolean,
    default: false
  },
  // 预览模式底部最小留白
  seeModelMinBg: {
    type: Number,
    default: 50,
    validator(value, props) {
      return value >= 0;
    }
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
  // 纵向相邻元素的自动间距
  ySpace: {
    type: Number,
    default: 7,
    validator(value, props) {
      return value >= 0;
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
  },
  // 不展示内置组合插槽中的设置组合标题按钮
  hideTit: {
    type: Boolean,
    default: false
  },
  // 不显示辅助线
  hideAuxiliary: {
    type: Boolean,
    default: false
  },
  // 辅助线显示距离
  auxiliarySpace: {
    type: Number,
    default: 15,
    validator(value, props) {
      return value >= 1;
    }
  },
});
// 深拷贝
const deepCopy = (obj) => {
  if (typeof obj === 'object' && !isVNode(obj) && obj !== null && !(obj instanceof Date)) {
    let result = obj instanceof Array ? [] : {};
    for (let key in obj) {
      result[key] = typeof obj[key] === 'object' && !isVNode(obj[key]) && obj[key] !== null && !(obj[key] instanceof Date) ? deepCopy(obj[key]) : obj[key];
    }
    return result;
  } else {
    return obj;
  }
};
// 过滤数组中与组件项XY方向都有交集的（接触覆盖的）
const filterCrossArr = (arr, obj, scle = false) => {
  return filterCrossYArr(filterCrossXArr(arr, obj, scle), obj, scle);
};
// 过滤数组中与组件项X方向有交集的
const filterCrossXArr = (arr, obj, scle = false) => {
  return arr.filter(item => (item[scle ? 's_x' : 'x'] <= obj[scle ? 's_x' : 'x'] && (item[scle ? 's_x' : 'x'] + item[scle ? 's_width' : 'width']) > obj[scle ? 's_x' : 'x']) || (item[scle ? 's_x' : 'x'] > obj[scle ? 's_x' : 'x'] && item[scle ? 's_x' : 'x'] < (obj[scle ? 's_x' : 'x'] + obj[scle ? 's_width' : 'width'])));
};
// 过滤数组中与组件项Y方向有交集的
const filterCrossYArr = (arr, obj, scle = false) => {
  return arr.filter(item => (item[scle ? 's_y' : 'y'] <= obj[scle ? 's_y' : 'y'] && (item[scle ? 's_y' : 'y'] + item[scle ? 's_height' : 'height']) > obj[scle ? 's_y' : 'y']) || (item[scle ? 's_y' : 'y'] > obj[scle ? 's_y' : 'y'] && item[scle ? 's_y' : 'y'] < (obj[scle ? 's_y' : 'y'] + obj[scle ? 's_height' : 'height'])));
};
// 递归解除组件叠加
const dealComStacking = (orginArr, filters = (arr) => arr, scle = false) => {
  const copyData = deepCopy(comData.value);
  const copyArr = deepCopy(orginArr);
  // 先按y排序
  copyArr.sort((a, b) => {
    const x = a[scle ? 's_y' : 'y'];
    const y = b[scle ? 's_y' : 'y'];
    return x - y;
  });
  // 递归方法
  const deepDown = (obj) => {
    const lin = filterCrossArr(filters(copyData, obj), obj, scle);
    lin.forEach(item => {
      item[scle ? 's_y' : 'y'] = obj[scle ? 's_y' : 'y'] + obj[scle ? 's_height' : 'height'];
      deepDown(item);
    });
  };
  // 执行递归
  copyArr.forEach(item => deepDown(copyData.filter(one => one.id === item.id)[0]));
  // 原数据赋值
  copyData.forEach(item => {
    comData.value.filter(one => one.id === item.id)[0][scle ? 's_y' : 'y'] = item[scle ? 's_y' : 'y'];
  });
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
// 基准宽度
let baseWidth = null;
// 设置基准宽度
const setBaseWidth = (val) => {
  baseWidth = val;
  emit('baseWidthInit', baseWidth);
};
// 当前缩放比例
const nowScle = ref(1);
// 设置缩放比例
const setNowScle = (val) => {
  nowScle.value = val;
  emit('changeScle', nowScle.value);
};
// 根据缩放比例结算当前宽高
const dealItemScleWH = (item) => {
  item.s_width = item.width * nowScle.value;
  item.s_height = item.height * nowScle.value;
  const styles = getComputedStyle(pageRef.value);
  const borderWidth = parseInt(styles.getPropertyValue('--com-item-border-width').trim());
  const titHeight = parseInt(styles.getPropertyValue('--group-tit-height').trim());
  if (item.isGroup === true) {
    const multipleX = item.s_width - 2 * borderWidth;
    const multipleY = item.s_height - 2 * borderWidth - (item.groupTit ? titHeight : 0);
    item.groupData.forEach(one => {
      one.s_width = multipleX * one.groupW;
      one.s_height = multipleY * one.groupH;
      one.s_x = multipleX * one.groupX;
      one.s_y = multipleY * one.groupY;
    });
  }
};
// 根据缩放比例结算当前位置
const dealItemScleXY = (item) => {
  item.s_x = item.x * nowScle.value;
  item.s_y = item.y * nowScle.value;
};
// 根据当前已经缩放的宽高重设原数据
const dealItemScleReverseWH = (item) => {
  item.width = item.s_width / nowScle.value;
  item.height = item.s_height / nowScle.value;
  const styles = getComputedStyle(pageRef.value);
  const borderWidth = parseInt(styles.getPropertyValue('--com-item-border-width').trim());
  const titHeight = parseInt(styles.getPropertyValue('--group-tit-height').trim());
  if (item.isGroup === true) {
    const multipleX = item.width - 2 * borderWidth;
    const multipleY = item.height - 2 * borderWidth - (item.groupTit ? titHeight : 0);
    item.groupData.forEach(one => {
      one.x = multipleX * one.groupX;
      one.y = multipleY * one.groupY;
    });
  }
};
// 根据当前已经缩放的位置重设原数据
const dealItemScleReverseXY = (item) => {
  item.x = item.s_x / nowScle.value;
  item.y = item.s_y / nowScle.value;
};
// 当前画布宽度
let pageWidth = null;
// 当前画布高度
let pageHeight = null;
// 画布容器ref
const boxRef = ref(null);
// 占位高度
const heightBg = ref(0);
// 上辅助线位置
const auxiliaryTop = ref(null);
// 下辅助线位置
const auxiliaryBtoom = ref(null);
// 左辅助线位置
const auxiliaryLeft = ref(null);
// 右辅助线位置
const auxiliaryRight = ref(null);
// 处理辅助线显示位置（缩放尺寸）
const dealAuxiliary = (obj) => {
  const position = deepCopy(obj);
  if (obj === null) {
    auxiliaryTop.value = null;
    auxiliaryBtoom.value = null;
    auxiliaryLeft.value = null;
    auxiliaryRight.value = null;
  } else {
    const styles = getComputedStyle(pageRef.value);
    const auxiliaryWidth = parseInt(styles.getPropertyValue('--auxiliary-width').trim());
    const t1 = comData.value.filter(item => item.id !== position.id).map(item => item.s_y);
    const t2 = comData.value.filter(item => item.id !== position.id).map(item => (item.s_y + item.s_height - 1));
    const t = [...t1, ...t2];
    t.sort();
    // 上边线计算
    if (t.filter(item => (item <= position.s_y && (position.s_y - props.auxiliarySpace) < item) || (item >= position.s_y && (position.s_y + props.auxiliarySpace) > item)).length > 0) {
      auxiliaryTop.value = position.s_y;
    } else {
      auxiliaryTop.value = null;
    }
    // 下边线计算
    if (t.filter(item => (item <= (position.s_y + position.s_height - 1) && (position.s_y + position.s_height - 1 - props.auxiliarySpace) < item) || (item >= (position.s_y + position.s_height - 1) && (position.s_y + position.s_height - 1 + props.auxiliarySpace) > item)).length > 0) {
      auxiliaryBtoom.value = position.s_y + position.s_height - auxiliaryWidth;
    } else {
      auxiliaryBtoom.value = null;
    }
    const l1 = comData.value.filter(item => item.id !== position.id).map(item => item.s_x);
    const l2 = comData.value.filter(item => item.id !== position.id).map(item => (item.s_x + item.s_width - 1));
    const l = [...l1, ...l2];
    l.sort();
    // 左边线计算
    if (l.filter(item => (item <= position.s_x && (position.s_x - props.auxiliarySpace) < item) || (item >= position.s_x && (position.s_x + props.auxiliarySpace) > item)).length > 0) {
      auxiliaryLeft.value = position.s_x;
    } else {
      auxiliaryLeft.value = null;
    }
    // 右边线计算
    if (l.filter(item => (item <= (position.s_x + position.s_width - 1) && (position.s_x + position.s_width - 1 - props.auxiliarySpace) < item) || (item >= (position.s_x + position.s_width - 1) && (position.s_x + position.s_width - 1 + props.auxiliarySpace) > item)).length > 0) {
      auxiliaryRight.value = position.s_x + position.s_width - auxiliaryWidth;
    } else {
      auxiliaryRight.value = null;
    }
  }
};
// 组件数据
const comData = ref([]);
// JQ的closest()方法
const closest = (ele, selector) => {
  let matchesSelector = ele.matches || ele.webkitMatchesSelector || ele.mozMatchesSelector || ele.msMatchesSelector;
  while (ele) {
    if (matchesSelector.call(ele, selector)) {
      break;
    }
    ele = ele.parentElement;
  }
  return ele;
};
// 当前拖拽目标
let dragSrc = null;
// 横向初始差值
let differX = null;
// 纵向初始差值
let differY = null;
// 拖拽背景信息
const dragBg = ref({});
// 开始拖拽（缩放尺寸）
const dragStart = (e, index) => {
  closeSettingPop();
  dragSrc = index;
  dragBg.value = deepCopy(comData.value[dragSrc]);
  emit('dragStart', deepCopy(comData.value[dragSrc]));
  comData.value[dragSrc].move = true;
  dealAuxiliary(comData.value[dragSrc]);
  const parentNode = closest(e.target, '.com-item');
  differX = e.clientX - parentNode.offsetLeft;
  differY = e.clientY - parentNode.offsetTop;
  window.addEventListener('mousemove', dragIng);
  window.addEventListener('mouseup', dragEnd);
};
// 拖拽中（缩放尺寸）
const dragIng = (e) => {
  const x = e.clientX - differX;
  const y = e.clientY - differY;
  const resultX = x <= dealDragMax('left') ? dealDragMax('left') : x >= dealDragMax('right') ? dealDragMax('right') : x;
  const resultY = y <= dealDragMax('top') ? dealDragMax('top') : y >= dealDragMax('bottom') ? dealDragMax('bottom') : y;
  const moveX = resultX - comData.value[dragSrc].s_x;
  const moveY = resultY - comData.value[dragSrc].s_y;
  // 移动方向
  let direction = '';
  if (moveY > 0) {
    direction = 'bottom';
  } else if (moveY < 0) {
    direction = 'top';
  } else if (moveX > 2) {
    direction = 'right';
  } else if (moveX < -2) {
    direction = 'left';
  }
  comData.value[dragSrc].s_x = resultX;
  comData.value[dragSrc].s_y = resultY;
  dealAuxiliary(comData.value[dragSrc]);
  // 当前直接接触的组件
  let obstacleArr = filterCrossArr(deepCopy(comData.value.filter(item => item.move !== true)), comData.value[dragSrc], true);
  if (obstacleArr.length === 0) {
    dragBg.value.s_x = resultX;
    dragBg.value.s_y = resultY;
  }
  // 与其他组件有重叠 
  // TODO 未考虑static的情况
  else {
    switch (direction) {
      case 'top':
        obstacleArr = obstacleArr.filter(item => item.s_y < dragBg.value.s_y);
        // 修复保持上方元素底部在一条水平线上
        const rightMin = Math.min(...obstacleArr.map(item => (item.s_y + item.s_height)));
        obstacleArr.forEach(item => {
          if (Math.abs(item.s_y + item.s_height - rightMin) < 5) {
            item.s_y = rightMin - item.s_height;
          }
        });
        // 移动距离
        let num = dragBg.value.s_y - resultY;
        // 能移动
        let needMove = true;
        // 上方所有接触元素
        let topArr = [...obstacleArr];
        // 向上查找挨着的元素
        const topDeep = (obj) => {
          const list = filterCrossXArr(deepCopy(comData.value.filter(item => item.move !== true && (item.s_y + item.s_height - obj.s_y) <= (num + 3) && (item.s_y + item.s_height - obj.s_y) >= 0)), obj, true);
          list.forEach(item => {
            // 修正挨着但是仍然位置有偏差的
            if ((item.s_y + item.s_height) !== obj.s_y) {
              item.s_y = obj.s_y - item.s_height;
            }
            if (topArr.findIndex(one => one.id === item.id) === -1) {
              topArr.push(item);
              topDeep(item);
            }
          });
        };
        obstacleArr.forEach(item => {
          topDeep(item);
        });
        topArr.sort((a, b) => {
          const x = a.s_y;
          const y = b.s_y;
          return x - y;
        });
        if (topArr.length === 0 || topArr.filter(item => item.s_y === 0).length > 0) {
          needMove = false;
        }
        // 先看能不能上移
        if (needMove) {
          let canMove = 0;
          const topMax = topArr.filter(item => item.s_y === topArr[0].s_y);
          topMax.forEach(item => {
            const list = filterCrossXArr(deepCopy(comData.value.filter(one => one.move !== true && (one.s_y + one.s_height) < item.s_y)), item, true);
            list.forEach(one => {
              if ((one.s_y + one.s_height) > canMove) {
                canMove = one.s_y + one.s_height;
              }
            });
          });
          canMove = topArr[0].s_y - canMove;
          if (canMove < num) {
            num = canMove;
          }
          topArr.forEach(item => {
            item.s_y -= num;
            comData.value.filter(one => one.id === item.id)[0].s_y = item.s_y;
          });
          dragBg.value.s_x = resultX;
          dragBg.value.s_y = comData.value.filter(item => item.id === topArr[topArr.length - 1].id)[0].s_y + comData.value.filter(item => item.id === topArr[topArr.length - 1].id)[0].s_height;
        }
        // 不行再下移 
        else {
          // 下移需要的最大Y
          let linYArr = 0;
          obstacleArr.forEach(item => {
            // 下方阻碍
            const bottomArr = filterCrossXArr(comData.value.filter(one => one.move !== true), item, true)
              .filter(one => one.s_y > (item.s_y + item.s_height));
            if (bottomArr.length > 0) {
              linYArr = Math.min(...bottomArr.map(one => one.s_y));
            }
          });
          const minY = linYArr === 0 ? 0 : (linYArr - dragBg.value.s_height - (Math.max(...obstacleArr.map(item => (item.s_y + item.s_height))) - Math.min(...obstacleArr.map(item => item.s_y))));
          const needMove = minY === 0 ? (resultY + dragBg.value.s_height - Math.min(...obstacleArr.map(item => item.s_y))) : (linYArr - Math.min(...obstacleArr.map(item => item.s_y)) - (Math.max(...obstacleArr.map(item => (item.s_y + item.s_height))) - Math.min(...obstacleArr.map(item => item.s_y))));
          // 进行下移
          if (minY === 0 || resultY <= minY) {
            // 下移无阻拦
            obstacleArr.filter(item => item.s_y < dragBg.value.s_y).forEach(item => {
              item.s_y += needMove;
              comData.value.filter(one => one.id === item.id)[0].s_y = item.s_y;
            });
            dragBg.value.s_x = resultX;
            dragBg.value.s_y = resultY;
            // 递归解除下移出现的重叠（把接触的元素全部下移）
            dealComStacking(comData.value, (arr, obj) => arr.filter(item => item.move !== true && item.id !== obj.id), true);
          }
        }
        break;
      case 'bottom':
        // 上移需要的最小Y
        let linYArr = 0;
        obstacleArr.forEach(item => {
          // 上方阻碍
          const topArr = filterCrossXArr(comData.value.filter(one => one.move !== true), item, true)
            .filter(one => (one.s_y + one.s_height) < item.s_y);
          if (topArr.length > 0) {
            linYArr = Math.max(...topArr.map(one => (one.s_y + one.s_height)));
          }
        });
        const maxY = linYArr + (Math.max(...obstacleArr.map(item => (item.s_height + item.s_y))) - Math.min(...obstacleArr.map(item => item.s_y)));
        const needMoveB = Math.min(...obstacleArr.map(item => item.s_y)) - linYArr;
        if (resultY >= maxY) {
          obstacleArr.filter(item => item.s_y > dragBg.value.s_y).forEach(item => {
            item.s_y -= needMoveB;
            comData.value.filter(one => one.id === item.id)[0].s_y = item.s_y;
            // 先把自己下移到不会接触的地方
            const lin = filterCrossArr(comData.value.filter(one => one.move !== true && one.id !== item.id), item, true);
            if (lin.length > 0) {
              item.s_y = Math.max(...lin.map(one => (one.s_y + one.s_height)));
              comData.value.filter(one => one.id === item.id)[0].s_y = item.s_y;
            }
          });
          dragBg.value.s_x = resultX;
          dragBg.value.s_y = maxY;
          // 递归解除下移出现的重叠（把接触的元素全部下移）
          dealComStacking(comData.value, (arr, obj) => arr.filter(item => item.move !== true && item.id !== obj.id), true);
        }
        break;
      case 'left':
      case 'right':
        obstacleArr.sort((a, b) => {
          const x = a.s_y;
          const y = b.s_y;
          return x - y;
        });
        let canTop = true;
        for (let i = 0; i < obstacleArr.length; i++) {
          // 先逐个判断够不够上移
          if (canTop) {
            const copyData = deepCopy(comData.value);
            for (let x = 0; x <= i; x++) {
              let max = null;
              const topList = filterCrossXArr(copyData.filter(item => item.move !== true && item.s_y < obstacleArr[x].s_y), obstacleArr[x], true);
              if (topList.length === 0) {
                max = 0;
              } else {
                max = Math.max(...topList.map(item => (item.s_y + item.s_height)));
              }
              // 最后一个
              if (x === i) {
                if (obstacleArr[x].s_y - (obstacleArr[x].s_y + obstacleArr[x].s_height - resultY) < max) {
                  canTop = false;
                  break;
                }
              } else {
                if (obstacleArr[x].s_y - obstacleArr[i].s_height < max) {
                  canTop = false;
                  break;
                } else {
                  copyData.filter(item => item.id === obstacleArr[x].id)[0].s_y -= obstacleArr[i].s_height;
                }
              }
            }
          }
          // 可以就上移
          if (canTop) {
            obstacleArr[i].s_y -= obstacleArr[i].s_y + obstacleArr[i].s_height - resultY;
            comData.value.filter(one => one.id === obstacleArr[i].id)[0].s_y = obstacleArr[i].s_y;
            for (let x = i; x > 0; x--) {
              obstacleArr[i - 1].s_y -= obstacleArr[i].s_height;
              comData.value.filter(one => one.id === obstacleArr[i - 1].id)[0].s_y = obstacleArr[i - 1].s_y;
            }
          }
          // 不够就下移
          else {
            obstacleArr.filter(item => item.id === obstacleArr[i].id).forEach(item => {
              item.s_y += (comData.value[dragSrc].s_y + comData.value[dragSrc].s_height - item.s_y);
              comData.value.filter(one => one.id === item.id)[0].s_y = item.s_y;
              // 递归解除重叠
              dealComStacking([item], (arr, obj) => arr.filter(item => item.move !== true && item.id !== obj.id), true);
            });
          }
        }
        dragBg.value.s_x = resultX;
        break;
    }
  }
  // 重新计算原始位置信息
  comData.value.forEach(item => {
    dealItemScleReverseXY(item);
  });
  dealBg(false);
  emit('dragIng', deepCopy(comData.value[dragSrc]));
};
// 结束拖拽（缩放尺寸）
const dragEnd = () => {
  window.removeEventListener('mousemove', dragIng);
  window.removeEventListener('mouseup', dragEnd);
  delete comData.value[dragSrc].move;
  comData.value[dragSrc].s_x = dragBg.value.s_x;
  comData.value[dragSrc].s_y = dragBg.value.s_y;
  dealAuxiliary(null);
  // 重新计算原始位置信息
  comData.value.forEach(item => {
    dealItemScleReverseXY(item);
  });
  dealBg();
  emit('dragEnd', deepCopy(comData.value[dragSrc]));
  dragSrc = null;
};
// 计算拖拽最大边界（缩放尺寸）
const dealDragMax = (direction) => {
  switch (direction) {
    case 'top':
      return 0;
      break;
    case 'right':
      return pageWidth - comData.value[dragSrc].s_width;
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
// 开始收缩（缩放尺寸）
const resizeStart = (e, obj, direction) => {
  closeSettingPop();
  resizeObj = obj;
  emit('resizeStart', deepCopy(resizeObj));
  resizeDirection = direction;
  startX = e.clientX;
  startY = e.clientY;
  startWidth = obj.s_width;
  startHeight = obj.s_height;
  startTop = obj.s_y;
  startLeft = obj.s_x;
  resizeObj.drag = true;
  dealAuxiliary(resizeObj);
  // 计算阻碍边界
  const xArr = comData.value.filter(item => item.static === true && (item.s_x < obj.s_x ? (item.s_x + item.s_width) >= obj.s_x : item.s_x <= (obj.s_x + obj.s_width)));
  const yArr = comData.value.filter(item => item.static === true && (item.s_y < obj.s_y ? (item.s_y + item.s_height) >= obj.s_y : item.s_y <= (obj.s_y + obj.s_height)));
  const t = xArr.filter(item => (item.s_y + item.s_height) <= obj.s_y).map(item => (item.s_y + item.s_height));
  if (t.length > 0) {
    topObstacle = Math.max(...t);
  } else {
    topObstacle = 0;
  }
  const b = xArr.filter(item => item.s_y >= (obj.s_y + obj.s_height)).map(item => item.s_y);
  if (b.length > 0) {
    bottomObstacle = Math.min(...b);
  } else {
    bottomObstacle = 0;
  }
  const l = yArr.filter(item => (item.s_x + item.s_width) <= obj.s_x).map(item => (item.s_x + item.s_width));
  if (l.length > 0) {
    leftObstacle = Math.max(...l);
  } else {
    leftObstacle = 0;
  }
  const r = yArr.filter(item => item.s_x >= (obj.s_x + obj.s_width)).map(item => item.s_x);
  if (r.length > 0) {
    rightObstacle = Math.min(...r);
  } else {
    rightObstacle = 0;
  }
  window.addEventListener('mousemove', resizeIng);
  window.addEventListener('mouseup', resizeEnd);
};
// 收缩中（缩放尺寸）
const resizeIng = (e) => {
  // 正向数据
  const x = startWidth + (e.clientX - startX);
  const y = startHeight + (e.clientY - startY);
  // 反向数据
  const x_rever = startWidth - (e.clientX - startX);
  const y_rever = startHeight - (e.clientY - startY);
  const t = startTop + (e.clientY - startY);
  const l = startLeft + (e.clientX - startX);
  const styles = getComputedStyle(pageRef.value);
  const borderWidth = parseInt(styles.getPropertyValue('--com-item-border-width').trim());
  const titHeight = parseInt(styles.getPropertyValue('--group-tit-height').trim());
  const dealGroup = () => {
    if (resizeObj.isGroup === true) {
      const multipleX = resizeObj.s_width - 2 * borderWidth;
      const multipleY = resizeObj.s_height - 2 * borderWidth - (resizeObj.groupTit ? titHeight : 0);
      resizeObj.groupData.forEach(item => {
        item.s_width = multipleX * item.groupW;
        item.s_x = multipleX * item.groupX;
        item.s_height = multipleY * item.groupH;
        item.s_y = multipleY * item.groupY;
      });
    }
  };
  switch (resizeDirection) {
    case 'top-left':
      resizeObj.s_height = y_rever < props.itemMinHeight ? props.itemMinHeight : y_rever > dealResizeMax('top') ? dealResizeMax('top') : y_rever;
      resizeObj.s_y = y_rever < props.itemMinHeight ? (startTop + startHeight - props.itemMinHeight) : y_rever > dealResizeMax('top') ? topObstacle : t;
      resizeObj.s_width = x_rever < props.itemMinWidth ? props.itemMinWidth : x_rever > dealResizeMax('left') ? dealResizeMax('left') : x_rever;
      resizeObj.s_x = x_rever < props.itemMinWidth ? (startLeft + startWidth - props.itemMinWidth) : x_rever > dealResizeMax('left') ? leftObstacle : l;
      dealGroup();
      break;
    case 'top':
      // 原始
      resizeObj.s_height = y_rever < props.itemMinHeight ? props.itemMinHeight : y_rever > dealResizeMax('top') ? dealResizeMax('top') : y_rever;
      resizeObj.s_y = y_rever < props.itemMinHeight ? (startTop + startHeight - props.itemMinHeight) : y_rever > dealResizeMax('top') ? topObstacle : t;
      dealGroup();
      break;
    case 'top-right':
      resizeObj.s_height = y_rever < props.itemMinHeight ? props.itemMinHeight : y_rever > dealResizeMax('top') ? dealResizeMax('top') : y_rever;
      resizeObj.s_y = y_rever < props.itemMinHeight ? (startTop + startHeight - props.itemMinHeight) : y_rever > dealResizeMax('top') ? topObstacle : t;
      resizeObj.s_width = x < props.itemMinWidth ? props.itemMinWidth : x > dealResizeMax('right') ? dealResizeMax('right') : x;
      dealGroup();
      break;
    case 'left':
      // 原始
      resizeObj.s_width = x_rever < props.itemMinWidth ? props.itemMinWidth : x_rever > dealResizeMax('left') ? dealResizeMax('left') : x_rever;
      resizeObj.s_x = x_rever < props.itemMinWidth ? (startLeft + startWidth - props.itemMinWidth) : x_rever > dealResizeMax('left') ? leftObstacle : l;
      dealGroup();
      break;
    case 'right':
      // 原始
      resizeObj.s_width = x < props.itemMinWidth ? props.itemMinWidth : x > dealResizeMax('right') ? dealResizeMax('right') : x;
      dealGroup();
      break;
    case 'bottom-left':
      resizeObj.s_height = y < props.itemMinHeight ? props.itemMinHeight : y > dealResizeMax('bottom') ? dealResizeMax('bottom') : y;
      resizeObj.s_width = x_rever < props.itemMinWidth ? props.itemMinWidth : x_rever > dealResizeMax('left') ? dealResizeMax('left') : x_rever;
      resizeObj.s_x = x_rever < props.itemMinWidth ? (startLeft + startWidth - props.itemMinWidth) : x_rever > dealResizeMax('left') ? leftObstacle : l;
      dealGroup();
      break;
    case 'bottom':
      // 原始
      resizeObj.s_height = y < props.itemMinHeight ? props.itemMinHeight : y > dealResizeMax('bottom') ? dealResizeMax('bottom') : y;
      dealGroup();
      break;
    case 'bottom-right':
      resizeObj.s_height = y < props.itemMinHeight ? props.itemMinHeight : y > dealResizeMax('bottom') ? dealResizeMax('bottom') : y;
      resizeObj.s_width = x < props.itemMinWidth ? props.itemMinWidth : x > dealResizeMax('right') ? dealResizeMax('right') : x;
      dealGroup();
      break;
  };
  // 重新计算原始宽高信息
  dealItemScleReverseWH(resizeObj);
  dealAuxiliary(resizeObj);
  // 当前直接接触的组件
  let obstacleArr = filterCrossArr(deepCopy(comData.value.filter(item => item.drag !== true)), resizeObj, true);
  if (obstacleArr.length > 0) {
    obstacleArr.sort((a, b) => {
      const x = a.s_y;
      const y = b.s_y;
      return x - y;
    });
    for (let i = 0; i < obstacleArr.length; i++) {
      obstacleArr.filter(item => item.id === obstacleArr[i].id).forEach(item => {
        item.s_y += (resizeObj.s_y + resizeObj.s_height - item.s_y);
        comData.value.filter(one => one.id === item.id)[0].s_y = item.s_y;
        // 递归解除重叠
        dealComStacking([item], (arr, obj) => arr.filter(item => item.drag !== true && item.id !== obj.id), true);
      });
    }
  }
  // 重新计算原始位置信息
  comData.value.forEach(item => {
    dealItemScleReverseXY(item);
  });
  dealBg(false);
  emit('resizeIng', deepCopy(resizeObj));
};
// 结束收缩（缩放尺寸）
const resizeEnd = (e) => {
  delete resizeObj.drag;
  resizeDirection = '';
  dealAuxiliary(null);
  window.removeEventListener('mousemove', resizeIng);
  window.removeEventListener('mouseup', resizeEnd);
  dealBg();
  emit('resizeEnd', deepCopy(resizeObj));
  resizeObj = null;
};
// 计算收缩最大边界（缩放尺寸）
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
// 计算占位高度（原始尺寸）
const dealBg = (deal = true) => {
  // 修正横向间距，计算组合按钮位置，组件实际的坐标
  if (deal === true) {
    // 如果有重叠的情况，直接修复
    dealComStacking(comData.value, (arr, obj) => arr.filter(item => item.id !== obj.id));
    dealSpace();
    comData.value.forEach(item => {
      dealItemScleXY(item);
    });
    // 使用当前位置计算，必须放在当前位置计算出后
    dealGroupSetting();
  }
  // 计算背景高度
  const arr = comData.value.map(item => (item.y + item.height));
  if (arr.length > 0) {
    heightBg.value = Math.max(...arr);
  } else {
    heightBg.value = 0;
  }
};
watch(
  () => props.ySpace,
  () => {
    if (props.ySpace >= 0) {
      dealSpace();
    }
  }
);
// 修正横向间距（原始尺寸）
const dealSpace = () => {
  // 按y从小到大排列
  const copyData = deepCopy(comData.value).sort((a, b) => {
    const x = a.y;
    const y = b.y;
    return x - y;
  });
  // 删除间隙
  for (let i = 0; i < copyData.length; i++) {
    // 在上面阻碍的元素
    const topArr = filterCrossXArr(copyData, copyData[i])
      .filter(item => item.y + item.height <= copyData[i].y);
    if (topArr.length > 0) {
      copyData[i].y = Math.max(...topArr.map(item => (item.y + item.height)));
    } else {
      copyData[i].y = 0;
    }
  };
  // 按y从小到大排列
  copyData.sort((a, b) => {
    const x = a.y;
    const y = b.y;
    return x - y;
  });
  // 重置间隙(向后一个处理，所以不用处理最后一个)
  for (let i = 0; i < (copyData.length - 1); i++) {
    // 记录相邻的id
    const ids = [];
    const deep = (obj) => {
      const arr = filterCrossXArr(copyData, obj)
        .filter(item => item.y === (obj.y + obj.height));
      arr.forEach(item => {
        ids.push(item.id);
        deep(item);
      });
    };
    deep(copyData[i]);
    ids.forEach(item => {
      copyData.filter(one => one.id === item)[0].y += props.ySpace;
    });
  };
  // 原数据赋值
  copyData.forEach(item => {
    comData.value.filter(one => one.id === item.id)[0].y = item.y;
  });
  // 给顶部加间距
  if (props.addFirstSpace) {
    comData.value.forEach(item => item.y += props.ySpace);
  }
};
// 计算组合按钮位置（缩放尺寸）
const dealGroupSetting = () => {
  const arr = comData.value.filter(item => item.isGroup === true);
  if (arr.length > 0) {
    const styles = getComputedStyle(pageRef.value);
    const settingWidth = parseInt(styles.getPropertyValue('--setting-icon-group-width').trim());
    arr.forEach(item => {
      if ((item.s_x + item.s_width + settingWidth) > pageWidth) {
        if ((item.s_x - settingWidth < 0)) {
          item.btnPosition = 'center';
        } else {
          item.btnPosition = 'left';
        }
      } else {
        item.btnPosition = 'right';
      }
    });
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
// 初始化画布（原始尺寸）
const init = (historyData = [], historyWidth = null) => {
  comData.value = deepCopy(historyData);
  // 组合数据修复，这里只考虑减少的情况，新增必须走addItem方法
  comData.value.filter(item => item.isGroup === true).forEach(item => {
    if (item.groupData.length < 2) {
      removeGroup(item.id);
    } else {
      const result = dealGroupSize(item.groupData, item);
      updateItem(result);
    }
  });
  initIng = true;
  nextTick(() => {
    const obj = pageRef.value.getBoundingClientRect();
    if (historyWidth !== null) {
      setBaseWidth(historyWidth);
      setNowScle(obj.width / historyWidth);
      comData.value.forEach(item => {
        dealItemScleWH(item);
      });
    } else {
      setBaseWidth(obj.width);
      setNowScle(1);
    }
    dealBg();
    setTimeout(() => {
      initIng = false;
    }, 500);
  });
};
// 显示组合设置按钮
const showGroupSet = (e, item) => {
  item.showSet = true;
};
// 隐藏组合设置按钮
const hideGroupSet = (e, item) => {
  delete item.showSet;
};
// 计算新增的一个组件的x,y（画布中数量至少一个，原始尺寸）
const dealMoreItemXY = (item, dataArr, maxWidth) => {
  const yTopArr = dataArr.map(item => item.y);
  // 与最高的y持平
  const yTop = Math.max(...yTopArr);
  // 找到所有包含在当前y的组件
  const xArr = dataArr.filter(item => (item.y + item.height) > yTop);
  xArr.sort((a, b) => {
    const x = a.x;
    const y = b.x;
    return x - y;
  });
  // x在y的高度向右平铺
  for (let i = 0; i < xArr.length; i++) {
    // 第一个
    if (i === 0) {
      // 判断左面是否有空位置
      if (xArr[i].x >= item.width) {
        item.y = yTop;
        item.x = 0;
        break;
      }
    }
    // 非最后一个，长度大于1
    if (xArr.length > 1 && i !== (xArr.length - 1)) {
      // 判断两个中间是否有空位置
      if ((xArr[i].x + xArr[i].width + item.width) <= xArr[i + 1].x) {
        item.y = yTop;
        item.x = xArr[i].x + xArr[i].width;
        break;
      }
    }
    // 最后一个
    if (i === (xArr.length - 1)) {
      // 判断右面是否有空位置
      if ((xArr[i].x + xArr[i].width + item.width) <= maxWidth) {
        item.y = yTop;
        item.x = xArr[i].x + xArr[i].width;
        break;
      }
    }
  };
  // 当行放不下
  if (item.y == undefined) {
    item.x = 0;
    const lin = dataArr.map(item => (item.y + item.height));
    item.y = Math.max(...lin);
  }
};
// 添加一个组件（原始尺寸）
const addItem = (obj, pid = null, keepPosition = false) => {
  const item = deepCopy(obj);
  const pArr = comData.value.filter(item => item.id === pid);
  if (!item.id) {
    item.id = new Date().getTime() + '';
  }
  if (pid && pArr.length !== 1) {
    try {
      console.error('未找到组件');
    } catch (error) {
    } finally {
      return;
    }
  }
  // 重新计算坐标（原始尺寸）
  if (keepPosition !== true) {
    delete item.x;
    delete item.y;
    if (pid) {
      // 先反推原始尺寸，因为之前计算时已经删除了
      pArr[0].groupData.forEach(item => {
        dealGroupItemWH(item, pArr[0]);
      });
      const styles = getComputedStyle(pageRef.value);
      const borderWidth = parseInt(styles.getPropertyValue('--com-item-border-width').trim());
      dealMoreItemXY(item, pArr[0].groupData, pArr[0].width - 2 * borderWidth);
    } else {
      if (comData.value.length === 0) {
        item.x = 0;
        item.y = 0;
      } else {
        dealMoreItemXY(item, comData.value, baseWidth || pageWidth);
      }
    }
  }
  // 添加到画布
  if (pid) {
    pArr[0].groupData.push(item);
    const result = dealGroupSize(pArr[0].groupData, pArr[0]);
    updateItem(result);
    // 递归解除重叠
    dealComStacking([result], (arr, obj) => arr.filter(item => item.id !== obj.id));
  } else {
    if (comData.value.length === 0) {
      setBaseWidth(pageWidth);
    }
    // 计算实际大小
    dealItemScleWH(item);
    comData.value.push(item);
  }
  dealBg();
};
// 复制一个组件（原始尺寸）
const copyItem = (id, pid = null, nid = null) => {
  let obj = null;
  const pArr = comData.value.filter(item => item.id === pid);
  if (pid) {
    if (pArr.length === 1) {
      obj = deepCopy(pArr[0].groupData.filter(item => item.id === id)[0]);
    }
  } else {
    obj = deepCopy(comData.value.filter(item => item.id === id)[0]);
  }
  if (obj) {
    obj.id = nid || (new Date().getTime() + '');
    if (pid) {
      // 反推原始尺寸
      dealGroupItemWH(obj, pArr[0]);
      addItem(obj, pid);
    } else {
      addItem(obj);
    }
    if (pid) {
      return deepCopy(comData.value.filter(item => item.id === pid)[0].groupData.filter(item => item.id === obj.id)[0]);
    } else {
      return deepCopy(comData.value.filter(item => item.id === obj.id)[0]);
    }
  } else {
    try {
      console.error('未找到组件');
    } catch (error) {
    } finally {
      return null;
    }
  }
};
// 删除一个组件（原始尺寸）
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
      if (pArr[0].groupData.length === 1) {
        removeGroup(pid);
      } else {
        // 先反推原始尺寸，因为之前计算时已经删除了
        pArr[0].groupData.forEach(item => {
          dealGroupItemWH(item, pArr[0]);
        });
        const result = dealGroupSize(pArr[0].groupData, pArr[0]);
        updateItem(result);
      }
    } else {
      comData.value.splice(index, 1);
      if (comData.value.length === 0) {
        setBaseWidth(null);
        setNowScle(1);
      }
    }
    dealBg();
  } else {
    try {
      console.error('未找到组件');
    } catch (error) { }
  }
};
// 更新一个组件（原始尺寸）
const updateItem = (obj) => {
  if (obj.id) {
    const item = deepCopy(obj);
    // 删除多余浮窗信息
    delete item.showPop;
    delete item.showSet;
    delete item.btnPosition;
    if (item.groupData) {
      item.groupData.forEach(one => {
        delete one.showPop;
        delete one.showSet;
      });
    }
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
        // 计算实际大小
        dealItemScleWH(pArr[0]);
      } else {
        comData.value[index] = item;
        // 计算实际大小
        dealItemScleWH(comData.value[index]);
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
// 记录画布尺寸（原始尺寸）
const changePageSize = (width, height) => {
  if (width !== null) {
    pageWidth = width;
    // 防止init时widh监听正好触发
    if (!initIng) {
      setNowScle(baseWidth && pageWidth ? (width / baseWidth) : 1);
      comData.value.forEach(item => {
        dealItemScleWH(item);
      });
      dealBg();
    }
  }
  if (height !== null) {
    pageHeight = height;
  }
  console.log(pageWidth, pageHeight, 'pageWidth, pageHeight');
};
// 展开一个菜单
const openSettingPop = (item) => {
  if (!item.showPop) {
    comData.value.forEach(one => {
      delete one.showPop;
      if (one.groupData) {
        one.groupData.forEach(two => {
          delete two.showPop;
        });
      }
    });
    emit('openSetMenu', deepCopy(item));
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
    comData.value[index].checkDis = true;
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
    delete item.checkDis;
    if (item.groupData) {
      item.groupData.forEach(one => {
        delete one.checked;
        delete one.checkDis;
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
// 计算组合内容区的宽高、内容区的最新位置等信息（原始尺寸）
const dealGroupSize = (childData, parentObj) => {
  const childList = deepCopy(childData);
  const result = deepCopy(parentObj);
  // 压缩横坐标
  childList.sort((a, b) => {
    const x = a.x;
    const y = b.x;
    return x - y;
  });
  for (let i = 0; i < (childList.length - 1); i++) {
    if (i === 0 && childList[i].x > 0) {
      const space = childList[i].x;
      for (let x = i; x < childList.length; x++) {
        childList[x].x -= space;
      };
    }
    if (childList[i + 1].x > (childList[i].x + childList[i].width)) {
      const linLeft = deepCopy(childList.slice(0, i + 1));
      if (childList[i + 1].x > Math.max(...linLeft.map(item => (item.x + item.width)))) {
        const space = childList[i + 1].x - Math.max(...linLeft.map(item => (item.x + item.width)));
        for (let x = (i + 1); x < childList.length; x++) {
          childList[x].x -= space;
        };
      }
    }
  };
  // 压缩纵坐标
  childList.sort((a, b) => {
    const x = a.y;
    const y = b.y;
    return x - y;
  });
  for (let i = 0; i < (childList.length - 1); i++) {
    if (i === 0 && childList[i].y > 0) {
      const space = childList[i].y;
      for (let x = i; x < childList.length; x++) {
        childList[x].y -= space;
      }
    }
    if (childList[i + 1].y > (childList[i].y + childList[i].height)) {
      const linTop = deepCopy(childList.slice(0, i + 1));
      if (childList[i + 1].y > Math.max(...linTop.map(item => (item.y + item.height)))) {
        const space = childList[i + 1].y - Math.max(...linTop.map(item => (item.y + item.height)));
        for (let x = (i + 1); x < childList.length; x++) {
          childList[x].y -= space;
        }
      }
    }
  };
  const linx = childList.map(item => (item.x + item.width));
  // 最大宽度
  const maxWidth = Math.max(...linx);
  const liny = childList.map(item => (item.y + item.height));
  // 最大高度
  const maxHeight = Math.max(...liny);
  childList.forEach(item => {
    if (!item.inGroupId) {
      item.inGroupId = result.id;
    }
    item.groupW = item.width / maxWidth;
    item.groupH = item.height / maxHeight;
    item.groupX = item.x / maxWidth;
    item.groupY = item.y / maxHeight;
    delete item.width;
    delete item.height;
    item.isObstacle = (item.x + item.width) === maxWidth && item.y === 0;
  });
  const styles = getComputedStyle(pageRef.value);
  const borderWidth = parseInt(styles.getPropertyValue('--com-item-border-width').trim());
  const titHeight = parseInt(styles.getPropertyValue('--group-tit-height').trim());
  result.width = maxWidth + 2 * borderWidth;
  result.height = maxHeight + 2 * borderWidth + (result.groupTit ? titHeight : 0);
  result.groupData = [...childList];
  return result;
};
// 重新计算组合内组件的宽高（原始尺寸）
const dealGroupItemWH = (item, pObj) => {
  const styles = getComputedStyle(pageRef.value);
  const borderWidth = parseInt(styles.getPropertyValue('--com-item-border-width').trim());
  const titHeight = parseInt(styles.getPropertyValue('--group-tit-height').trim());
  item.width = (pObj.width - 2 * borderWidth) * item.groupW;
  item.height = (pObj.height - 2 * borderWidth - (pObj.groupTit ? titHeight : 0)) * item.groupH;
};
// 组合边框大小改变重新计算组件大小（原始尺寸）
const changeGroupBorder = () => {
  nextTick(() => {
    comData.value.filter(item => item.isGroup === true).forEach(item => {
      dealItemScleWH(item);
    });
  });
};
// 生成组合（原始尺寸）
const addGroup = () => {
  const arr = comData.value.filter(item => item.checked);
  if (arr.length > 1) {
    const obj = {
      id: new Date().getTime() + 'G',
      isGroup: true,
      groupTit: ''
    };
    const result = dealGroupSize(arr, obj);
    result.groupData.forEach(item => {
      deleteItem(item.id);
    });
    addItem(result);
    closeGroup();
    return deepCopy(comData.value.filter(item => item.id === result.id)[0]);
  } else {
    closeGroup();
    return null;
  }
};
// 从组合中移出某一项（原始尺寸）
const removeGroupItem = (id, pid) => {
  const pObj = comData.value.filter(item => item.id === pid)[0];
  if (pObj) {
    const lin = pObj.groupData.filter(item => item.id === id)[0];
    if (lin) {
      if (pObj.groupData.length === 2) {
        const result = removeGroup(pid);
        return result;
      } else {
        // 反推原始尺寸
        dealGroupItemWH(lin, pObj);
        delete lin.inGroupId;
        delete lin.groupW;
        delete lin.groupH;
        delete lin.groupX;
        delete lin.groupY;
        delete lin.isObstacle;
        deleteItem(lin.id, pObj.id);
        addItem(lin);
        return [deepCopy(comData.value.filter(item => item.id === id)[0])];
      }
    } else {
      try {
        console.error('未找到组件');
      } catch (error) {
      } finally {
        return [];
      }
    }
  } else {
    try {
      console.error('未找到组件');
    } catch (error) {
    } finally {
      return [];
    }
  }
};
// 解除组合（原始尺寸）
const removeGroup = (id) => {
  const lin = comData.value.filter(item => item.id === id)[0];
  if (lin) {
    // 记录子组件id
    let ids = [];
    lin.groupData.forEach(item => {
      // 反推原始尺寸
      dealGroupItemWH(item, lin);
      item.x += lin.x;
      item.y += lin.y;
      delete item.inGroupId;
      delete item.groupW;
      delete item.groupH;
      delete lin.groupX;
      delete lin.groupY;
      delete lin.isObstacle;
      ids.push(item.id);
      addItem(item, null, true);
    });
    // 先删除的话，后面的会移动上去
    deleteItem(lin.id);
    let result = [];
    ids.forEach(item => {
      result.push(deepCopy(comData.value.filter(one => one.id === item)[0]));
    });
    return result;
  } else {
    try {
      console.error('未找到组件');
    } catch (error) {
    } finally {
      return [];
    }
  }
};
// 设置组合标题（原始尺寸）
const changeGroupTit = (tit = '', id) => {
  const lin = comData.value.filter(item => item.id === id)[0];
  if (lin) {
    // 有无标题有变化
    if (!lin.groupTit || !tit) {
      const styles = getComputedStyle(pageRef.value);
      const titHeight = parseInt(styles.getPropertyValue('--group-tit-height').trim());
      // 删除了标题
      if (lin.groupTit && !tit) {
        lin.height -= titHeight;
        lin.s_height -= titHeight;
      }
      // 添加了标题
      if (!lin.groupTit && tit) {
        lin.height += titHeight;
        lin.s_height += titHeight;
      }
    }
    lin.groupTit = tit;
    // 无到有标题时会与底下组件出现重叠
    // 递归解除重叠
    dealComStacking([lin], (arr, obj) => arr.filter(item => item.id !== obj.id));
    dealBg();
  } else {
    try {
      console.error('未找到组件');
    } catch (error) { }
  }
};
// 获取当前画布数据（原始尺寸）
const getData = () => {
  return new Promise((resolve, reject) => {
    comData.value.forEach(item => {
      delete item.showPop;
      delete item.showSet;
      if (item.groupData) {
        item.groupData.forEach(one => {
          delete one.showPop;
          delete one.showSet;
        });
      }
    });
    console.log(comData.value, 'comData.value');
    const data = deepCopy(comData.value);
    data.forEach(item => {
      if (item.isGroup === true) {
        item.groupData.forEach(one => {
          // 反推原始尺寸
          dealGroupItemWH(one, item);
          delete one.s_width;
          delete one.s_height;
          delete one.s_x;
          delete one.s_y;
        });
      }
      delete item.btnPosition;
      delete item.s_width;
      delete item.s_height;
      delete item.s_x;
      delete item.s_y;
    });
    resolve({ data, width: baseWidth });
  });
};
onBeforeUnmount(() => {
  // 移除监听
  resizePageObserver.unobserve(pageRef.value);
  window.removeEventListener('click', closeSettingPop);
});
defineExpose({ init, addItem, copyItem, deleteItem, updateItem, openGroup, closeGroup, changeGroupBorder, addGroup, removeGroupItem, removeGroup, changeGroupTit, getData });
</script>
<style lang="scss">
@use "style/index.scss" as *;
</style>
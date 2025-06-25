/*
* @Author: aFei
* @Date: 2024-08-05 13:45:00
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2025-06-25 15:28:04
*/
<template>
  <div class="vue-drag-component-plus"
    :style="{ '--item-scale': nowScale, '--css-scale': seeModel ? nowCssScale : 1, '--com-x-space': nowXSpace + 'px', '--com-y-space': nowYSpace + 'px' }"
    ref="pageRef">
    <!-- 滚动区 -->
    <div class="content-box">
      <!-- 组件项 -->
      <div :class="[
        'com-item',
        dragSrc !== null ? '' : 'not-move-animate',
        item.move ? 'is-move' : '',
        item.drag ? 'is-drag' : '',
        item.showPop || (item.isGroup && item.groupData.filter(one => one.showPop).length > 0) ? 'on-top' : '',
        // 初始化标记
        initTime + 'p',
        'i' + item.id + 'd'
      ]" :style="{
        width: item.s_width + 'px',
        height: item.s_height + 'px',
        top: item.s_y + 'px',
        left: item.s_x + 'px'
      }" v-for="(item, index) in comData" :key="index">
        <!-- 实际内容区 -->
        <div :class="[
          'com-item-inner',
          seeModel || trimModel || isGrouping || item.static === true || item.dragable === false ? '' : 'can-drag',
          seeModel || trimModel ? 'no-hover' : ''
        ]"
          @mousedown.prevent="seeModel || trimModel || isGrouping || item.static === true || item.dragable === false ? null : dragStart($event, index)"
          @mouseenter="seeModel || trimModel || isGrouping || dragSrc !== null || resizeObj || !item.isGroup ? null : showGroupSet(item)"
          @mouseleave="seeModel || trimModel || isGrouping || dragSrc !== null || resizeObj || !item.isGroup ? null : hideGroupSet(item.id)">
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
                <div :class="[
                  'com-item-box-child',
                  one.isObstacle ? 'is-obstacle' : '',
                  initTime + 'c'
                ]" :style="{
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
                  <!-- 组合内设置弹窗入口 -->
                  <div class="setting-box" :style="{ display: one.showPop ? 'flex' : 'none' }"
                    @mousedown.prevent.stop="null"
                    v-if="!seeModel && !trimModel && !isGrouping && dragSrc === null && resizeObj === null">
                    <Icon :iconObj="settingIcon" @click.prevent.stop="openSettingPop(one)" />
                  </div>
                  <!-- 组合内设置弹窗 -->
                  <div class="setting-box-pop" @mousedown.prevent.stop="null" v-if="one.showPop">
                    <slot name="setPopNormal" :data="outDataInit(one)">
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
              :class="['setting-box', item.isGroup === true ? item.btnPosition === 'right' ? 'only-g' : item.btnPosition === 'left' ? 'only-g l' : item.btnPosition === 'top' ? 'only-g t' : item.btnPosition === 'bottom' ? 'only-g b' : item.btnPosition === 'center' ? 'only-g c' : '' : '']"
              :style="{ display: item.showPop || item.showSet ? 'flex' : 'none' }" @mousedown.prevent.stop="null"
              v-if="!seeModel && !trimModel && !isGrouping && dragSrc === null && resizeObj === null">
              <Icon :iconObj="settingIcon" @click.prevent.stop="openSettingPop(item)" />
            </div>
            <!-- 设置弹窗 -->
            <div
              :class="['setting-box-pop', item.isGroup === true ? item.btnPosition === 'right' ? 'special' : item.btnPosition === 'left' ? 'special l' : item.btnPosition === 'top' ? 'special t' : item.btnPosition === 'bottom' ? 'special b' : item.btnPosition === 'center' ? 'special c' : '' : '']"
              @mousedown.prevent.stop="null" v-if="item.showPop">
              <slot name="setPopSpecial" :data="outDataInit(item)" v-if="item.isGroup === true">
                <div class="setting-box-pop-item" @click="toggleLockItem(item.id, item.static === true ? false : true)">
                  {{ item.static === true ? '解除' : '' }}锁定
                </div>
                <div class="setting-box-pop-item" @click="openTrimModel(item.id)" v-if="item.static !== true">
                  微调
                </div>
                <div class="setting-box-pop-item"
                  @click="hideGroupSet(item.id); emit('showTitPop', item.groupTit, item.id)" v-if="!hideTit">
                  设置组合标题
                </div>
                <div class="setting-box-pop-item" @click="removeGroup(item.id)">解除组合</div>
              </slot>
              <slot name="setPopNormal" :data="outDataInit(item)" v-else>
                <div class="setting-box-pop-item" @click="openGroup(item.id)" v-if="item.notGroup !== true">组合</div>
                <div class="setting-box-pop-item" @click="toggleLockItem(item.id, item.static === true ? false : true)">
                  {{ item.static === true ? '解除' : '' }}锁定
                </div>
                <div class="setting-box-pop-item" @click="openTrimModel(item.id)" v-if="item.static !== true">
                  微调
                </div>
                <div class="setting-box-pop-item" @click="copyItem(item.id)">复制</div>
                <div class="setting-box-pop-item" @click="deleteItem(item.id)">删除</div>
              </slot>
            </div>
          </div>
          <!-- 缩放触发器 -->
          <template
            v-if="!seeModel && !trimModel && !isGrouping && !item.showPop && !(item.isGroup && item.groupData.filter(one => one.showPop).length > 0) && !item.move && item.static !== true && item.resizable !== false">
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
      </div>
      <!-- shadow阴影 -->
      <div :class="[
        'shadow-bg',
        dragSrc !== null ? '' : 'not-move-animate',
        item.move ? 'is-move' : '',
        item.drag ? 'is-drag' : ''
      ]" :style="{
        width: item.s_width - nowXSpace * 2 + 'px',
        height: item.s_height - nowYSpace * 2 + 'px',
        top: item.s_y + nowYSpace + 'px',
        left: item.s_x + nowXSpace + 'px'
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
        :style="{ height: (heightBg > 0 ? (heightBg * getNowHScale() + (seeModel ? seeModelMinBg : 220)) : 0) + 'px' }">
      </div>
      <!-- 辅助线 -->
      <template v-if="showAuxiliary">
        <!-- 上 -->
        <div class="auxiliary-line hor" :style="{ top: auxiliaryTop + 'px', left: '0px' }" v-if="auxiliaryTop !== null">
        </div>
        <!-- 上下中间 -->
        <div class="auxiliary-line hor" :style="{ top: auxiliaryTopBottom + 'px', left: '0px' }"
          v-if="auxiliaryTopBottom !== null">
        </div>
        <!-- 下 -->
        <div class="auxiliary-line hor" :style="{ top: auxiliaryBottom + 'px', left: '0px' }"
          v-if="auxiliaryBottom !== null"></div>
        <!-- 左（高度100%不够滚动时的总高度，且辅助线不用考虑无数据和预览模式） -->
        <div class="auxiliary-line"
          :style="{ top: '0px', left: auxiliaryLeft + 'px', height: heightBg * getNowHScale() + 220 + 'px' }"
          v-if="auxiliaryLeft !== null">
        </div>
        <!-- 左右中间（高度100%不够滚动时的总高度，且辅助线不用考虑无数据和预览模式） -->
        <div class="auxiliary-line"
          :style="{ top: '0px', left: auxiliaryLeftRight + 'px', height: heightBg * getNowHScale() + 220 + 'px' }"
          v-if="auxiliaryLeftRight !== null">
        </div>
        <!-- 右（高度100%不够滚动时的总高度，且辅助线不用考虑无数据和预览模式） -->
        <div class="auxiliary-line"
          :style="{ top: '0px', left: auxiliaryRight + 'px', height: heightBg * getNowHScale() + 220 + 'px' }"
          v-if="auxiliaryRight !== null">
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
import { dealPositionData, findPosition } from "./js/findPosition";
const emit = defineEmits(["baseWidthInit", "changeScale", "changeCssScale", "changeTrimModel", "dragStart", "dragIng", "dragEnd", "resizeStart", "resizeIng", "resizeEnd", "showGroup", "openSetMenu", "updateChecked", "showTitPop", "domStart", "domReady"]);
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
  // 预览模式底部最小留白
  seeModelMinBg: {
    type: Number,
    default: 50,
    validator(value, props) {
      return value >= 0;
    }
  },
  // 组件项最小宽度（原始尺寸）
  itemMinWidth: {
    type: Number,
    default: 50,
    validator(value, props) {
      return value >= 20;
    }
  },
  // 组件项最小高度（原始尺寸）
  itemMinHeight: {
    type: Number,
    default: 50,
    validator(value, props) {
      return value >= 20;
    }
  },
  // 纵向相邻元素的自动间距（原始尺寸）
  xSpace: {
    type: Number,
    default: 10,
    validator(value, props) {
      return value >= 0;
    }
  },
  // 横向相邻元素的自动间距（原始尺寸）
  ySpace: {
    type: Number,
    default: null,
    validator(value, props) {
      return value >= 0;
    }
  },
  // 高度缩放折扣率（让高度没那么大变化）
  hScaleDiscount: {
    type: Number,
    default: 0.2,
    validator(value, props) {
      return value > 0;
    }
  },
  // 预览模式组件内css缩放比例最小值
  cssScaleMin: {
    type: Number,
    default: 0.75,
    validator(value, props) {
      return value > 0;
    }
  },
  // 预览模式组件内css缩放比例最大值
  cssScaleMax: {
    type: Number,
    default: 1.2,
    validator(value, props) {
      // 有时候初始化的时候这里还没有值
      return value > 0 && value >= (props ? props.cssScaleMin : 0.1);
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
  // 显示辅助线
  showAuxiliary: {
    type: Boolean,
    default: false
  },
  // 组合按钮位置更详细
  groupBtnPosMore: {
    type: Boolean,
    default: false
  },
  // 组合前数据处理
  beforeAddGroup: {
    type: Function,
    default: (arr) => {
      return arr;
    }
  },
  // 解散/移出组合前数据处理
  beforeRemoveGroup: {
    type: Function,
    default: (arr) => {
      return arr;
    }
  },
  // 拖拽事件触发延迟时间（防止不小心单击了一下而开始拖动）
  dragDelayTime: {
    type: Number,
    default: 200,
    validator(value, props) {
      return value >= 0 && value < 1000;
    }
  }
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
// 获取纯数据（外部数据可能存在很多业务数据，使用deepCopy时会影响性能）
const getPureData = (obj) => {
  let result = {};
  if (obj instanceof Array) {
    result = [];
    obj.forEach(item => {
      result.push(getPureData(item));
    });
  } else {
    for (let keys in obj) {
      if ([
        'id',
        'move',
        'drag',
        'itemMinWidth',
        'width',
        's_width',
        'itemMinHeight',
        'height',
        's_height',
        'x',
        's_x',
        'y',
        's_y',
        'isGroup',
        'groupTit',
        'groupData',
        'inGroupId',
        'groupW',
        'groupH',
        'groupX',
        'groupY'
      ].indexOf(keys) !== -1) {
        if (keys === 'groupData') {
          result[keys] = getPureData(obj[keys]);
        } else {
          result[keys] = obj[keys];
        }
      }
    }
  }
  return result;
};
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
// JQ的hasClass()方法
const hasClass = (ele, className) => {
  return ele.classList ? ele.classList.contains(className) : new RegExp('\\s' + className + '\\s').test(' ' + ele.className + ' ');
};
// 保留7位小数（JS本身就有乘法漏洞，所以数据取7位有效小数四舍五入做对比就行了）
// 例如：634*0.98=621.3199999999999≈621.32; 621.3199999999999/0.98=634; 621.32/0.98=634.0000000000001≈634;
const getFloat7 = (num) => {
  return parseFloat(num.toFixed(7));
};
// 根据class查找子元素集合
const findByClass = (ele, className) => {
  let result = [];
  let depth = (arr) => {
    arr.forEach((item) => {
      if (hasClass(item, className)) {
        result.push(item);
      }
      if (item.childNodes && item.childNodes.length > 0) {
        depth(item.childNodes);
      }
    })
  }
  depth(ele.childNodes);
  return result;
};
// 过滤数组中与组件项XY方向都有交集的（接触覆盖的）
const filterCrossArr = (arr, obj, scale = false) => {
  return filterCrossYArr(filterCrossXArr(arr, obj, scale), obj, scale);
};
// 过滤数组中与组件项X方向有交集的
const filterCrossXArr = (arr, obj, scale = false) => {
  return arr.filter(item => (getFloat7(item[scale ? 's_x' : 'x']) <= getFloat7(obj[scale ? 's_x' : 'x']) && (getFloat7(item[scale ? 's_x' : 'x'] + item[scale ? 's_width' : 'width'])) > getFloat7(obj[scale ? 's_x' : 'x'])) || (getFloat7(item[scale ? 's_x' : 'x']) > getFloat7(obj[scale ? 's_x' : 'x']) && getFloat7(item[scale ? 's_x' : 'x']) < (getFloat7(obj[scale ? 's_x' : 'x'] + obj[scale ? 's_width' : 'width']))));
};
// 过滤数组中与组件项Y方向有交集的
const filterCrossYArr = (arr, obj, scale = false) => {
  return arr.filter(item => (getFloat7(item[scale ? 's_y' : 'y']) <= getFloat7(obj[scale ? 's_y' : 'y']) && (getFloat7(item[scale ? 's_y' : 'y'] + item[scale ? 's_height' : 'height'])) > getFloat7(obj[scale ? 's_y' : 'y'])) || (getFloat7(item[scale ? 's_y' : 'y']) > getFloat7(obj[scale ? 's_y' : 'y']) && getFloat7(item[scale ? 's_y' : 'y']) < (getFloat7(obj[scale ? 's_y' : 'y'] + obj[scale ? 's_height' : 'height']))));
};
// 递归解除组件叠加
const dealComStacking = (orginArr, filters = (arr) => arr, scale = false) => {
  const copyData = getPureData(comData.value);
  const copyArr = getPureData(orginArr);
  // 先按y排序，再按x排序
  copyArr.sort((a, b) => {
    const x = getFloat7(a[scale ? 's_y' : 'y']);
    const y = getFloat7(b[scale ? 's_y' : 'y']);
    if (x !== y) {
      return x - y;
    } else {
      const x1 = getFloat7(a[scale ? 's_x' : 'x']);
      const y1 = getFloat7(b[scale ? 's_x' : 'x']);
      return x1 - y1;
    }
  });
  // 递归方法
  const deepDown = (obj) => {
    const lin = filterCrossArr(filters(copyData, obj), obj, scale);
    lin.forEach(item => {
      item[scale ? 's_y' : 'y'] = obj[scale ? 's_y' : 'y'] + obj[scale ? 's_height' : 'height'];
      deepDown(item);
    });
  };
  // 执行递归
  copyArr.forEach(item => deepDown(copyData.filter(one => one.id === item.id)[0]));
  // 原数据赋值
  copyData.forEach(item => {
    comData.value.filter(one => one.id === item.id)[0][scale ? 's_y' : 'y'] = item[scale ? 's_y' : 'y'];
  });
};
// 抛出对象格式化（缩放尺寸）
const outDataInit = (obj) => {
  const result = deepCopy(obj);
  delete result.showPop;
  delete result.showSet;
  if (result.groupData) {
    result.groupData.forEach(item => {
      delete item.showPop;
      delete item.showSet;
      // 反推原始尺寸
      dealGroupItemWH(item, result);
      delete item.s_width;
      delete item.s_height;
      delete item.s_x;
      delete item.s_y;
    });
  } else if (result.inGroupId) {
    delete result.showPop;
    delete result.showSet;
    // 反推原始尺寸
    dealGroupItemWH(result, comData.value.filter(item => item.id === result.inGroupId)[0]);
  }
  delete result.btnPosition;
  delete result.s_width;
  delete result.s_height;
  delete result.s_x;
  delete result.s_y;
  delete result.syCopy;
  return result;
};
// 组件数据
const comData = ref([]);
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
// 重新计算所有组合的内边距宽高/边框（原始尺寸）
const dealItemPBWH = () => {
  if (comData.value.length > 0) {
    comData.value.filter(item => item.isGroup === true).forEach(item => {
      dealItemScaleWH(item);
    });
  }
};
// 计算当前组件实际间距数据（原始尺寸）
const setSpace = () => {
  if (props.xSpace !== null && props.xSpace !== undefined) {
    nowXSpace.value = props.xSpace / 2;
  } else {
    nowXSpace.value = 10 / 2;
  }
  if (props.ySpace !== null && props.ySpace !== undefined && props.ySpace >= 0) {
    nowYSpace.value = props.ySpace / 2;
  } else {
    nowYSpace.value = nowXSpace.value;
  }
  dealItemPBWH();
};
watch(
  () => [props.xSpace, props.ySpace],
  () => {
    setSpace();
  }
);
// 当前纵向间距实际值
const nowXSpace = ref(0);
// 当前横向间距实际值
const nowYSpace = ref(0);
setSpace();
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
const nowScale = ref(1);
// 当前css缩放比例
const nowCssScale = ref(1);
// 设置缩放比例
const setNowScale = (val) => {
  nowScale.value = val;
  if (val < props.cssScaleMin) {
    nowCssScale.value = props.cssScaleMin;
  } else if (val > props.cssScaleMax) {
    nowCssScale.value = props.cssScaleMax;
  } else {
    nowCssScale.value = val;
  }
  emit('changeScale', nowScale.value);
  emit('changeCssScale', props.seeModel ? nowCssScale.value : 1);
};
// 计算当前高度实际缩放
const getNowHScale = () => {
  return 1 + (nowScale.value - 1) * props.hScaleDiscount;
};
watch(
  () => props.seeModel,
  () => {
    // 保证抛出缩放为最新的
    setNowScale(nowScale.value);
  }
);
// 根据当前/指定缩放比例计算当前宽高（原始尺寸）
const dealItemScaleWH = (item, targetScale = null) => {
  if (targetScale) {
    item.width = item.width * targetScale;
    item.height = item.height * targetScale;
  } else {
    item.s_width = item.width * nowScale.value;
    item.s_height = item.height * getNowHScale();
  }
  const styles = getComputedStyle(pageRef.value);
  const borderWidth = parseInt(styles.getPropertyValue('--com-item-border-width').trim());
  const titHeight = parseInt(styles.getPropertyValue('--group-tit-height').trim());
  if (item.isGroup === true) {
    if (targetScale) {
      const multipleX = item.width;
      const multipleY = item.height - (item.groupTit ? titHeight : 0);
      item.groupData.forEach(one => {
        one.width = multipleX * one.groupW;
        one.height = multipleY * one.groupH;
        one.x = multipleX * one.groupX;
        one.y = multipleY * one.groupY;
      });
    } else {
      const multipleX = item.s_width - 2 * nowXSpace.value - 2 * borderWidth;
      const multipleY = item.s_height - 2 * nowYSpace.value - 2 * borderWidth - (item.groupTit ? titHeight : 0);
      item.groupData.forEach(one => {
        one.s_width = multipleX * one.groupW;
        one.s_height = multipleY * one.groupH;
        one.s_x = multipleX * one.groupX;
        one.s_y = multipleY * one.groupY;
      });
    }
  }
};
// 根据当前/指定缩放比例计算当前位置（原始尺寸）
const dealItemScaleXY = (item, targetScale = null) => {
  if (targetScale) {
    item.s_x = item.x * targetScale;
    item.s_y = item.y * targetScale;
  } else {
    item.s_x = item.x * nowScale.value;
    item.s_y = item.y * getNowHScale();
  }
};
// 根据当前已经缩放的宽高重设原数据（缩放尺寸）
const dealItemScaleReverseWH = (item) => {
  item.width = item.s_width / nowScale.value;
  item.height = item.s_height / getNowHScale();
  const styles = getComputedStyle(pageRef.value);
  const titHeight = parseInt(styles.getPropertyValue('--group-tit-height').trim());
  if (item.isGroup === true) {
    const multipleX = item.width;
    const multipleY = item.height - (item.groupTit ? titHeight : 0);
    item.groupData.forEach(one => {
      one.x = multipleX * one.groupX;
      one.y = multipleY * one.groupY;
    });
  }
};
// 根据当前已经缩放的位置重设原数据（缩放尺寸）
const dealItemScaleReverseXY = (item) => {
  item.x = item.s_x / nowScale.value;
  item.y = item.s_y / getNowHScale();
};
// 当前画布宽度
let pageWidth = null;
// 当前画布高度
let pageHeight = null;
// 占位高度（原始尺寸）
const heightBg = ref(0);
// 上辅助线位置
const auxiliaryTop = ref(null);
// 上下中间辅助线位置
const auxiliaryTopBottom = ref(null);
// 下辅助线位置
const auxiliaryBottom = ref(null);
// 左辅助线位置
const auxiliaryLeft = ref(null);
// 左右中间辅助线位置
const auxiliaryLeftRight = ref(null);
// 右辅助线位置
const auxiliaryRight = ref(null);
// 处理辅助线显示位置（缩放尺寸）
const dealAuxiliary = (obj) => {
  const position = getPureData(obj);
  if (!props.showAuxiliary || obj === null) {
    auxiliaryTop.value = null;
    auxiliaryTopBottom.value = null;
    auxiliaryBottom.value = null;
    auxiliaryLeft.value = null;
    auxiliaryLeftRight.value = null;
    auxiliaryRight.value = null;
  } else {
    const styles = getComputedStyle(pageRef.value);
    const auxiliaryWidth = parseInt(styles.getPropertyValue('--auxiliary-width').trim());
    // x轴符合条件的集合统计
    // 可能会出现小数的情况，移动时都是整数px
    const t1 = comData.value.filter(item => item.id !== position.id).map(item => Math.round(item.s_y));
    const t2 = comData.value.filter(item => item.id !== position.id).map(item => Math.round(item.s_y + item.s_height / 2));
    const t3 = comData.value.filter(item => item.id !== position.id).map(item => Math.round(item.s_y + item.s_height));
    const t = [...t1, ...t2, ...t3];
    t.sort();
    // 上边线计算
    if (t.filter(item => item === Math.round(position.s_y)).length > 0) {
      auxiliaryTop.value = position.s_y;
    } else {
      auxiliaryTop.value = null;
    }
    // 上下中间线计算
    if (t.filter(item => item === Math.round(position.s_y + position.s_height / 2)).length > 0) {
      auxiliaryTopBottom.value = position.s_y + position.s_height / 2;
    } else {
      auxiliaryTopBottom.value = null;
    }
    // 下边线计算
    if (t.filter(item => (item === Math.round(position.s_y + position.s_height))).length > 0) {
      auxiliaryBottom.value = position.s_y + position.s_height - auxiliaryWidth;
    } else {
      auxiliaryBottom.value = null;
    }
    // y轴符合条件的集合统计
    // 可能会出现小数的情况，移动时都是整数px
    const l1 = comData.value.filter(item => item.id !== position.id).map(item => Math.round(item.s_x));
    const l2 = comData.value.filter(item => item.id !== position.id).map(item => Math.round(item.s_x + item.s_width / 2));
    const l3 = comData.value.filter(item => item.id !== position.id).map(item => Math.round(item.s_x + item.s_width));
    const l = [...l1, ...l2, ...l3];
    l.sort();
    // 左边线计算
    if (l.filter(item => item === Math.round(position.s_x)).length > 0) {
      auxiliaryLeft.value = position.s_x;
    } else {
      auxiliaryLeft.value = null;
    }
    // 左右中间线计算
    if (l.filter(item => item === Math.round(position.s_x + position.s_width / 2)).length > 0) {
      auxiliaryLeftRight.value = position.s_x + position.s_width / 2;
    } else {
      auxiliaryLeftRight.value = null;
    }
    // 右边线计算
    if (l.filter(item => item === Math.round(position.s_x + position.s_width)).length > 0) {
      auxiliaryRight.value = position.s_x + position.s_width - auxiliaryWidth;
    } else {
      auxiliaryRight.value = null;
    }
  }
};
// 键盘操作终止当前拖拽/收缩
const closeDoing = () => {
  window.removeEventListener('keydown', closeDoing);
  if (dragSrc !== null) {
    dragEnd();
  } else if (resizeObj !== null) {
    resizeEnd();
  }
};
// 微调模式
const trimModel = ref(false);
// 开启微调模式
const openTrimModel = (id) => {
  let obj = null;
  obj = comData.value.filter(item => item.id === id)[0];
  // 必须处于可拖动状态
  if (obj && obj.static !== true && obj.dragable !== false) {
    trimModel.value = true;
    dragStart(comData.value.findIndex(item => item.id === id));
    // 不加延迟会触发当前次的按钮点击
    setTimeout(() => {
      window.addEventListener('click', closeTrimModel);
      window.addEventListener('keydown', trimMove);
    }, 50);
    emit('changeTrimModel', trimModel.value, outDataInit(comData.value.filter(item => item.id === obj.id)[0]));
  } else {
    try {
      console.error('未找到组件');
    } catch (error) { }
  }
};
// 键盘控制移动方向
const trimMove = (e) => {
  switch (e.keyCode) {
    // esc、enter、space
    case 13:
    case 27:
    case 32:
      closeTrimModel();
      break;
    // 向左
    case 37:
      dragIng('left');
      break;
    // 向上
    case 38:
      dragIng('top');
      break;
    // 向右
    case 39:
      dragIng('right');
      break;
    // 向下
    case 40:
      dragIng('bottom');
      break;
  }
};
// 关闭微调模式
const closeTrimModel = () => {
  window.removeEventListener('click', closeTrimModel);
  window.removeEventListener('keydown', trimMove);
  dragEnd();
  trimModel.value = false;
  emit('changeTrimModel', trimModel.value);
};
// 当前拖拽目标
let dragSrc = null;
// 横向初始差值
let differX = null;
// 纵向初始差值
let differY = null;
// 拖拽背景信息
const dragBg = ref({});
// 自动修复定时器
let dragResetInt = null;
// 启动延迟定时器
let dragDelayInt = null;
// 开始拖拽（缩放尺寸）
const dragStart = (e, index) => {
  clearTimeout(dragResetInt);
  clearTimeout(dragDelayInt);
  closeSettingPop();
  if (trimModel.value) {
    dragDelayInt = null;
    dragSrc = e;
    dragBg.value = getPureData(comData.value[dragSrc]);
    emit('dragStart', outDataInit(comData.value[dragSrc]));
    comData.value[dragSrc].move = true;
    dealAuxiliary(comData.value[dragSrc]);
  } else {
    const parentNode = closest(e.target, '.com-item');
    // 防止内部组件事件冒泡时触发异常
    if (parentNode) {
      dragDelayInt = setTimeout(() => {
        // 触发间隔太短时，会先触发定时器中的内容，再触发end事件
        dragDelayInt = null;
        dragSrc = index;
        dragBg.value = getPureData(comData.value[dragSrc]);
        emit('dragStart', outDataInit(comData.value[dragSrc]));
        comData.value[dragSrc].move = true;
        dealAuxiliary(comData.value[dragSrc]);
        differX = e.clientX - parentNode.offsetLeft;
        differY = e.clientY - parentNode.offsetTop;
        window.addEventListener('mousemove', dragIng);
        window.addEventListener('keydown', closeDoing);
      }, props.dragDelayTime);
      window.addEventListener('mouseup', dragEnd);
    }
  }
};
// 拖拽中（缩放尺寸）
const dragIng = (e) => {
  clearTimeout(dragResetInt);
  clearTimeout(dragDelayInt);
  dragDelayInt = null;
  let x = null;
  let y = null;
  if (trimModel.value) {
    const parentNode = findByClass(pageRef.value, 'i' + comData.value[dragSrc].id + 'd')[0];
    x = parentNode.offsetLeft;
    y = parentNode.offsetTop;
    switch (e) {
      case 'top':
        y -= 1;
        break;
      case 'bottom':
        y += 1;
        break;
      case 'left':
        x -= 1;
        break;
      case 'right':
        x += 1;
        break;
    }
  } else {
    x = e.clientX - differX;
    y = e.clientY - differY;
  }
  const resultX = x <= dealDragMax('left') ? dealDragMax('left') : x >= dealDragMax('right') ? dealDragMax('right') : x;
  const resultY = y <= dealDragMax('top') ? dealDragMax('top') : y >= dealDragMax('bottom') ? dealDragMax('bottom') : y;
  const moveX = resultX - comData.value[dragSrc].s_x;
  const moveY = resultY - comData.value[dragSrc].s_y;
  // 移动方向
  let direction = '';
  // 优先左右再上下
  if (moveX > 0) {
    direction = 'right';
  } else if (moveX < 0) {
    direction = 'left';
  } else if (moveY > 0) {
    direction = 'bottom';
  } else if (moveY < 0) {
    direction = 'top';
  }
  comData.value[dragSrc].s_x = resultX;
  comData.value[dragSrc].s_y = resultY;
  // 当前直接接触的组件
  let obstacleArr = filterCrossArr(getPureData(comData.value.filter(item => item.move !== true)), comData.value[dragSrc], true);
  if (obstacleArr.length === 0) {
    dragBg.value.s_x = resultX;
    dragBg.value.s_y = resultY;
  }
  // 与其他组件有重叠 
  else {
    switch (direction) {
      case 'top':
        const checkObj1 = deepCopy(dragBg.value);
        checkObj1.s_x = resultX;
        // 防止改变X后出现重叠（先左右出现交集再上就会出问题）
        if (filterCrossArr(getPureData(comData.value.filter(item => item.move !== true)), checkObj1, true).length === 0) {
          dragBg.value.s_x = resultX;
        }
        const obstacleArrCopy1 = obstacleArr.filter(item => {
          // 拖动元素高度大于等于接触元素时，拖动元素顶部距离接触元素顶部小于等于15px时触发
          // 拖动元素高度小于接触元素时，拖动元素顶部距离接触元素顶部小于等于自身（拖动元素）一半高度时触发
          return (comData.value[dragSrc].s_height >= item.s_height && (resultY - item.s_y) <= 15) || (comData.value[dragSrc].s_height < item.s_height && ((resultY - item.s_y) <= comData.value[dragSrc].s_height / 2));
        });
        if (obstacleArrCopy1.length > 0) {
          // 新需求移除横向间距后不可能向上，肯定是下移
          // 上方阻碍
          const topArr = filterCrossXArr(getPureData(comData.value.filter(item => item.move !== true && getFloat7(item.s_y + item.s_height) <= getFloat7(dragBg.value.s_y) && obstacleArrCopy1.filter(one => one.id === item.id).length === 0)), dragBg.value, true);
          // 需要下移的距离
          let needMove = comData.value[dragSrc].s_height;
          if (topArr.length === 0) {
            needMove -= Math.min(...obstacleArrCopy1.map(item => item.s_y));
          }
          // 全部下移
          if (obstacleArr.length === obstacleArrCopy1.length) {
            // 上移时碰到一个长横元素，并且其上方有两个有间距的元素，间距宽度正好能放下当前拖动元素
            dragBg.value.s_y = topArr.length === 0 ? 0 : Math.max(...topArr.map(item => (item.s_y + item.s_height)));
          }
          // 相交多个但只移动部分
          else {
            dragBg.value.s_y = Math.max(...topArr.map(item => (item.s_y + item.s_height)));
          }
          dragBg.value.s_x = resultX;
          if (needMove > 0) {
            // 需要下移的集合
            const moveArr = deepCopy(obstacleArrCopy1);
            obstacleArrCopy1.forEach(item => {
              // 下方阻碍
              const bottomArr = filterCrossXArr(comData.value.filter(one => one.move !== true && getFloat7(one.s_y) >= getFloat7(item.s_y + item.s_height)), item, true);
              bottomArr.forEach(one => {
                if (moveArr.filter(it => it.id === one.id).length === 0) {
                  moveArr.push(getPureData(one));
                }
              });
            });
            moveArr.forEach(item => {
              // 这时需要把要移动的拉平到相同水平再向下移动（如果在前面直接更改坐标，在获取bottomArr就可能已经出现了重叠的情况）
              if (obstacleArr.length !== obstacleArrCopy1.length && obstacleArrCopy1.filter(one => one.id === item.id).length === 1) {
                item.s_y = dragBg.value.s_y;
              }
              item.s_y += needMove;
              comData.value.filter(one => one.id === item.id)[0].s_y = item.s_y;
            });
          }
        }
        break;
      case 'bottom':
        const checkObj2 = deepCopy(dragBg.value);
        checkObj2.s_x = resultX;
        // 防止改变X后出现重叠（先左右出现交集再下就会出问题）
        if (filterCrossArr(getPureData(comData.value.filter(item => item.move !== true)), checkObj2, true).length === 0) {
          dragBg.value.s_x = resultX;
        }
        const obstacleArrCopy2 = obstacleArr.filter(item => {
          // 拖动元素高度大于等于接触元素时，拖动元素底部距离接触元素底部小于等于15px时触发
          // 拖动元素高度小于接触元素时，拖动元素底部距离接触元素底部小于等于接触元素一半高度时触发
          return (comData.value[dragSrc].s_height >= item.s_height && (item.s_y + item.s_height - resultY - comData.value[dragSrc].s_height) <= 15) || (comData.value[dragSrc].s_height < item.s_height && ((item.s_y + item.s_height - resultY - comData.value[dragSrc].s_height) <= item.s_height / 2));
        });
        if (obstacleArrCopy2.length > 0) {
          obstacleArrCopy2.forEach(item => {
            // 下移时可能出现多个上移的情况，相比之下上移就只会把拖动元素上移
            // 上方阻碍
            const topArr = filterCrossXArr(getPureData(comData.value.filter(one => one.move !== true && getFloat7(one.s_y + one.s_height) <= getFloat7(item.s_y))), item, true);
            item.s_y = topArr.length === 0 ? 0 : Math.max(...topArr.map(one => (one.s_y + one.s_height)));
            comData.value.filter(one => one.id === item.id)[0].s_y = item.s_y;
          });
          // 上方阻碍
          // 需要把现在处于叠加（只在需要有交互的元素中找，而不是全部）的元素计算进去（当拖动元素高度远小于接触元素时，接触元素上移后，目前处于重叠状态而不是完全的上下分离）
          const topArr = [...filterCrossArr(obstacleArrCopy2, comData.value[dragSrc], true), ...filterCrossXArr(getPureData(comData.value.filter(item => item.move !== true && getFloat7(item.s_y + item.s_height) <= getFloat7(comData.value[dragSrc].s_y + comData.value[dragSrc].s_height))), comData.value[dragSrc], true)];
          // 需要下移的距离
          let needMove = Math.max(...topArr.map(item => (item.s_y + item.s_height))) - dragBg.value.s_y;
          // 阴影最终Y轴位置
          dragBg.value.s_y = Math.max(...topArr.map(item => (item.s_y + item.s_height)));
          dragBg.value.s_x = resultX;
          // 正常情况下下移是交换位置，但是先左右再下这种就是强插进来
          if (needMove > 0) {
            // 需要下移的集合
            // 这里可能会出现平行的情况
            const moveArr = filterCrossXArr(comData.value.filter(item => item.move !== true && getFloat7(item.s_y) >= getFloat7(dragBg.value.s_y)), dragBg.value, true);
            getPureData(moveArr).forEach(item => {
              // 下方阻碍
              const bottomArr = filterCrossXArr(comData.value.filter(one => one.move !== true && getFloat7(one.s_y) >= getFloat7(item.s_y + item.s_height)), item, true);
              bottomArr.forEach(one => {
                if (moveArr.filter(it => it.id === one.id).length === 0) {
                  moveArr.push(getPureData(one));
                }
              });
            });
            moveArr.forEach(item => {
              item.s_y += needMove;
              comData.value.filter(one => one.id === item.id)[0].s_y = item.s_y;
            });
          }
        }
        break;
      case 'left':
      case 'right':
        const obstacleArrCopy3 = obstacleArr.filter(item => {
          // 左右接触距离大于等于2*横向间距
          // 先右后左/先左后右时必须在非边沿区域，即两一个边距离接触元素的边大于等于2*横向间距（防止在边沿先左后右的反复操作）
          // 实际编写时发现第二步的代码与第一步相同，故可不分左右
          // return ((direction === 'left' && (item.s_x + item.s_width - resultX) >= (nowXSpace.value * 2)) || (direction === 'right' && ((resultX + comData.value[dragSrc].s_width - item.s_x) >= (nowXSpace.value * 2))));
          return (item.s_x + item.s_width - resultX) >= (nowXSpace.value * 2) && (resultX + comData.value[dragSrc].s_width - item.s_x) >= (nowXSpace.value * 2);
        }).filter(item => {
          // 拖动元素顶部高于接触元素顶部，直接触发
          // 拖动元素顶部低于等于触发元素顶部，距离接触元素顶部距离小于等于15px时触发
          return (resultY < item.s_y) || (resultY >= item.s_y && (resultY - item.s_y) <= 15);
        }).sort((a, b) => {
          const x = getFloat7(a.s_y);
          const y = getFloat7(b.s_y);
          return x - y;
        });
        if (obstacleArrCopy3.length > 0) {
          dragBg.value.s_x = resultX;
          dragBg.value.s_y = Math.min(...obstacleArrCopy3.map(item => item.s_y));
        } else {
          let linObj = getPureData(comData.value[dragSrc]);
          linObj.s_y = Math.min(...obstacleArr.map(item => item.s_y)) - linObj.s_height;
          // 下面有位置时（夹在上下两个中间移动时）
          // 上面有位置时（夹在上下两个中间、底下的优先接触且上面有留空位置时）
          if (dragBg.value.s_y >= Math.min(...obstacleArr.map(item => (item.s_y + item.s_height))) || (linObj.s_y >= 0 && filterCrossArr(getPureData(comData.value.filter(item => item.move !== true)), linObj, true).length === 0)) {
            const checkObj3 = deepCopy(dragBg.value);
            checkObj3.s_x = resultX;
            // 防止改变X后出现重叠（先左右出现交集再下就会出问题）
            if (filterCrossArr(getPureData(comData.value.filter(item => item.move !== true)), checkObj3, true).length === 0) {
              dragBg.value.s_x = resultX;
            }
          }
        }
        // 新需求移除横向间距后不可能向上，肯定是下移
        obstacleArrCopy3.forEach(item => {
          // 不能为负数（向上移动）
          const needMove = (dragBg.value.s_y + dragBg.value.s_height - item.s_y) > 0 ? (dragBg.value.s_y + dragBg.value.s_height - item.s_y) : 0;
          // 需要下移的集合
          const moveArr = deepCopy([item]);
          // 下方阻碍
          const bottomArr = filterCrossXArr(comData.value.filter(one => one.move !== true && getFloat7(one.s_y) >= getFloat7(item.s_y + item.s_height)), item, true);
          bottomArr.forEach(one => {
            if (moveArr.filter(it => it.id === one.id).length === 0) {
              moveArr.push(getPureData(one));
            }
          });
          moveArr.forEach(one => {
            one.s_y += needMove;
            // 同步一下当前数组，不然计算needMove等数据的时候用的还是老数据
            if (obstacleArrCopy3.filter(it => it.id === one.id).length === 1) {
              obstacleArrCopy3.filter(it => it.id === one.id)[0].s_y = one.s_y;
            }
            comData.value.filter(it => it.id === one.id)[0].s_y = one.s_y;
          });
        });
        break;
    }
  }
  // 重新计算原始位置信息
  comData.value.forEach(item => {
    dealItemScaleReverseXY(item);
  });
  dealItemScaleReverseXY(dragBg.value);
  dealBg(false);
  dealAuxiliary(comData.value[dragSrc]);
  // 优化性能，不抛出当前对象
  emit('dragIng');
  dragBg.value.s_y = comData.value[dragSrc].syCopy;
  delete comData.value[dragSrc].syCopy;
};
// 结束拖拽（缩放尺寸）
const dragEnd = () => {
  window.removeEventListener('mouseup', dragEnd);
  clearTimeout(dragDelayInt);
  if (dragDelayInt) {
    dragDelayInt = null;
  } else {
    window.removeEventListener('mousemove', dragIng);
    delete comData.value[dragSrc].move;
    comData.value[dragSrc].s_x = dragBg.value.s_x;
    comData.value[dragSrc].s_y = dragBg.value.s_y;
    dealAuxiliary(null);
    // 重新计算原始位置信息
    comData.value.forEach(item => {
      dealItemScaleReverseXY(item);
    });
    dealBg();
    emit('dragEnd', outDataInit(comData.value[dragSrc]));
    dragSrc = null;
    closeDoing();
    // 修复偶现的拖拽后重叠问题
    dragResetInt = setTimeout(() => {
      dealBg();
    }, 500);
  }
};
// 计算拖拽最大边界（缩放尺寸）
const dealDragMax = (direction) => {
  switch (direction) {
    case 'top':
      return 0;
      break;
    case 'right':
      return pageWidth - nowXSpace.value * 2 - comData.value[dragSrc].s_width;
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
// 开始收缩（缩放尺寸）
const resizeStart = (e, obj, direction) => {
  closeSettingPop();
  resizeObj = obj;
  emit('resizeStart', outDataInit(resizeObj));
  resizeDirection = direction;
  startX = e.clientX;
  startY = e.clientY;
  startWidth = obj.s_width;
  startHeight = obj.s_height;
  startTop = obj.s_y;
  startLeft = obj.s_x;
  resizeObj.drag = true;
  dealAuxiliary(resizeObj);
  window.addEventListener('mousemove', resizeIng);
  window.addEventListener('mouseup', resizeEnd);
  window.addEventListener('keydown', closeDoing);
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
      const multipleX = resizeObj.s_width - 2 * nowXSpace.value - 2 * borderWidth;
      const multipleY = resizeObj.s_height - 2 * nowYSpace.value - 2 * borderWidth - (resizeObj.groupTit ? titHeight : 0);
      resizeObj.groupData.forEach(item => {
        item.s_width = multipleX * item.groupW;
        item.s_height = multipleY * item.groupH;
        item.s_x = multipleX * item.groupX;
        item.s_y = multipleY * item.groupY;
      });
    }
  };
  const realMinWidth = (typeof resizeObj.itemMinWidth === 'number' ? resizeObj.itemMinWidth : props.itemMinWidth) * nowScale.value;
  const realMinHeight = (typeof resizeObj.itemMinHeight === 'number' ? resizeObj.itemMinHeight : props.itemMinHeight) * getNowHScale();
  switch (resizeDirection) {
    case 'top-left':
      resizeObj.s_height = y_rever < realMinHeight ? realMinHeight : y_rever > dealResizeMax('top') ? dealResizeMax('top') : y_rever;
      resizeObj.s_y = y_rever < realMinHeight ? (startTop + startHeight - realMinHeight) : y_rever > dealResizeMax('top') ? 0 : t;
      resizeObj.s_width = x_rever < realMinWidth ? realMinWidth : x_rever > dealResizeMax('left') ? dealResizeMax('left') : x_rever;
      resizeObj.s_x = x_rever < realMinWidth ? (startLeft + startWidth - realMinWidth) : x_rever > dealResizeMax('left') ? 0 : l;
      dealGroup();
      break;
    case 'top':
      // 原始
      resizeObj.s_height = y_rever < realMinHeight ? realMinHeight : y_rever > dealResizeMax('top') ? dealResizeMax('top') : y_rever;
      resizeObj.s_y = y_rever < realMinHeight ? (startTop + startHeight - realMinHeight) : y_rever > dealResizeMax('top') ? 0 : t;
      dealGroup();
      break;
    case 'top-right':
      resizeObj.s_height = y_rever < realMinHeight ? realMinHeight : y_rever > dealResizeMax('top') ? dealResizeMax('top') : y_rever;
      resizeObj.s_y = y_rever < realMinHeight ? (startTop + startHeight - realMinHeight) : y_rever > dealResizeMax('top') ? 0 : t;
      resizeObj.s_width = x < realMinWidth ? realMinWidth : x > dealResizeMax('right') ? dealResizeMax('right') : x;
      dealGroup();
      break;
    case 'left':
      // 原始
      resizeObj.s_width = x_rever < realMinWidth ? realMinWidth : x_rever > dealResizeMax('left') ? dealResizeMax('left') : x_rever;
      resizeObj.s_x = x_rever < realMinWidth ? (startLeft + startWidth - realMinWidth) : x_rever > dealResizeMax('left') ? 0 : l;
      dealGroup();
      break;
    case 'right':
      // 原始
      resizeObj.s_width = x < realMinWidth ? realMinWidth : x > dealResizeMax('right') ? dealResizeMax('right') : x;
      dealGroup();
      break;
    case 'bottom-left':
      resizeObj.s_height = y < realMinHeight ? realMinHeight : y > dealResizeMax('bottom') ? dealResizeMax('bottom') : y;
      resizeObj.s_width = x_rever < realMinWidth ? realMinWidth : x_rever > dealResizeMax('left') ? dealResizeMax('left') : x_rever;
      resizeObj.s_x = x_rever < realMinWidth ? (startLeft + startWidth - realMinWidth) : x_rever > dealResizeMax('left') ? 0 : l;
      dealGroup();
      break;
    case 'bottom':
      // 原始
      resizeObj.s_height = y < realMinHeight ? realMinHeight : y > dealResizeMax('bottom') ? dealResizeMax('bottom') : y;
      dealGroup();
      break;
    case 'bottom-right':
      resizeObj.s_height = y < realMinHeight ? realMinHeight : y > dealResizeMax('bottom') ? dealResizeMax('bottom') : y;
      resizeObj.s_width = x < realMinWidth ? realMinWidth : x > dealResizeMax('right') ? dealResizeMax('right') : x;
      dealGroup();
      break;
  };
  // 重新计算原始宽高信息
  dealItemScaleReverseWH(resizeObj);
  // 当前直接接触的组件
  let obstacleArr = filterCrossArr(getPureData(comData.value.filter(item => item.drag !== true)), resizeObj, true);
  if (obstacleArr.length > 0) {
    obstacleArr.sort((a, b) => {
      const x = getFloat7(a.s_y);
      const y = getFloat7(b.s_y);
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
    dealItemScaleReverseXY(item);
  });
  dealBg(false);
  dealAuxiliary(resizeObj);
  // 优化性能，不抛出当前对象
  emit('resizeIng');
};
// 结束收缩（缩放尺寸）
const resizeEnd = (e) => {
  delete resizeObj.drag;
  resizeDirection = '';
  dealAuxiliary(null);
  window.removeEventListener('mousemove', resizeIng);
  window.removeEventListener('mouseup', resizeEnd);
  dealBg();
  emit('resizeEnd', outDataInit(resizeObj));
  resizeObj = null;
  closeDoing();
};
// 计算收缩最大边界（缩放尺寸）
const dealResizeMax = (direction) => {
  switch (direction) {
    case 'top':
      return startTop + startHeight;
      break;
    case 'left':
      return startLeft + startWidth;
      break;
    case 'right':
      return (pageWidth - nowXSpace.value * 2) - startLeft;
      break;
    case 'bottom':
      return 999999999;
      break;
  };
};
// 计算占位高度（原始尺寸）
const dealBg = (deal = true) => {
  // 修正横向间距，计算组合按钮位置，组件实际的坐标
  if (deal === true) {
    // 如果有重叠的情况，直接修复
    dealComStacking(comData.value, (arr, obj) => arr.filter(item => item.id !== obj.id));
  }
  dealSpace(deal);
  comData.value.forEach(item => {
    if (deal === true || (item.move !== true && item.drag !== true)) {
      dealItemScaleXY(item);
    }
  });
  if (deal === true) {
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
// 修正横向间距（原始尺寸）
const dealSpace = (deal = true) => {
  // 按y从小到大排列
  const copyData = getPureData(comData.value).sort((a, b) => {
    const x = getFloat7(a.y);
    const y = getFloat7(b.y);
    return x - y;
  });
  if (!deal) {
    // 单独处理缩放数据，占满缩放对象上方的空白
    if (resizeObj !== null) {
      const topArr = filterCrossXArr(deepCopy(copyData.filter(item => item.drag !== true && getFloat7(item.s_y + item.s_height) < getFloat7(resizeObj.s_y))), resizeObj);
      const obj = copyData.filter(item => item.drag === true)[0];
      if (obj) {
        if (topArr.length > 0) {
          obj.height += (obj.y - Math.max(...topArr.map(item => (item.y + item.height))));
          obj.y = Math.max(...topArr.map(item => (item.y + item.height)));
        } else {
          obj.height += obj.y;
          obj.y = 0;
        }
      }
    }
    // 单独处理拖拽数据，实际位置按照当前阴影位置计算 
    else if (dragSrc !== null) {
      const obj = copyData.filter(item => item.move === true)[0];
      if (obj) {
        obj.s_x = dragBg.value.s_x;
        obj.s_y = dragBg.value.s_y;
        dealItemScaleReverseXY(obj);
      }
    }
  }
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
  // 原数据赋值
  copyData.forEach(item => {
    if (deal === true || (item.move !== true && item.drag !== true)) {
      comData.value.filter(one => one.id === item.id)[0].y = item.y;
    }
    // 单独处理拖拽过程中的间距
    else if (item.move === true) {
      comData.value.filter(one => one.id === item.id)[0].syCopy = item.y * getNowHScale();
    }
  });
};
// 计算组合按钮位置（缩放尺寸）
const dealGroupSetting = () => {
  const arr = comData.value.filter(item => item.isGroup === true);
  if (arr.length > 0) {
    const styles = getComputedStyle(pageRef.value);
    const settingWidth = parseInt(styles.getPropertyValue('--setting-icon-group-width').trim());
    const settingHeight = parseInt(styles.getPropertyValue('--setting-icon-group-height').trim());
    arr.forEach(item => {
      if ((nowXSpace.value + item.s_x + item.s_width + settingWidth) > pageWidth) {
        if ((nowXSpace.value + item.s_x - settingWidth < 0)) {
          if (props.groupBtnPosMore) {
            if (nowYSpace.value + item.s_y - settingHeight < 0) {
              item.btnPosition = 'bottom';
            } else {
              item.btnPosition = 'top';
            }
          } else {
            item.btnPosition = 'center';
          }
        } else {
          item.btnPosition = 'left';
        }
      } else {
        item.btnPosition = 'right';
      }
    });
  }
};
// 画布尺寸改变监听器
const resizePageObserver = new ResizeObserver(entries => {
  // 存在padding
  changePageSize(pageWidth === entries[0].borderBoxSize[0].inlineSize ? null : entries[0].borderBoxSize[0].inlineSize, pageHeight === entries[0].borderBoxSize[0].blockSize ? null : entries[0].borderBoxSize[0].blockSize);
});
// 初始化
onMounted(() => {
  // 绑定监听
  resizePageObserver.observe(pageRef.value);
});
// 当次初始化唯一标识
const initTime = ref('');
// 此次父元素数量统计
let parentDomNum = 0;
// 此次子元素数量统计
let childDomNum = 0;
// dom定时器
let domInt = null;
// 正在init
let initIng = false;
// 初始化画布（原始尺寸）
const init = (historyData = [], historyWidth = null) => {
  // DOM检测
  clearInterval(domInt);
  initTime.value = new Date().getTime() + '';
  parentDomNum = 0;
  childDomNum = 0;
  historyData.forEach(item => {
    parentDomNum += 1;
    if (item.isGroup === true) {
      childDomNum += item.groupData.length;
    }
  });
  resetData();
  emit('domStart');
  comData.value = deepCopy(historyData);
  // 组合数据修复，这里只考虑减少的情况，新增必须走addItem方法
  comData.value.filter(item => item.isGroup === true).forEach(item => {
    if (item.groupData.length < 2) {
      removeGroup(item.id);
    } else {
      const result = dealGroupSize(item.groupData, item);
      updateItemAll(result);
    }
  });
  initIng = true;
  nextTick(() => {
    const obj = pageRef.value.getBoundingClientRect();
    // 进第一步必须有数据，空数据的时候会导致已存在缩放比例等数据，实际不应该有
    if (historyWidth !== null && historyWidth !== undefined && comData.value.length > 0) {
      setBaseWidth(historyWidth);
      setNowScale(obj.width / historyWidth);
    } else {
      setBaseWidth(comData.value.length > 0 ? obj.width : null);
      setNowScale(1);
    }
    comData.value.forEach(item => {
      dealItemScaleWH(item);
    });
    dealBg();
    // DOM检测
    domInt = setInterval(() => {
      if (findByClass(pageRef.value, initTime.value + 'p').length === parentDomNum && findByClass(pageRef.value, initTime.value + 'c').length === childDomNum) {
        console.log('dom加载完毕');
        clearInterval(domInt);
        emit('domReady');
      }
    }, 10);
    setTimeout(() => {
      initIng = false;
    }, 500);
  });
};
// 显示组合设置按钮
const showGroupSet = (item) => {
  item.showSet = true;
};
// 隐藏组合设置按钮
const hideGroupSet = (id) => {
  const pArr = comData.value.filter(item => item.id === id);
  if (pArr.length === 1) {
    delete pArr[0].showSet;
  } else {
    try {
      console.error('未找到组件');
    } catch (error) { }
  }
};
// 计算新增的一个组件的x,y，画布中数量至少一个（原始尺寸）
const dealMoreItemXY = (item, dataArr, maxWidth) => {
  const data1 = dealPositionData(item);
  const data2 = dealPositionData(dataArr);
  const res = findPosition(data2, data1, maxWidth);
  if (res) {
    item.x = res.x;
    item.y = res.y;
  }
  // 前面的行放不下时
  else {
    item.x = 0;
    const lin = data2.map(item => (item.y + item.height));
    if (lin.length > 0) {
      item.y = Math.max(...lin);
    } else {
      try {
        console.error('组件宽度太大');
      } catch (error) { }
    }
  }
  // 原计算逻辑（在最后一行平行位置添加）
  // const yTopArr = dataArr.map(item => item.y);
  // // 与最高的y持平
  // const yTop = Math.max(...yTopArr);
  // // 找到所有包含在当前y的组件
  // const xArr = dataArr.filter(item => (item.y + item.height) > yTop);
  // xArr.sort((a, b) => {
  //   const x = getFloat7(a.x);
  //   const y = getFloat7(b.x);
  //   return x - y;
  // });
  // // x在y的高度向右平铺
  // for (let i = 0; i < xArr.length; i++) {
  //   // 第一个
  //   if (i === 0) {
  //     // 判断左面是否有空位置
  //     if (xArr[i].x >= item.width) {
  //       item.y = yTop;
  //       item.x = 0;
  //       break;
  //     }
  //   }
  //   // 非最后一个，长度大于1
  //   if (xArr.length > 1 && i !== (xArr.length - 1)) {
  //     // 判断两个中间是否有空位置
  //     if ((xArr[i].x + xArr[i].width + item.width) <= xArr[i + 1].x) {
  //       item.y = yTop;
  //       item.x = xArr[i].x + xArr[i].width;
  //       break;
  //     }
  //   }
  //   // 最后一个
  //   if (i === (xArr.length - 1)) {
  //     // 判断右面是否有空位置
  //     if ((xArr[i].x + xArr[i].width + item.width) <= maxWidth) {
  //       item.y = yTop;
  //       item.x = xArr[i].x + xArr[i].width;
  //       break;
  //     }
  //   }
  // };
  // // 当行放不下
  // if (item.y == undefined) {
  //   item.x = 0;
  //   const lin = dataArr.map(item => (item.y + item.height));
  //   item.y = Math.max(...lin);
  // }
};
// 添加一个组件（原始尺寸）
const addItem = (obj, pid = null, keepPosition = false) => {
  const item = deepCopy(obj);
  const pArr = comData.value.filter(item => item.id === pid);
  if (!item.id) {
    item.id = new Date().getTime() + '';
  }
  // 子级找父级
  if (pid && pArr.length !== 1) {
    try {
      console.error('未找到组件');
    } catch (error) {
    } finally {
      return;
    }
  }
  // 重新计算原始尺寸坐标
  if (keepPosition !== true) {
    delete item.x;
    delete item.y;
    if (pid) {
      // 先反推原始尺寸，因为之前计算时已经删除了
      pArr[0].groupData.forEach(item => {
        dealGroupItemWH(item, pArr[0]);
      });
      dealMoreItemXY(item, pArr[0].groupData, pArr[0].width);
    } else {
      dealMoreItemXY(item, comData.value, (baseWidth || pageWidth) - nowXSpace.value * 2);
    }
  }
  // 添加到画布
  if (pid) {
    pArr[0].groupData.push(item);
    const result = dealGroupSize(pArr[0].groupData, pArr[0]);
    updateItemAll(result);
    // 递归解除重叠
    dealComStacking([result], (arr, obj) => arr.filter(item => item.id !== obj.id));
  } else {
    // 防止错误数据添加
    if (item.x !== undefined && item.y !== undefined) {
      if (comData.value.length === 0) {
        setBaseWidth(pageWidth);
      }
      // 计算实际大小
      dealItemScaleWH(item);
      comData.value.push(item);
    }
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
      return outDataInit(comData.value.filter(item => item.id === pid)[0].groupData.filter(item => item.id === obj.id)[0]);
    } else {
      return outDataInit(comData.value.filter(item => item.id === obj.id)[0]);
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
// 删除一个组件（原始尺寸）,第三个参数特殊处理组合时先清空页面逻辑的情况（不外抛）
const deleteItem = (id, pid = null, deelEmpty = true) => {
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
        updateItemAll(result);
      }
    } else {
      comData.value.splice(index, 1);
      if (comData.value.length === 0 && deelEmpty) {
        setBaseWidth(null);
        setNowScale(1);
      }
    }
    if (deelEmpty) {
      dealBg();
    }
  } else {
    try {
      console.error('未找到组件');
    } catch (error) { }
  }
};
// 更新一个组件部分数据（原始尺寸）
const updateItem = (obj) => {
  updateItemAll(obj, false);
};
// 更新一个组件全部数据（原始尺寸）
const updateItemAll = (obj, type = true) => {
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
      if (type) {
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
      }
      if (item.inGroupId) {
        if (type) {
          pArr[0].groupData[index] = item;
        } else {
          try {
            // 删除多余浮窗信息
            delete pArr[0].showPop;
            delete pArr[0].showSet;
            delete pArr[0].btnPosition;
            if (pArr[0].groupData) {
              pArr[0].groupData.forEach(one => {
                delete one.showPop;
                delete one.showSet;
              });
            }
            for (let keys in item) {
              const arr = keys.split('.');
              let res = pArr[0].groupData[index];
              for (let i = 0; i < arr.length; i++) {
                if (i === (arr.length - 1)) {
                  res[arr[i]] = item[keys];
                } else {
                  res = res[arr[i]];
                  if (!res) {
                    throw new Error(keys);
                  }
                }
              }
            }
          } catch (error) {
            try {
              console.error('数据key: ' + (error + '').replace('Error: ', '') + ' 不存在');
            } catch (error) { }
          }
        }
        // 计算实际大小
        dealItemScaleWH(pArr[0]);
      } else {
        if (type) {
          comData.value[index] = item;
        } else {
          try {
            // 删除多余浮窗信息
            delete comData.value[index].showPop;
            delete comData.value[index].showSet;
            delete comData.value[index].btnPosition;
            if (comData.value[index].groupData) {
              comData.value[index].groupData.forEach(one => {
                delete one.showPop;
                delete one.showSet;
              });
            }
            for (let keys in item) {
              const arr = keys.split('.');
              let res = comData.value[index];
              for (let i = 0; i < arr.length; i++) {
                if (i === (arr.length - 1)) {
                  res[arr[i]] = item[keys];
                } else {
                  res = res[arr[i]];
                  if (!res) {
                    throw new Error(keys);
                  }
                }
              }
            }
          } catch (error) {
            try {
              console.error('数据key: ' + (error + '').replace('Error: ', '') + ' 不存在');
            } catch (error) { }
          }
        }
        // 计算实际大小
        dealItemScaleWH(comData.value[index]);
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
// 锁定/解除一个组件功能
const toggleLockItem = (id, val = false) => {
  let obj = null;
  obj = comData.value.filter(item => item.id === id)[0];
  if (obj) {
    if (typeof val === 'boolean') {
      obj.static = val;
    }
    // 排除null
    else if (val && typeof val === 'object') {
      if (typeof val.static === 'boolean') {
        obj.static = val.static;
      }
      if (typeof val.dragable === 'boolean') {
        obj.dragable = val.dragable;
      }
      if (typeof val.resizable === 'boolean') {
        obj.resizable = val.resizable;
      }
    }
    return outDataInit(comData.value.filter(item => item.id === obj.id)[0]);
  } else {
    try {
      console.error('未找到组件');
    } catch (error) {
    } finally {
      return null;
    }
  }
};
// 记录画布尺寸（原始尺寸）
const changePageSize = (width, height) => {
  if (width !== null) {
    pageWidth = width;
    // 防止init时widh监听正好触发
    if (!initIng) {
      setNowScale(baseWidth && pageWidth ? (width / baseWidth) : 1);
      comData.value.forEach(item => {
        dealItemScaleWH(item);
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
    emit('openSetMenu', outDataInit(item));
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
// 组合内容变更后计算组合内容区的宽高、内容区的最新位置等信息（原始尺寸）
const dealGroupSize = (childData, parentObj) => {
  const childList = deepCopy(childData);
  const result = deepCopy(parentObj);
  // 压缩纵向间距
  childList.sort((a, b) => {
    const x = getFloat7(a.x);
    const y = getFloat7(b.x);
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
      const linLeft = getPureData(childList.slice(0, i + 1));
      if (childList[i + 1].x > Math.max(...linLeft.map(item => (item.x + item.width)))) {
        const space = childList[i + 1].x - Math.max(...linLeft.map(item => (item.x + item.width)));
        for (let x = (i + 1); x < childList.length; x++) {
          childList[x].x -= space;
        };
      }
    }
  };
  // 压缩横向间距
  childList.sort((a, b) => {
    const x = getFloat7(a.y);
    const y = getFloat7(b.y);
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
      const linTop = getPureData(childList.slice(0, i + 1));
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
    // 判断当前元素是否在右上角
    item.isObstacle = (item.x + item.width) === maxWidth && item.y === 0;
    delete item.width;
    delete item.height;
  });
  const styles = getComputedStyle(pageRef.value);
  const titHeight = parseInt(styles.getPropertyValue('--group-tit-height').trim());
  result.width = maxWidth;
  result.height = maxHeight + (result.groupTit ? titHeight : 0);
  result.groupData = [...childList];
  return result;
};
// 重新计算组合内组件的宽高（原始尺寸）
const dealGroupItemWH = (item, pObj) => {
  const styles = getComputedStyle(pageRef.value);
  const titHeight = parseInt(styles.getPropertyValue('--group-tit-height').trim());
  item.width = pObj.width * item.groupW;
  item.height = (pObj.height - (pObj.groupTit ? titHeight : 0)) * item.groupH;
};
// 组合边框大小改变重新计算组件大小（原始尺寸）
const changeGroupBorder = () => {
  nextTick(() => {
    dealItemPBWH();
  });
};
// 生成组合（原始尺寸）
const addGroup = () => {
  let arr = comData.value.filter(item => item.checked);
  if (arr.length > 1) {
    arr = props.beforeAddGroup(deepCopy(arr));
    if (typeof arr === 'object' && arr instanceof Array && arr.length > 0 && arr.filter(item => item.id).length === arr.length) {
      const obj = {
        id: new Date().getTime() + 'G',
        isGroup: true,
        groupTit: ''
      };
      const result = dealGroupSize(arr, obj);
      result.groupData.forEach(item => {
        deleteItem(item.id, null, false);
      });
      addItem(result);
      closeGroup();
      return outDataInit(comData.value.filter(item => item.id === result.id)[0]);
    } else {
      try {
        console.error('自定义方法抛出数据格式不正确');
      } catch (error) {
      } finally {
        return null;
      }
    }
  } else {
    closeGroup();
    return null;
  }
};
// 从组合中移出某一项（原始尺寸）
const removeGroupItem = (id, pid) => {
  const pObj = comData.value.filter(item => item.id === pid)[0];
  if (pObj) {
    let lin = pObj.groupData.filter(item => item.id === id)[0];
    if (lin) {
      if (pObj.groupData.length === 2) {
        const result = removeGroup(pid);
        return result;
      } else {
        lin = props.beforeRemoveGroup(deepCopy([lin]));
        if (typeof lin === 'object' && lin instanceof Array && lin.length === 1 && lin.filter(item => item.id).length === 1) {
          lin = lin[0];
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
          return [outDataInit(comData.value.filter(item => item.id === id)[0])];
        } else {
          try {
            console.error('自定义方法抛出数据格式不正确');
          } catch (error) {
          } finally {
            return [];
          }
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
    let reg = true;
    try {
      lin.groupData.forEach(item => {
        item = props.beforeRemoveGroup(deepCopy([lin]));
        if (typeof item === 'object' && item instanceof Array && item.length === 1 && item.filter(one => one.id).length === 1) {
          item = item[0];
        } else {
          reg = false;
          throw new Error();
        }
      });
    } catch (error) {
      console.error('自定义方法抛出数据格式不正确');
    }
    if (reg) {
      deleteItem(lin.id, null, false);
      lin.groupData.forEach(item => {
        // 反推原始尺寸
        dealGroupItemWH(item, lin);
        item.x += lin.x;
        item.y += lin.y;
        delete item.inGroupId;
        delete item.groupW;
        delete item.groupH;
        delete item.groupX;
        delete item.groupY;
        delete item.isObstacle;
        ids.push(item.id);
        addItem(item, null, true);
      });
      let result = [];
      ids.forEach(item => {
        result.push(outDataInit(comData.value.filter(one => one.id === item)[0]));
      });
      return result;
    } else {
      return [];
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
        lin.s_height -= titHeight * getNowHScale();
      }
      // 添加了标题
      if (!lin.groupTit && tit) {
        lin.height += titHeight;
        lin.s_height += titHeight * getNowHScale();
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
// 重置当前画布数据
const resetData = () => {
  comData.value = [];
  setBaseWidth(null);
  setNowScale(1);
  heightBg.value = 0;
};
// 获取当前画布数据（原始尺寸）
const getData = (targetWidth = null) => {
  return new Promise((resolve, reject) => {
    // 删除多余状态变量
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
    // 指定目标基准
    if (targetWidth && baseWidth) {
      data.forEach(item => {
        dealItemScaleWH(item, targetWidth / baseWidth);
        dealItemScaleXY(item, targetWidth / baseWidth);
      });
    }
    resolve({ data, width: targetWidth || baseWidth });
  });
};
onBeforeUnmount(() => {
  // 移除监听
  resizePageObserver.unobserve(pageRef.value);
  window.removeEventListener('click', closeSettingPop);
  window.removeEventListener('click', closeTrimModel);
  window.removeEventListener('keydown', trimMove);
  window.removeEventListener('keydown', closeDoing);
});
defineExpose({ init, addItem, copyItem, deleteItem, updateItem, toggleLockItem, hideGroupSet, openGroup, closeGroup, changeGroupBorder, addGroup, removeGroupItem, removeGroup, changeGroupTit, openTrimModel, closeTrimModel, resetData, getData });
</script>
<style lang="scss">
@use "style/index.scss" as *;
</style>
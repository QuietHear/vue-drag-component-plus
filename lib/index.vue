/*
* @Author: aFei
* @Date: 2024-08-05 13:45:00
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2024-09-14 10:00:22
*/
<template>
  <div class="vue-drag-component-plus" ref="pageRef">
    <!-- 滚动区 -->
    <div class="content-box" ref="boxRef">
      <!-- 组件项 -->
      <div
        :class="['com-item', seeModel || isGrouping || item.static === true || item.dragable === false ? '' : 'can-drag', item.move ? 'is-move' : '', item.drag ? 'is-drag' : '', item.showPop ? 'on-top' : '', seeModel ? 'no-hover' : '']"
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
            <div class="group-item-tit" :title="item.groupTit" v-if="item.groupTit">
              {{ item.groupTit }}
            </div>
            <!-- 组合子项内容 -->
            <div :class="['group-item-content', item.groupTit ? '' : 'full']">
              <div :class="['com-item-content-child', one.isObstacle ? 'else' : '']" :style="{
                width: one.width + 'px',
                height: one.height + 'px',
                top: one.y + 'px',
                left: one.x + 'px'
              }" v-for="(one, oneIndex) in item.groupData" :key="oneIndex">
                <!-- 内容 -->
                <slot name="item" :data="one">
                  <p>{{ Math.round(one.width * 100) / 100 }},{{ Math.round(one.height * 100) / 100 }}</p>
                  <p>{{ Math.round(one.x * 100) / 100 }},{{ Math.round(one.y * 100) / 100 }}</p>
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
            </div>
          </template>
          <!-- 普通内容 -->
          <template v-else>
            <slot name="item" :data="item">
              <p>{{ Math.round(item.width * 100) / 100 }},{{ Math.round(item.height * 100) / 100 }}</p>
              <p>{{ Math.round(item.x * 100) / 100 }},{{ Math.round(item.y * 100) / 100 }}</p>
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
          <div :class="['setting-box-pop', item.isGroup === true ? 'special' : '']" @mousedown.prevent.stop="null"
            v-if="item.showPop">
            <slot name="setPopSpecial" :data="deepCopy(item)" v-if="item.isGroup === true">
              <div class="setting-box-pop-item" @click="emit('showTitPop', item.groupTit, item.id)" v-if="!hideTit">
                设置组合标题</div>
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
const emit = defineEmits(["showGroup", "updateChecked", "showTitPop"]);
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
// 开始拖拽
const dragStart = (e, index) => {
  closeSettingPop();
  dragSrc = index;
  dragBg.value = deepCopy(comData.value[dragSrc]);
  comData.value[dragSrc].move = true;
  const parentNode = closest(e.target, '.com-item');
  differX = e.clientX - parentNode.offsetLeft;
  differY = e.clientY - parentNode.offsetTop;
  window.addEventListener('mousemove', dragIng);
  window.addEventListener('mouseup', dragEnd);
};
// 拖拽中
const dragIng = (e) => {
  const x = e.clientX - differX;
  const y = e.clientY - differY;
  const resultX = x <= dealDragMax('left') ? dealDragMax('left') : x >= dealDragMax('right') ? dealDragMax('right') : x;
  const resultY = y <= dealDragMax('top') ? dealDragMax('top') : y >= dealDragMax('bottom') ? dealDragMax('bottom') : y;
  const moveX = resultX - comData.value[dragSrc].x;
  const moveY = resultY - comData.value[dragSrc].y;
  // 移动方向
  const direction = `${moveX > 0 ? 'right' : moveX < 0 ? 'left' : ''}_${moveY > 0 ? 'bottom' : moveY < 0 ? 'top' : ''}`;
  if (resultY > comData.value[dragSrc].y && resultY > (pageHeight - comData.value[dragSrc].height - 30)) {
    boxRef.value.scrollBy(0, 20);
  }
  if (resultY < comData.value[dragSrc].y && (resultY - boxRef.value.scrollTop) < 30) {
    boxRef.value.scrollBy(0, -20);
  }
  comData.value[dragSrc].x = resultX;
  comData.value[dragSrc].y = resultY;
  // 当前直接接触的组件
  let obstacleArr = deepCopy(comData.value.filter(item => item.move !== true)
    .filter(item => (item.x < resultX && (item.x + item.width) > resultX) || item.x === resultX || (item.x > resultX && item.x < (resultX + comData.value[dragSrc].width)))
    .filter(item => (item.y < resultY && (item.y + item.height) > resultY) || item.y === resultY || (item.y > resultY && item.y < (resultY + comData.value[dragSrc].height))));
  if (obstacleArr.length === 0) {
    dragBg.value.x = resultX;
    dragBg.value.y = resultY;
  }
  // 与其他组件有重叠 
  // TODO 未考虑static的情况
  else {
    if (direction.indexOf('top') !== -1) {
      obstacleArr = obstacleArr.filter(item => item.y < dragBg.value.y);
      // 修复保持上方元素底部在一条水平线上
      const rightMin = Math.min(...obstacleArr.map(item => (item.y + item.height)));
      obstacleArr.forEach(item => {
        if (Math.abs(item.y + item.height - rightMin) < 5) {
          item.y = rightMin - item.height;
        }
      });
      // 移动距离
      let num = dragBg.value.y - resultY;
      // 能移动
      let needMove = true;
      // 上方所有接触元素
      let topArr = [...obstacleArr];
      // 向上查找挨着的元素
      const topDeep = (obj) => {
        const list = deepCopy(comData.value.filter(item => item.move !== true && (item.y + item.height - obj.y) <= (num + 3) && (item.y + item.height - obj.y) >= 0)
          .filter(item => (item.x < obj.x && (item.x + item.width) > obj.x) || (item.x >= obj.x && item.x < (obj.x + obj.width))));
        list.forEach(item => {
          // 修正挨着但是仍然位置有偏差的
          if ((item.y + item.height) !== obj.y) {
            item.y = obj.y - item.height;
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
        const x = a.y;
        const y = b.y;
        return x - y;
      });
      if (topArr.length === 0 || topArr.filter(item => item.y === 0).length > 0) {
        needMove = false;
      }
      // 先看能不能上移
      if (needMove) {
        let canMove = 0;
        const topMax = topArr.filter(item => item.y === topArr[0].y);
        topMax.forEach(item => {
          const list = deepCopy(comData.value.filter(one => one.move !== true && (one.y + one.height) < item.y)
            .filter(one => (one.x < item.x && (one.x + one.width) > item.x) || (one.x >= item.x && one.x < (item.x + item.width))));
          list.forEach(one => {
            if ((one.y + one.height) > canMove) {
              canMove = one.y + one.height;
            }
          });
        });
        canMove = topArr[0].y - canMove;
        if (canMove < num) {
          num = canMove;
        }
        topArr.forEach(item => {
          item.y -= num;
          comData.value.filter(one => one.id === item.id)[0].y = item.y;
        });
        dragBg.value.x = resultX;
        dragBg.value.y = comData.value.filter(item => item.id === topArr[topArr.length - 1].id)[0].y + comData.value.filter(item => item.id === topArr[topArr.length - 1].id)[0].height;
      }
      // 不行再下移 
      else {
        const minY = Math.min(...obstacleArr.map(item => item.y));
        // 进行下移
        if ((minY - resultY) >= -7 && (minY - resultY) < 7) {
          // 下移无阻拦
          obstacleArr.filter(item => item.y < dragBg.value.y).forEach(item => {
            item.y += comData.value[dragSrc].height;
            comData.value.filter(one => one.id === item.id)[0].y = item.y;
            // 递归解除下移出现的重叠（把接触的元素全部下移）
            const deepDown = (obj) => {
              const lin = comData.value.filter(one => one.move !== true && one.id !== obj.id)
                .filter(one => (one.x < obj.x && (one.x + one.width) > obj.x) || one.x === obj.x || (one.x > obj.x && one.x < (obj.x + obj.width)))
                .filter(one => (one.y < obj.y && (one.y + one.height) > obj.y) || one.y === obj.y || (one.y > obj.y && one.y < (obj.y + obj.height)));
              lin.forEach(one => {
                one.y = obj.y + obj.height;
                deepDown(one);
              });
            };
            deepDown(item);
          });
          dragBg.value.x = resultX;
          dragBg.value.y = minY;
        }
      }
      // 重置接触元素
      obstacleArr = deepCopy(comData.value.filter(item => item.move !== true)
        .filter(item => (item.x < resultX && (item.x + item.width) > resultX) || item.x === resultX || (item.x > resultX && item.x < (resultX + comData.value[dragSrc].width)))
        .filter(item => (item.y < resultY && (item.y + item.height) > resultY) || item.y === resultY || (item.y > resultY && item.y < (resultY + comData.value[dragSrc].height))));
    }
    if (direction.indexOf('bottom') !== -1) {
      const maxY = Math.max(...obstacleArr.map(item => (item.y + item.height)));
      if ((maxY - (resultY + comData.value[dragSrc].height)) >= -7 && (maxY - (resultY + comData.value[dragSrc].height)) < 7) {
        let moveBg = true;
        obstacleArr.filter(item => item.y > dragBg.value.y).forEach(item => {
          item.y -= comData.value[dragSrc].height;
          comData.value.filter(one => one.id === item.id)[0].y = item.y;
          // 先把自己下移到不会接触的地方
          const lin = comData.value.filter(one => one.move !== true && one.id !== item.id)
            .filter(one => (one.x < item.x && (one.x + one.width) > item.x) || one.x === item.x || (one.x > item.x && one.x < (item.x + item.width)))
            .filter(one => (one.y < item.y && (one.y + one.height) > item.y) || one.y === item.y || (one.y > item.y && one.y < (item.y + item.height)));
          if (lin.length > 0) {
            item.y = Math.max(...lin.map(one => (one.y + one.height)));
            comData.value.filter(one => one.id === item.id)[0].y = item.y;
            // 递归解除下移出现的重叠（把接触的元素全部下移）
            const deepDown = (obj) => {
              const lin = comData.value.filter(one => one.id !== obj.id)
                .filter(one => (one.x < obj.x && (one.x + one.width) > obj.x) || one.x === obj.x || (one.x > obj.x && one.x < (obj.x + obj.width)))
                .filter(one => (one.y < obj.y && (one.y + one.height) > obj.y) || one.y === obj.y || (one.y > obj.y && one.y < (obj.y + obj.height)));
              lin.forEach(one => {
                one.y = obj.y + obj.height;
                if (one.move === true) {
                  dragBg.value.y = one.y;
                  moveBg = false;
                }
                deepDown(one);
              });
            };
            deepDown(item);
          }
        });
        dragBg.value.x = resultX;
        if (moveBg) {
          dragBg.value.y = maxY - comData.value[dragSrc].height;
        }
        // 重置接触元素
        obstacleArr = deepCopy(comData.value.filter(item => item.move !== true)
          .filter(item => (item.x < resultX && (item.x + item.width) > resultX) || item.x === resultX || (item.x > resultX && item.x < (resultX + comData.value[dragSrc].width)))
          .filter(item => (item.y < resultY && (item.y + item.height) > resultY) || item.y === resultY || (item.y > resultY && item.y < (resultY + comData.value[dragSrc].height))));
      }
    }
    if ((((direction.indexOf('top') !== -1 || direction.indexOf('bottom') !== -1) && (direction.indexOf('right') !== -1 || direction.indexOf('left') !== -1) && Math.abs(moveX) > 8) || (direction.indexOf('top') === -1 && direction.indexOf('bottom') === -1 && (direction.indexOf('right') !== -1 || direction.indexOf('left') !== -1))) && obstacleArr.length > 0) {
      obstacleArr.sort((a, b) => {
        const x = a.y;
        const y = b.y;
        return x - y;
      });
      let canTop = true;
      for (let i = 0; i < obstacleArr.length; i++) {
        // 先逐个判断够不够上移
        if (canTop) {
          const copyData = deepCopy(comData.value);
          for (let x = 0; x <= i; x++) {
            let max = null;
            const topList = copyData.filter(item => item.move !== true && item.y < obstacleArr[x].y)
              .filter(item => (item.x < obstacleArr[x].x && (item.x + item.width) > obstacleArr[x].x) || item.x === obstacleArr[x].x || (item.x > obstacleArr[x].x && item.x < (obstacleArr[x].x + obstacleArr[x].width)));
            if (topList.length === 0) {
              max = 0;
            } else {
              max = Math.max(...topList.map(item => (item.y + item.height)));
            }
            // 最后一个
            if (x === i) {
              if (obstacleArr[x].y - (obstacleArr[x].y + obstacleArr[x].height - resultY) < max) {
                canTop = false;
                break;
              }
            } else {
              if (obstacleArr[x].y - obstacleArr[i].height < max) {
                canTop = false;
                break;
              } else {
                copyData.filter(item => item.id === obstacleArr[x].id)[0].y -= obstacleArr[i].height;
              }
            }
          }
        }
        // 可以就上移
        if (canTop) {
          obstacleArr[i].y -= obstacleArr[i].y + obstacleArr[i].height - resultY;
          comData.value.filter(one => one.id === obstacleArr[i].id)[0].y = obstacleArr[i].y;
          for (let x = i; x > 0; x--) {
            obstacleArr[i - 1].y -= obstacleArr[i].height;
            comData.value.filter(one => one.id === obstacleArr[i - 1].id)[0].y = obstacleArr[i - 1].y;
          }
        }
        // 不够就下移
        else {
          obstacleArr.filter(item => item.id === obstacleArr[i].id).forEach(item => {
            item.y += (comData.value[dragSrc].y + comData.value[dragSrc].height - item.y);
            comData.value.filter(one => one.id === item.id)[0].y = item.y;
            // 递归解除重叠
            const deepDown = (obj) => {
              const lin = comData.value.filter(one => one.move !== true && one.id !== obj.id)
                .filter(one => (one.x < obj.x && (one.x + one.width) > obj.x) || one.x === obj.x || (one.x > obj.x && one.x < (obj.x + obj.width)))
                .filter(one => (one.y < obj.y && (one.y + one.height) > obj.y) || one.y === obj.y || (one.y > obj.y && one.y < (obj.y + obj.height)));
              lin.forEach(one => {
                one.y = obj.y + obj.height;
                deepDown(one);
              });
            };
            deepDown(item);
          });
        }
      }
      dragBg.value.x = resultX;
    }
  }
  dealBg(false);
};
// 结束拖拽
const dragEnd = () => {
  window.removeEventListener('mousemove', dragIng);
  window.removeEventListener('mouseup', dragEnd);
  delete comData.value[dragSrc].move;
  comData.value[dragSrc].x = dragBg.value.x;
  comData.value[dragSrc].y = dragBg.value.y;
  dragSrc = null;
  dealBg();
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
  const styles = getComputedStyle(pageRef.value);
  const borderWidth = parseInt(styles.getPropertyValue('--com-item-border-width').trim());
  const titHeight = parseInt(styles.getPropertyValue('--group-tit-height').trim());
  switch (resizeDirection) {
    case 'top-left':
      resizeObj.height = y_rever < props.itemMinHeight ? props.itemMinHeight : y_rever > dealResizeMax('top') ? dealResizeMax('top') : y_rever;
      resizeObj.y = y_rever < props.itemMinHeight ? (startTop + startHeight - props.itemMinHeight) : y_rever > dealResizeMax('top') ? topObstacle : t;
      resizeObj.width = x_rever < props.itemMinWidth ? props.itemMinWidth : x_rever > dealResizeMax('left') ? dealResizeMax('left') : x_rever;
      resizeObj.x = x_rever < props.itemMinWidth ? (startLeft + startWidth - props.itemMinWidth) : x_rever > dealResizeMax('left') ? leftObstacle : l;
      if (resizeObj.isGroup === true) {
        const multipleX = resizeObj.width - 2 * borderWidth;
        const multipleY = resizeObj.height - 2 * borderWidth - (resizeObj.groupTit ? titHeight : 0);
        resizeObj.groupData.forEach(item => {
          item.width = multipleX * item.groupW;
          item.x = multipleX * item.groupX;
          item.height = multipleY * item.groupH;
          item.y = multipleY * item.groupY;
        });
      }
      break;
    case 'top':
      // 原始
      resizeObj.height = y_rever < props.itemMinHeight ? props.itemMinHeight : y_rever > dealResizeMax('top') ? dealResizeMax('top') : y_rever;
      resizeObj.y = y_rever < props.itemMinHeight ? (startTop + startHeight - props.itemMinHeight) : y_rever > dealResizeMax('top') ? topObstacle : t;
      if (resizeObj.isGroup === true) {
        const multipleY = resizeObj.height - 2 * borderWidth - (resizeObj.groupTit ? titHeight : 0);
        resizeObj.groupData.forEach(item => {
          item.height = multipleY * item.groupH;
          item.y = multipleY * item.groupY;
        });
      }
      break;
    case 'top-right':
      resizeObj.height = y_rever < props.itemMinHeight ? props.itemMinHeight : y_rever > dealResizeMax('top') ? dealResizeMax('top') : y_rever;
      resizeObj.y = y_rever < props.itemMinHeight ? (startTop + startHeight - props.itemMinHeight) : y_rever > dealResizeMax('top') ? topObstacle : t;
      resizeObj.width = x < props.itemMinWidth ? props.itemMinWidth : x > dealResizeMax('right') ? dealResizeMax('right') : x;
      if (resizeObj.isGroup === true) {
        const multipleX = resizeObj.width - 2 * borderWidth;
        const multipleY = resizeObj.height - 2 * borderWidth - (resizeObj.groupTit ? titHeight : 0);
        resizeObj.groupData.forEach(item => {
          item.width = multipleX * item.groupW;
          item.x = multipleX * item.groupX;
          item.height = multipleY * item.groupH;
          item.y = multipleY * item.groupY;
        });
      }
      break;
    case 'left':
      // 原始
      resizeObj.width = x_rever < props.itemMinWidth ? props.itemMinWidth : x_rever > dealResizeMax('left') ? dealResizeMax('left') : x_rever;
      resizeObj.x = x_rever < props.itemMinWidth ? (startLeft + startWidth - props.itemMinWidth) : x_rever > dealResizeMax('left') ? leftObstacle : l;
      if (resizeObj.isGroup === true) {
        const multipleX = resizeObj.width - 2 * borderWidth;
        resizeObj.groupData.forEach(item => {
          item.width = multipleX * item.groupW;
          item.x = multipleX * item.groupX;
        });
      }
      break;
    case 'right':
      // 原始
      resizeObj.width = x < props.itemMinWidth ? props.itemMinWidth : x > dealResizeMax('right') ? dealResizeMax('right') : x;
      if (resizeObj.isGroup === true) {
        const multipleX = resizeObj.width - 2 * borderWidth;
        resizeObj.groupData.forEach(item => {
          item.width = multipleX * item.groupW;
          item.x = multipleX * item.groupX;
        });
      }
      break;
    case 'bottom-left':
      resizeObj.height = y < props.itemMinHeight ? props.itemMinHeight : y > dealResizeMax('bottom') ? dealResizeMax('bottom') : y;
      resizeObj.width = x_rever < props.itemMinWidth ? props.itemMinWidth : x_rever > dealResizeMax('left') ? dealResizeMax('left') : x_rever;
      resizeObj.x = x_rever < props.itemMinWidth ? (startLeft + startWidth - props.itemMinWidth) : x_rever > dealResizeMax('left') ? leftObstacle : l;
      if (resizeObj.isGroup === true) {
        const multipleX = resizeObj.width - 2 * borderWidth;
        const multipleY = resizeObj.height - 2 * borderWidth - (resizeObj.groupTit ? titHeight : 0);
        resizeObj.groupData.forEach(item => {
          item.width = multipleX * item.groupW;
          item.x = multipleX * item.groupX;
          item.height = multipleY * item.groupH;
          item.y = multipleY * item.groupY;
        });
      }
      break;
    case 'bottom':
      // 原始
      resizeObj.height = y < props.itemMinHeight ? props.itemMinHeight : y > dealResizeMax('bottom') ? dealResizeMax('bottom') : y;
      if (resizeObj.isGroup === true) {
        const multipleY = resizeObj.height - 2 * borderWidth - (resizeObj.groupTit ? titHeight : 0);
        resizeObj.groupData.forEach(item => {
          item.height = multipleY * item.groupH;
          item.y = multipleY * item.groupY;
        });
      }
      break;
    case 'bottom-right':
      resizeObj.height = y < props.itemMinHeight ? props.itemMinHeight : y > dealResizeMax('bottom') ? dealResizeMax('bottom') : y;
      resizeObj.width = x < props.itemMinWidth ? props.itemMinWidth : x > dealResizeMax('right') ? dealResizeMax('right') : x;
      if (resizeObj.isGroup === true) {
        const multipleX = resizeObj.width - 2 * borderWidth;
        const multipleY = resizeObj.height - 2 * borderWidth - (resizeObj.groupTit ? titHeight : 0);
        resizeObj.groupData.forEach(item => {
          item.width = multipleX * item.groupW;
          item.x = multipleX * item.groupX;
          item.height = multipleY * item.groupH;
          item.y = multipleY * item.groupY;
        });
      }
      break;
  };
  // 当前直接接触的组件
  let obstacleArr = deepCopy(comData.value.filter(item => item.drag !== true)
    .filter(item => (item.x < resizeObj.x && (item.x + item.width) > resizeObj.x) || item.x === resizeObj.x || (item.x > resizeObj.x && item.x < (resizeObj.x + resizeObj.width)))
    .filter(item => (item.y < resizeObj.y && (item.y + item.height) > resizeObj.y) || item.y === resizeObj.y || (item.y > resizeObj.y && item.y < (resizeObj.y + resizeObj.height))));
  if (obstacleArr.length > 0) {
    obstacleArr.sort((a, b) => {
      const x = a.y;
      const y = b.y;
      return x - y;
    });
    for (let i = 0; i < obstacleArr.length; i++) {
      obstacleArr.filter(item => item.id === obstacleArr[i].id).forEach(item => {
        item.y += (resizeObj.y + resizeObj.height - item.y);
        comData.value.filter(one => one.id === item.id)[0].y = item.y;
        // 递归解除重叠
        const deepDown = (obj) => {
          const lin = comData.value.filter(one => one.drag !== true && one.id !== obj.id)
            .filter(one => (one.x < obj.x && (one.x + one.width) > obj.x) || one.x === obj.x || (one.x > obj.x && one.x < (obj.x + obj.width)))
            .filter(one => (one.y < obj.y && (one.y + one.height) > obj.y) || one.y === obj.y || (one.y > obj.y && one.y < (obj.y + obj.height)));
          lin.forEach(one => {
            one.y = obj.y + obj.height;
            deepDown(one);
          });
        };
        deepDown(item);
      });
    }
  }
  dealBg(false);
  boxRef.value.scrollTo(0, heightBg.value - pageHeight);
};
// 结束收缩
const resizeEnd = (e) => {
  delete resizeObj.drag;
  resizeDirection = '';
  resizeObj = null;
  window.removeEventListener('mousemove', resizeIng);
  window.removeEventListener('mouseup', resizeEnd);
  dealBg();
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
const dealBg = (deal = true) => {
  // 修正横向间距
  if (deal === true) {
    dealSpace();
  }
  const arr = comData.value.map(item => (item.y + item.height));
  if (arr.length > 0) {
    heightBg.value = Math.max(...arr) + 50;
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
// 修正横向间距
const dealSpace = () => {
  comData.value.sort((a, b) => {
    const x = a.y;
    const y = b.y;
    return x - y;
  });
  for (let i = 0; i < (comData.value.length - 1); i++) {
    if (i === 0 && comData.value[i].y > 0) {
      const space = comData.value[i].y;
      for (let x = i; x < comData.value.length; x++) {
        comData.value[x].y -= space;
      }
    }
    if (comData.value[i + 1].y > (comData.value[i].y + comData.value[i].height)) {
      const space = comData.value[i + 1].y - (comData.value[i].y + comData.value[i].height);
      for (let x = (i + 1); x < comData.value.length; x++) {
        comData.value[x].y -= space;
      }
    }
  };
  for (let i = 0; i < (comData.value.length - 1); i++) {
    let index = comData.value.findIndex(item => item.y === (comData.value[i].y + comData.value[i].height));
    if (index !== -1) {
      for (let x = index; x < comData.value.length; x++) {
        comData.value[x].y += props.ySpace;
      }
    }
  };
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
  // 数据修复，这里只考虑减少的情况，新增必须走addItem方法
  comData.value.filter(item => item.isGroup === true).forEach(item => {
    if (item.isGroup === true) {
      if (item.groupData.length < 2) {
        removeGroup(item.id);
      } else {
        const result = dealGroupSize(item.groupData, item);
        updateItem(result);
      }
    }
  });
  if (historyWidth !== null) {
    nextTick(() => {
      const obj = pageRef.value.getBoundingClientRect();
      const multiple = obj.width / historyWidth;
      const styles = getComputedStyle(pageRef.value);
      const borderWidth = parseInt(styles.getPropertyValue('--com-item-border-width').trim());
      const titHeight = parseInt(styles.getPropertyValue('--group-tit-height').trim());
      comData.value.forEach(item => {
        item.width *= multiple;
        item.height *= multiple;
        item.x *= multiple;
        item.y *= multiple;
        if (item.isGroup === true) {
          const multipleX = item.width - 2 * borderWidth;
          const multipleY = item.height - 2 * borderWidth - (item.groupTit ? titHeight : 0);
          item.groupData.forEach(one => {
            one.width = multipleX * one.groupW;
            one.x = multipleX * one.groupX;
            one.height = multipleY * one.groupH;
            one.y = multipleY * one.groupY;
          });
        }
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
// 计算新增的一个组件的x,y（画布中数量至少一个）
const dealMoreItemXY = (item, dataArr, maxWidth) => {
  const yTopArr = dataArr.map(item => item.y);
  const yTop = Math.max(...yTopArr);
  const xArr = dataArr.filter(item => (item.y + item.height) > yTop);
  xArr.sort((a, b) => {
    const x = a.x;
    const y = b.x;
    return x - y;
  });
  for (let i = 0; i < xArr.length; i++) {
    // 第一个
    if (i === 0) {
      if (xArr[i].x >= item.width) {
        item.y = yTop;
        item.x = 0;
        break;
      }
    }
    // 非最后一个，长度大于1
    if (xArr.length > 1 && i !== (xArr.length - 1)) {
      if ((xArr[i].x + xArr[i].width + item.width) <= xArr[i + 1].x) {
        item.y = yTop;
        item.x = xArr[i].x + xArr[i].width;
        break;
      }
    }
    // 最后一个
    if (i === (xArr.length - 1)) {
      if ((xArr[i].x + xArr[i].width + item.width) <= maxWidth) {
        item.y = yTop;
        item.x = xArr[i].x + xArr[i].width;
        break;
      }
    }
  };
  if (item.y == undefined) {
    item.x = 0;
    const lin = dataArr.map(item => (item.y + item.height));
    item.y = Math.max(...lin);
  }
};
// 添加一个组件
const addItem = (obj, pid = null, keepPosition = false) => {
  const item = deepCopy(obj);
  const pArr = comData.value.filter(item => item.id === pid);
  if (!item.id) {
    item.id = new Date().getTime() + '';
  }
  if (pid && pArr.length !== 1) {
    try {
      console.error('未找到组件');
    } catch (error) { }
    return;
  }
  // 重新计算坐标
  if (keepPosition !== true) {
    delete item.x;
    delete item.y;
    if (pid) {
      const styles = getComputedStyle(pageRef.value);
      const borderWidth = parseInt(styles.getPropertyValue('--com-item-border-width').trim());
      dealMoreItemXY(item, pArr[0].groupData, pArr[0].width - 2 * borderWidth);
    } else {
      if (comData.value.length === 0) {
        item.x = 0;
        item.y = 0;
      } else {
        dealMoreItemXY(item, comData.value, pageWidth);
      }
    }
  }
  if (pid) {
    pArr[0].groupData.push(item);
    const result = dealGroupSize(pArr[0].groupData, pArr[0]);
    updateItem(result);
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
      if (pArr[0].groupData.length === 1) {
        removeGroup(pid);
      } else {
        const result = dealGroupSize(pArr[0].groupData, pArr[0]);
        updateItem(result);
      }
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
    const styles = getComputedStyle(pageRef.value);
    const borderWidth = parseInt(styles.getPropertyValue('--com-item-border-width').trim());
    const titHeight = parseInt(styles.getPropertyValue('--group-tit-height').trim());
    // 防止init时widh监听正好触发
    if (!initIng) {
      comData.value.forEach(item => {
        item.width *= multiple;
        item.height *= multiple;
        item.x *= multiple;
        item.y *= multiple;
        if (item.isGroup === true) {
          const multipleX = item.width - 2 * borderWidth;
          const multipleY = item.height - 2 * borderWidth - (item.groupTit ? titHeight : 0);
          item.groupData.forEach(one => {
            one.width = multipleX * one.groupW;
            one.x = multipleX * one.groupX;
            one.height = multipleY * one.groupH;
            one.y = multipleY * one.groupY;
          });
        }
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
// 计算组合内容区的宽高、内容区的最新位置等信息
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
      const space = childList[i + 1].x - (childList[i].x + childList[i].width);
      for (let x = (i + 1); x < childList.length; x++) {
        childList[x].x -= space;
      };
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
      const space = childList[i + 1].y - (childList[i].y + childList[i].height);
      for (let x = (i + 1); x < childList.length; x++) {
        childList[x].y -= space;
      }
    }
  };
  const linx = childList.map(item => (item.x + item.width));
  const maxWidth = Math.max(...linx);
  const liny = childList.map(item => (item.y + item.height));
  const maxHeight = Math.max(...liny);
  childList.forEach(item => {
    if (!item.inGroupId) {
      item.inGroupId = result.id;
    }
    item.groupW = item.width / maxWidth;
    item.groupH = item.height / maxHeight;
    item.groupX = item.x / maxWidth;
    item.groupY = item.y / maxHeight;
    item.isObstacle = (item.x + item.width) === maxWidth && item.y === 0;
  });
  const styles = getComputedStyle(pageRef.value);
  const borderWidth = parseInt(styles.getPropertyValue('--com-item-border-width').trim());
  result.width = maxWidth + 2 * borderWidth;
  result.height = maxHeight + 2 * borderWidth;
  result.groupData = [...childList];
  return result;
};
// 组合边框大小改变重新计算组件大小
const changeGroupBorder = () => {
  nextTick(() => {
    const styles = getComputedStyle(pageRef.value);
    const borderWidth = parseInt(styles.getPropertyValue('--com-item-border-width').trim());
    const titHeight = parseInt(styles.getPropertyValue('--group-tit-height').trim());
    comData.value.filter(item => item.isGroup === true).forEach(item => {
      const multipleX = item.width - 2 * borderWidth;
      const multipleY = item.height - 2 * borderWidth - (item.groupTit ? titHeight : 0);
      item.groupData.forEach(one => {
        one.width = multipleX * one.groupW;
        one.x = multipleX * one.groupX;
        one.height = multipleY * one.groupH;
        one.y = multipleY * one.groupY;
      });
    });
  });
};
// 生成组合
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
      if (pObj.groupData.length === 2) {
        removeGroup(pid);
      } else {
        delete lin.inGroupId;
        delete lin.groupW;
        delete lin.groupH;
        delete lin.groupX;
        delete lin.groupY;
        delete lin.isObstacle;
        deleteItem(lin.id, pObj.id);
        addItem(lin);
        dealBg();
      }
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
      delete item.groupW;
      delete item.groupH;
      delete lin.groupX;
      delete lin.groupY;
      delete lin.isObstacle;
      item.x += lin.x;
      item.y += lin.y;
      addItem(item, null, true);
    });
    dealBg();
  } else {
    try {
      console.error('未找到组件');
    } catch (error) { }
  }
};
// 设置组合标题
const changeGroupTit = (tit = '', id) => {
  const lin = comData.value.filter(item => item.id === id)[0];
  if (lin) {
    if (!lin.groupTit || !tit) {
      const styles = getComputedStyle(pageRef.value);
      const titHeight = parseInt(styles.getPropertyValue('--group-tit-height').trim());
      if (lin.groupTit && !tit) {
        lin.height -= titHeight;
      }
      if (!lin.groupTit && tit) {
        lin.height += titHeight;
      }
    }
    lin.groupTit = tit;
    // 递归解除重叠
    const deepDown = (obj) => {
      const lin = comData.value.filter(one => one.id !== obj.id)
        .filter(one => (one.x < obj.x && (one.x + one.width) > obj.x) || one.x === obj.x || (one.x > obj.x && one.x < (obj.x + obj.width)))
        .filter(one => (one.y < obj.y && (one.y + one.height) > obj.y) || one.y === obj.y || (one.y > obj.y && one.y < (obj.y + obj.height)));
      lin.forEach(one => {
        one.y = obj.y + obj.height;
        deepDown(one);
      });
    };
    deepDown(lin);
    dealBg();
  } else {
    try {
      console.error('未找到组件');
    } catch (error) { }
  }
};
// 获取当前画布数据
const getData = () => {
  const obj = deepCopy(comData.value);
  obj.forEach(item => {
    delete item.showPop;
    if (item.groupData) {
      item.groupData.forEach(one => {
        delete one.showPop;
      });
    }
  });
  return { data: obj, width: pageWidth };
};
onBeforeUnmount(() => {
  // 移除监听
  resizePageObserver.unobserve(pageRef.value);
  window.removeEventListener('click', closeSettingPop);
});
defineExpose({ init, addItem, deleteItem, updateItem, openGroup, closeGroup, changeGroupBorder, addGroup, removeGroupItem, removeGroup, changeGroupTit, getData });
</script>
<style lang="scss">
@use "style/index.scss" as *;
</style>
/*
 * @Author: aFei
 * @Date: 2025-06-13 15:36:22
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2025-06-16 14:27:29
*/
// 二维空间查找空隙位置方法封装
//
/*
 *
 * 简洁数据抽取
 *
*/
// data参数
// 需要抽取的数据（区分数组与对象类型），只会抽取且全包含x，y，width，height的标准数据
// mapData参数
// 4个关键字段的映射字段
export const dealPositionData = (data, mapData = { x: 'x', y: 'y', width: 'width', height: 'height' }) => {
  let result = null;
  if (data instanceof Array) {
    result = [];
    data.forEach(item => {
      if (typeof item[mapData.x] === 'number' && typeof item[mapData.y] === 'number' && typeof item[mapData.width] === 'number' && typeof item[mapData.height] === 'number') {
        result.push({
          x: item[mapData.x],
          y: item[mapData.y],
          width: item[mapData.width],
          height: item[mapData.height]
        });
      }
    });
  } else {
    if (typeof data[mapData.width] === 'number' && typeof data[mapData.height] === 'number') {
      result = {
        width: data[mapData.width],
        height: data[mapData.height]
      };
    }
  }
  return result;
};
/*
 *
 * 提取x相同的数据到一个集合数组
 *
*/
const groupByX = (arr) => {
  const map = new Map();
  arr.forEach(obj => {
    if (!map.has(obj.x)) {
      map.set(obj.x, []);
    }
    map.get(obj.x).push(obj);
  });
  return map;
};
/*
 *
 * 过滤数组中与组件项X方向有交集的
 *
*/
const filterCrossXArr = (arr, obj) => {
  return arr.filter(item => (item.x <= obj.x && (item.x + item.width) > obj.x) || (item.x > obj.x && item.x < (obj.x + obj.width)));
};
/*
 *
 * 可插入位置查找
 *
*/
// parentArr参数
// 容器中已存在的元素数据（这里使用的是标准数据字段，如果不是标准数据需要调用dealPositionData处理数据，不调用的话最好传入复制对象）;这里如果传空数组，会返回固定点
// addObj参数
// 要插入的元素（这里使用的是标准数据字段，如果不是标准数据需要调用dealPositionData处理数据，不调用的话最好传入复制对象）
// canvasWidth参数
// 容器宽度
// allData参数
// 是否返回全量数据，默认只会返回左下角的一个位置，而不是全部符合条件的位置
// 
// 返回值
// 可放置的坐标信息/坐标信息集合或null
export const findPosition = (parentArr, addObj, maxWidth, allData = false) => {
  // 检查新元素宽度是否超过容器
  if (addObj.width > maxWidth) {
    return null;
  }
  // 存储所有可能位置
  let possiblePositions = [];
  // 空容器处理
  if (parentArr.length === 0) {
    const pos = { x: 0, y: 0 };
    return allData ? [pos] : pos;
  }
  // 计算已有元素的最大底部坐标
  const maxBottom = Math.max(...parentArr.map(item => item.y + item.height));
  // 收集所有关键的y坐标点（包括0和所有元素的顶部/底部）
  const ySet = new Set([0]);
  parentArr.forEach(item => {
    ySet.add(item.y);
    ySet.add(item.y + item.height);
  });
  // 转换为有序数组（升序）
  const keyPoints = Array.from(ySet).sort((a, b) => {
    return a - b;
  });
  // 遍历所有关键y坐标点
  for (const y0 of keyPoints) {
    const y1 = y0 + addObj.height;
    // 关键限制：确保新元素完全在现有区域内
    if (y1 > maxBottom) {
      continue;
    }
    // 获取与当前y区间[y0, y1]重叠的已有元素
    const overlapping = parentArr.filter(item => {
      return item.y < y1 && (item.y + item.height) > y0;
    });
    // 处理无重叠元素的简单情况
    if (overlapping.length === 0) {
      const pos = { x: 0, y: y0 };
      if (!allData) {
        // 立即返回第一个位置
        return pos;
      }
      possiblePositions.push(pos);
      continue;
    }
    // 获取重叠元素在x轴上的覆盖区间
    const intervals = overlapping.map(item => [item.x, item.x + item.width]);
    intervals.sort((a, b) => {
      return a[0] - b[0];
    });
    // 合并重叠区间
    const merged = [];
    let [currentStart, currentEnd] = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
      const [start, end] = intervals[i];
      if (start <= currentEnd) {
        currentEnd = Math.max(currentEnd, end);
      } else {
        merged.push([currentStart, currentEnd]);
        [currentStart, currentEnd] = [start, end];
      }
    }
    merged.push([currentStart, currentEnd]);
    // 检查第一个区间前的空间
    if (merged[0][0] >= addObj.width) {
      const pos = { x: 0, y: y0 };
      if (!allData) {
        return pos;
      }
      possiblePositions.push(pos);
    }
    // 检查区间之间的空间
    let prevEnd = merged[0][1];
    for (let i = 1; i < merged.length; i++) {
      const gap = merged[i][0] - prevEnd;
      if (gap >= addObj.width) {
        const pos = { x: prevEnd, y: y0 };
        if (!allData) {
          return pos;
        }
        possiblePositions.push(pos);
      }
      prevEnd = Math.max(prevEnd, merged[i][1]);
    }
    // 检查最后一个区间后的空间
    if (maxWidth - prevEnd >= addObj.width) {
      const pos = { x: prevEnd, y: y0 };
      if (!allData) {
        return pos;
      }
      possiblePositions.push(pos);
    }
  }
  // 处理结果
  if (allData) {
    let groupedData = groupByX(possiblePositions);
    groupedData.forEach((value, key) => {
      // 这里可以对每组相同x值的对象进行处理
      if (value.length > 1) {
        // 循环的时候最后一个不做判断，因为是向后比较
        for (let i = 0; i < (value.length - 1); i++) {
          let lin = { ...addObj, ...value[i] };
          // 两者中间没有间隔元素时删除后者
          if (filterCrossXArr(parentArr.filter(item => (item.y >= (lin.y + lin.height) && item.y <= value[i + 1].y)), lin).length === 0) {
            possiblePositions = possiblePositions.filter(item => {
              return !(item.x === value[i + 1].x && item.y === value[i + 1].y);
            });
            value.splice(i, 1);
            i--;
          }
        }
      }
    });
    // 按y从小到大排序，相同y时按x从小到大排序
    possiblePositions.sort((a, b) => {
      if (a.y !== b.y) return a.y - b.y;
      return a.x - b.x;
    });
    return possiblePositions.length === 0 ? null : possiblePositions;
  }
  // 没有找到位置
  return null;
};
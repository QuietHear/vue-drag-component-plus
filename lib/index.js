/*
 * @Author: aFei
 * @Date: 2024-08-05 13:45:00
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2024-08-12 11:21:07
*/
import vueDragComponentPlus from "./index.vue";
const arr = [vueDragComponentPlus];
const comment = {
  install(Vue) {
    arr.forEach(item => {
      Vue.component('vueDragComponentPlus', item);
    })
  },
};
// 注入script方式vue中
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(comment);
}
// 导出为全量
export default comment;
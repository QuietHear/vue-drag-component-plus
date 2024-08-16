# 拖拽卡片布局组件（vue3版）
***vue3版本***


## 预览
	clone项目后npm run preview即可


## 安装
	npm i vue-drag-component-plus


## 使用
	import vueDragComponentPlus from "vue-drag-component-plus";
	import "vue-drag-component-plus/index.css";
	
	app.use(vueDragComponentPlus);


## 0. 可改动样式变量
* `--com-item-bg`：#fff;-->组件项背景色

* `--com-item-border-width`：1px;-->组件项边框宽度

* `--com-item-border-type`：solid;-->组件项边框类型

* `--com-item-border-color`：#000;-->组件项边框颜色

* `--com-item-shadow-x`：0px;-->组件项阴影x偏离

* `--com-item-shadow-y`：0px;-->组件项阴影y偏离

* `--com-item-shadow-blur`：0px;-->组件项阴影虚化距离

* `--com-item-shadow-spread`：0px;-->组件项阴影延长距离

* `--com-item-shadow-color`：#000;-->组件项阴影颜色
>
	组件项阴影为outset模式
>

* `--com-item-move-bg`：rgba(245, 108, 108, .8);-->组件项拖动时背景色

* `--setting-icon-color`：#000;-->设置按钮的颜色

* `--setting-icon-size`：12px;-->设置按钮的字体大小

* `--setting-pop-width`：84px;-->设置弹窗的宽度




## 1. 参数
* `itemMinWidth`：组件项最小宽度，校验变量不能小于15-->Number;非必传;默认*15*

* `itemMinHeight`：组件项最小高度，校验变量不能小于15-->Number;非必传;默认*15*

* `settingIcon`：设置图标-->Object;非必传;默认*{icon:'设置'}*
>
	attrs的值会v-bind到对应dom上
	type的值，有以下四种情况
	// custom，此时为自定义组件,icon为组件名（！！！未内置，确保当前页面或全局已引入）
	// el，此时为el-icon,icon为图标组件名（！！！未内置，确保当前页面或全局已引入）
	// iconfont，此时为iconfont，icon为图标去掉icon-后部分（！！！未内置，确保当前页面或全局已引入）
	// 其他，此时为本地自定义图标，type为class，icon为内容
>


## 2. 方法
* `init`：初始化画布-->传入（初始宽度，初始高度，组件数据），第一次使用必须初始化，组件的默认宽高均为0，后续也可以用来重置画布及组件数据
>
	一个组件项的数据结构：
	{
		// 当前尺寸对应的宽度
		width:100,
		// 当前尺寸对应的高度
		height: 100,
		// 当前尺寸对应的横坐标
		x: 100,
		// 当前尺寸对应的纵坐标
		y: 100,
		// 静态组件，不能主动/被动移动、不能拖动改变大小，仅true为不可动
		static: true,
		// 可以拖动改变大小，仅false为不可改变
		resizable: false,
		// 可以拖动改变位置，仅false为不可改变
		dragable: false,
		1
		1
		1
		1
		1
		1
		1
		1
		1
		1
		1
		1
	}
>

* `changePageSize`：手动设置画布高度-->传入（新宽度，新高度），可以给宽度/高度传入null，null代表不更新
>
	父组件可以根据窗口的变化、布局的变化等情况实时更新画布的大小
	以窗口变化为例：
	window.addEventListener("resize", 更新画布尺寸方法);
	onBeforeUnmount(() => {
	  window.removeEventListener("resize", 更新画布尺寸方法);
	});	
>


## 3. 插槽
* `item`：替换默认展示的内容区
>
	$index:返回当前组件项的下标
	data:返回当前组件项的详细数据
>

* `empty`：替换默认空数据内容

* `setPopNormal`：替换默认设置正常弹窗
>
	$index:返回当前组件项的下标
	data:返回当前组件项的详细数据
>

* `setPopSpecial`：替换默认设置合并弹窗
>
	$index:返回当前组件项的下标
	data:返回当前组件项的详细数据
>


## 更多vue3组件
[**自定义右键菜单**](https://github.com/QuietHear/vue-diy-rightmenu-plus '右键新窗口浏览') | ***拖拽卡片布局组件*** | [**可拖拽菜单**](https://github.com/QuietHear/vue-drag-menu-plus '右键新窗口浏览') | [**echarts组件**](https://github.com/QuietHear/vue-echarts-block-plus '右键新窗口浏览') | [**基于el-menu的菜单组件**](https://github.com/QuietHear/vue-ele-nav-plus '右键新窗口浏览') | [**面包屑组件**](https://github.com/QuietHear/vue-permission-breads-plus '右键新窗口浏览') | [**滑动拼图**](https://github.com/QuietHear/vue-puzzle-slider-plus '右键新窗口浏览') | [**工作日历**](https://github.com/QuietHear/vue-shop-calendar-plus '右键新窗口浏览') | [**多页签组件**](https://github.com/QuietHear/vue-tabs-plus '右键新窗口浏览') | [**uEditor**](https://github.com/QuietHear/vue-ueditor-block-plus '右键新窗口浏览') | [**wangEditor**](https://github.com/QuietHear/vue-wangEditor-block-plus '右键新窗口浏览') | [**年密度组件**](https://github.com/QuietHear/vue-year-density-plus '右键新窗口浏览')
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
>
	画布是width、height:100%;如果要调整/固定画布大小，控制外层父元素的大小即可
>

* `--bg`：rgba(0, 0, 0, 0.1);-->画布背景色

* `--com-item-bg`：#fff;-->组件项背景色

* `--com-item-border-width`：1px;-->组件项边框宽度

* `--com-item-border-type`：solid;-->组件项边框类型

* `--com-item-border-color`：#000;-->组件项边框颜色

* `--com-item-border-radius`：0px;-->组件项边框倒角

* `--com-item-active-border`：#0068ff;-->组件项选中/拖动边框颜色

* `--com-item-shadow-x`：0px;-->组件项阴影x偏离

* `--com-item-shadow-y`：0px;-->组件项阴影y偏离

* `--com-item-shadow-blur`：0px;-->组件项阴影虚化距离

* `--com-item-shadow-spread`：0px;-->组件项阴影延长距离

* `--com-item-shadow-color`：#000;-->组件项阴影颜色
>
	组件项阴影为outset模式
>

* `--move-bg`：rgba(245, 108, 108, .8);-->组件项拖动时占位背景色

* `--setting-icon-color`：#000;-->设置按钮的颜色

* `--setting-icon-size`：12px;-->设置按钮的字体大小

* `--setting-pop-width`：80px;-->设置弹窗的宽度

* `--setting-pop-special-width`：120px;-->组合设置弹窗的宽度

* `--check-border-color`：#DCDFE6;-->多选项边框的默认/禁用颜色

* `--check-border-radius`：4px;-->多选项边框倒角

* `--check-checked-color`：#0068FF;-->多选项选中的边框/背景色

* `--check-dis-bg-color`：#F5F7FA;-->多选项禁用的背景色

* `--check-dis-color`：rgba(8, 8, 10, 0.32);-->多选项禁用的选中色

* `--group-tit-color`：#000;-->组合标题颜色

* `--group-tit-size`：16px;-->组合标题高度

* `--group-tit-height`：24px;-->组合标题高度


## 1. 参数
* `insertResizeKeys`：包含收缩方向-->Array;非必传;默认*['topLeft', 'top', 'topRight', 'left', 'right', 'bottomLeft', 'bottom', 'bottomRight']*

* `excludeResizeKeys`：排除收缩方向-->Array;非必传;默认*[]*

* `seeModel`：预览模式-->Boolean;非必传;默认*false*

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

* `hideTit`：不展示内置设置组合标题按钮-->Boolean;非必传;默认*false*


## 2. 方法
* `init`：初始化画布-->传入（历史组件数据，历史画布宽度）；历史组件数据不传默认为空数组；历史画布宽度不传默认为null，代表不处理组件数据，如果传入了，那组件的宽高等数据会根据当前画布的宽度重新计算
>
	一个组件项的数据结构：
	{
		// 当前组件/组合的唯一值，删除、合并等的重要字段
		id: xxx,
		// 当前尺寸对应的宽度
		width: 100,
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
		// 不可以加入组合，仅true为不可加入
		notGroup: true,
		// 组合相关的数据不要随意修改/创造，不然会有BUG
		// 当前组件是组合壳子
		isGroup: true,
		// 当前组合标题
		groupTit: '',
		// 当前组件所在组合的id
		inGroupId: xxx,
		// 组合子项数据
		groupData: [{结构与普通组件项一致},{结构与普通组件项一致}...]
	}
>

* `addItem`：添加一个组件项-->传入（组件项数据，父组合id，是否保留坐标）；如果要把数据添加在组合中，则需要传入父组合id，默认null；默认不保留数据带过来的x/y，若需要保留，第三个参数传入true（慎用），默认false
>
	一个组件项的数据结构：
	{
		// 当前组件的唯一值，删除、合并等的重要字段；可以不传，会自动生成一个当前时间戳的字符串
		id: xxx,
		// 当前尺寸对应的宽度
		width: 100,
		// 当前尺寸对应的高度
		height: 100,
		// 当前尺寸对应的横坐标（默认不保留）
		x: 100,
		// 当前尺寸对应的纵坐标（默认不保留）
		y: 100,
		// 静态组件，不能主动/被动移动、不能拖动改变大小，仅true为不可动
		static: true,
		// 可以拖动改变大小，仅false为不可改变
		resizable: false,
		// 可以拖动改变位置，仅false为不可改变
		dragable: false,
		// 不可以加入组合，仅true为不可加入
		notGroup: true
	}
>

* `deleteItem`：删除一个组件项-->传入（组件项id，父组合id）；如果当前组件在组合中，父组合id必须传

* `updateItem`：更新一个组件项-->传入（组件项数据）；id必须包含，不要随便更改x,y,width,height等画布上的信息，避免出现BUG；如果当前组件在组合中，则必须包含组合id

* `openGroup`：打开组合开关-->传入（组件项id）

* `closeGroup`：关闭组合开关（需要手动调用）

* `addGroup`：把选中的项生成一个组合（需要手动调用）
>
	最少两项才会生成一个组合，生成组合后默认无组合标题
>

* `removeGroupItem`：从组合中移出某一项-->传入（组件项id，当前组合id）
>
	剩余组件少于2个自动解除组合，这里只是移出组件，并不是删除
>

* `removeGroup`：解除组合-->传入（当前组合id）

* `changeGroupTit`：设置组合标题-->传入（新标题，当前组合id）；标题可以为空

* `getData`：获取当前画布数据
>
	{
		data:组件数据,
		width:当前画布宽度
	}
>

* `@showGroup`：组合功能开启/关闭回调-->第一个参数返回true/false
>
	当前组件不提供内置组合操作确认/取消按钮，只会提供方法
	例如：在父组件添加一个按钮通过ref去触发确认/取消合并功能
>

* `@updateChecked`：实时返回当前组合选中项的个数-->第一个参数返回总选中个数

* `@showTitPop`：打开组合标题设置弹窗-->第一个参数返回当前标题，第二个参数返回当前组合id
>
	无内置弹窗，需要的话自己写
>


## 3. 插槽
* `item`：替换默认展示的内容区（不包含组合壳子）
>
	// 如果插槽需要点击事件阻止默认的拖动事件（这两个事件是冲突的），给需要点击的地方加 @mousedown.prevent.stop="null" 即可
	// 此处包含在组合内的设置菜单，可以用data.inGroupId判断当前是独立组件还是在组合内
	data:返回当前组件项的详细数据
>

* `empty`：替换默认空数据内容

* `setPopNormal`：替换默认设置正常弹窗
>
	// 此处包含在组合内的设置菜单，可以用data.inGroupId判断当前是独立组件还是在组合内
	data:返回当前组件项的详细数据
>

* `setPopSpecial`：替换默认设置组合弹窗
>
	data:返回当前组件项的详细数据
>


## 更多vue3组件
[**自定义右键菜单**](https://github.com/QuietHear/vue-diy-rightmenu-plus '右键新窗口浏览') | ***拖拽卡片布局组件*** | [**可拖拽菜单**](https://github.com/QuietHear/vue-drag-menu-plus '右键新窗口浏览') | [**echarts组件**](https://github.com/QuietHear/vue-echarts-block-plus '右键新窗口浏览') | [**基于el-menu的菜单组件**](https://github.com/QuietHear/vue-ele-nav-plus '右键新窗口浏览') | [**面包屑组件**](https://github.com/QuietHear/vue-permission-breads-plus '右键新窗口浏览') | [**滑动拼图**](https://github.com/QuietHear/vue-puzzle-slider-plus '右键新窗口浏览') | [**工作日历**](https://github.com/QuietHear/vue-shop-calendar-plus '右键新窗口浏览') | [**多页签组件**](https://github.com/QuietHear/vue-tabs-plus '右键新窗口浏览') | [**uEditor**](https://github.com/QuietHear/vue-ueditor-block-plus '右键新窗口浏览') | [**wangEditor**](https://github.com/QuietHear/vue-wangEditor-block-plus '右键新窗口浏览') | [**年密度组件**](https://github.com/QuietHear/vue-year-density-plus '右键新窗口浏览')
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
>
	1. 这个值如果设置为0，可能出现的问题是hover时的外圈背景在没有这个边框以后组件的内容就压到了外圈背景上面。不介意的话可以设置为0，介意的话可以在这个值想设置为0时，把边框的颜色改为transparent即可
	2. 尽量不要动态改变，不然之前组合的宽度会有问题，改变后需要调用changeGroupBorder()方法重新计算组件大小
>

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
	阴影的大小最好不要超过横/纵间距，不然重叠很难看
	组件项阴影为outset模式，偏移量等变量全为0的时候即为无阴影效果
>

* `--move-bg`：rgba(245, 108, 108, .8);-->组件项拖动时占位背景色

* `--setting-icon-color`：#000;-->设置按钮的颜色

* `--setting-icon-color-act`：#0068ff;-->设置按钮的激活颜色

* `--setting-icon-top`：5px;-->设置按钮的top

* `--setting-icon-group-color`：#fff;-->组合的设置按钮的颜色

* `--setting-icon-group-top`：1px;-->组合的设置按钮的top

* `--setting-icon-group-width`：28px;-->组合的设置按钮的宽度

* `--setting-icon-group-height`：20px;-->组合的设置按钮的高度

* `--setting-icon-group-bg`：#0068FF;-->组合的设置按钮的背景色

* `--setting-icon-group-radius`：4px;-->组合的设置按钮允许存在的边框倒角

* `--setting-icon-size`：12px;-->设置按钮的字体大小

* `--setting-pop-width`：80px;-->设置弹窗的宽度

* `--setting-pop-special-width`：120px;-->组合设置弹窗的宽度

* `--check-border-color`：#DCDFE6;-->多选项边框的默认/禁用颜色

* `--check-border-radius`：4px;-->多选项边框倒角

* `--check-checked-color`：#0068FF;-->多选项选中的边框/背景色

* `--check-dis-bg-color`：#F5F7FA;-->多选项禁用的背景色

* `--check-dis-color`：rgba(8, 8, 10, 0.32);-->多选项禁用的选中色

* `--group-tit-color`：#000;-->组合标题颜色

* `--group-tit-size`：16px;-->组合标题大小

* `--group-tit-bold`：normal;-->组合标题粗细

* `--group-tit-style`：normal;-->组合标题斜体

* `--group-tit-height`：24px;-->组合标题高度

* `--auxiliary-width`：2px;-->辅助线宽度

* `--auxiliary-color`：#e6a23c;-->辅助线颜色


## 1. 参数
* `insertResizeKeys`：包含收缩方向-->Array;非必传;默认*['topLeft', 'top', 'topRight', 'left', 'right', 'bottomLeft', 'bottom', 'bottomRight']*

* `excludeResizeKeys`：排除收缩方向-->Array;非必传;默认*[]*

* `mobileDragModel`：手机拖动模式，在窄屏可以开启，将简化上下拖动交换的判断-->Boolean;非必传;默认*false*

* `seeModel`：预览模式-->Boolean;非必传;默认*false*

* `seeModelMinBg`：预览模式底部最小留白，校验变量不能小于0-->Number;非必传;默认*50*

* `itemMinWidth`：组件项最小宽度，优先级低于组件内设置，实际值会包含纵向间距，校验变量不能小于20-->Number;非必传;默认*50*

* `itemMinHeight`：组件项最小高度，优先级低于组件内设置，实际值会包含横向间距，校验变量不能小于20-->Number;非必传;默认*50*

* `xSpace`：纵向相邻元素的自动间距，校验变量不能小于0-->Number;非必传;默认*10*
>
	实际应用中不建议使用特别大的值，不然效果不好
>

* `ySpace`：横向相邻元素的自动间距，校验变量不能小于0-->Number;非必传;默认*null*，代表与纵向相同
>
	实际应用中不建议使用特别大的值，不然效果不好
>

* `hScaleDiscount`：高度缩放折扣率，校验变量大于0-->Number;非必传;默认*0.2*
>
	传入1代表保持默认缩放比，不进行折扣；
	使用过程中请勿动态变动，否则组件数据会出现错误；
>

* `cssScaleMin`：预览模式组件内css缩放比例最小值，校验变量大于0-->Number;非必传;默认*0.75*

* `cssScaleMax`：预览模式组件内css缩放比例最大值，校验变量大于0且不能小于最小值-->Number;非必传;默认*1.2*

* `settingIcon`：设置图标-->Object;非必传;默认*{icon:'设置'}*
>
	attrs的值会v-bind到对应dom上
	type的值，有以下四种情况
	// custom，此时为自定义组件,icon为组件名（！！！未内置，确保当前页面或全局已引入）
	// el，此时为el-icon,icon为图标组件名（！！！未内置，确保当前页面或全局已引入）
	// iconfont，此时为iconfont，icon为图标去掉icon-后部分（！！！未内置，确保当前页面或全局已引入）
	// 其他，此时为本地自定义图标，type为class，icon为内容
>

* `hideTit`：不展示内置组合插槽中的设置组合标题按钮-->Boolean;非必传;默认*false*

* `showAuxiliary`：展示辅助线-->Boolean;非必传;默认*false*

* `groupBtnPosMore`：组合按钮位置更详细，不开启就只有左中右，开启为上下左右-->Boolean;非必传;默认*false*

* `beforeAddGroup`：组合前数据处理-->Function;非必传
>
	// 传入数组格式数据，根据需求可以进行自己的数据预处理，不要随便修改画布上相关的数据
	// 传入数据为复制对象，随意操作
	// 默认不处理数据
	(arr) => {
      return arr;
    }
>

* `beforeRemoveGroup`：解散/移出组合前数据处理-->Function;非必传
>
	// 这里都是单次抛出的对象，考虑到数据处理逻辑一般相同，所以沿用beforeAddGroup的数组格式数据
	// 传入数组格式数据，根据需求可以进行自己的数据预处理，不要随便修改画布上相关的数据
	// 传入数据为复制对象，随意操作
	// 默认不处理数据
	(arr) => {
      return arr;
    }
>

* `dragDelayTime`：拖拽事件触发延迟毫秒数，可以防止不小心单击了一下而开始拖动，校验变量大于等于0且不能大于1000-->Number;非必传;默认*200*

* `moveDistance`：拖动屏幕上下滚动触发高度-->[Number, String];非必传;默认'50px'
>
	Number：最终值为当前容器高度*x
	String：必须带px，最终值为移除单位px的数值
>

* `scrollDistance`：滚动条每次移动距离-->[Number, String];非必传;默认'20px'
>
	Number：最终值为当前容器高度*x
	String：必须带px，最终值为移除单位px的数值
>

* `dragInBox`：拖拽时元素不允许超出容器-->Boolean;非必传;默认*false*


## 2. 方法
* `init`：初始化画布-->传入（历史组件数据，历史基准宽度）；历史组件数据不传默认为空数组；历史基准宽度不传默认为当前画布宽度，代表不处理组件数据（传入null、undefined也是），如果传入了，那组件的宽高等数据会根据当前画布的宽度重新计算
>
	// 注意!!!!
	// 不传入历史基准宽度时确保页面宽度已定型再调用该方法，否则计算宽度会有不对等的情况
	//
	// 会先调用resetData()方法，保证为新数据
	一个组件项的数据结构：
	{
		// 当前组件/组合的唯一值，删除、合并等的重要字段
		id: xxx,
		// 组件原始宽度
		width: 100,
		// 组件原始高度
		height: 100,
		// 组件项最小宽度（非必传，生效必须为数字类型，优先级高于系统参数中的统一设置）
		itemMinWidth: 50,
		// 组件项最小高度（非必传，生效必须为数字类型，优先级高于系统参数中的统一设置）
		itemMinHeight: 50,
		// 组件原始横坐标
		x: 100,
		// 组件原始纵坐标
		y: 100,
		// 静态组件，不能主动移动、拖动改变大小，仅true为不可动
		static: true,
		// 可以拖动改变大小，仅false为不可改变
		resizable: false,
		// 可以拖动改变位置，仅false为不可改变
		dragable: false,
		// 不可以加入组合，仅true为不可加入（自带菜单已进行过滤）
		notGroup: true,
		// 组合相关的数据不要随意修改/创造，不然会有BUG
		// 当前组件是组合壳子
		isGroup: true,
		// 当前组合标题
		groupTit: '',
		// 当前组件所在组合的id
		inGroupId: xxx,
		// 当前组件在组合区域宽度占比
		groupW: xxx,
		// 当前组件在组合区域高度占比
		groupH: xxx,
		// 当前组件在组合区域x坐标占比
		groupX: xxx,
		// 当前组件在组合区域y坐标占比
		groupY: xxx,
		// 当前组件在组合内是否是右上角，会添加特殊class='is-obstacle',有特殊需求可自行处理
		isObstacle: fasle,
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
		// 组件原始宽度
		width: 100,
		// 组件原始高度
		height: 100,
		// 组件项最小宽度（非必传，生效必须为数字类型，优先级高于系统参数中的统一设置）
		itemMinWidth: 50,
		// 组件项最小高度（非必传，生效必须为数字类型，优先级高于系统参数中的统一设置）
		itemMinHeight: 50,
		// 组件原始横坐标（默认不保留）
		x: 100,
		// 组件原始纵坐标（默认不保留）
		y: 100,
		// 静态组件，不能主动移动、拖动改变大小，仅true为不可动
		static: true,
		// 可以拖动改变大小，仅false为不可改变
		resizable: false,
		// 可以拖动改变位置，仅false为不可改变
		dragable: false,
		// 不可以加入组合，仅true为不可加入（自带菜单已进行过滤）
		notGroup: true
	}
>

* `copyItem`：复制一个组件项，仅id和位置不同-->传入（组件项id，父组合id，新id）；如果要把数据添加在组合中，则需要传入父组合id，默认null；新id不传系统会自动重新生成一个，默认null；会返回新组件的信息（复制对象，随意操作）

* `deleteItem`：删除一个组件项-->传入（组件项id，父组合id）；如果当前组件在组合中，父组合id必须传

* `updateItem`：更新一个组件项部分数据-->传入（要更新的数据）；id必须包含，不要随便更改x,y,width,height等画布上的信息，避免出现BUG；如果当前组件在组合中，则必须包含组合id
>
	// 示例数据：
	{
		// 当前组件/组合的唯一值，删除、合并等的重要字段
		id: xxx,
		// 当前组件所在组合的id（非必需）
		inGroupId: xxx,
		// 要更新的特殊层级字段
		// 会在当前数据中按.所分的层级一级一级找到对应字段更新
		'a.b.c': xxx,
		// 其他更新字段
		...
	}
>

* `toggleLockItem`：锁定/解除一个组件功能-->传入（组件项id，要设置的值）；只支持一级组件，不设置组件项；若传入Boolean类型，则是直接设置static的值；若传入Object类型，则是分别取对应的值（必须是Boolean类型）分别赋给static/dragable/resizable；会返回当前组件的信息（复制对象，随意操作）
>
	对应功能参考上方组件项信息的 static/dragable/resizable
>

* `hideGroupSet`：隐藏组合设置按钮-->传入（组件项id）

* `openGroup`：打开组合开关-->传入（组件项id）

* `closeGroup`：关闭组合开关（需要手动调用）

* `changeGroupBorder`：组合边框大小改变重新计算组件大小（主要针对于组合，需要手动调用）

* `addGroup`：把选中的项生成一个组合（需要手动调用）->会返回当前组合的信息（复制对象，随意操作）
>
	最少两项才会生成一个组合，生成组合后默认无组合标题
>

* `removeGroupItem`：从组合中移出某一项-->传入（组件项id，当前组合id），会返回当前组件项的数组格式数据或`(恰好解散了组合)`当前组合中的所有子组件的数组格式数据（复制对象，随意操作）
>
	剩余组件少于2个自动解除组合，这里只是移出组件，并不是删除
>

* `removeGroup`：解除组合-->传入（当前组合id），会返回当前组合中的所有子组件的数组格式数据（复制对象，随意操作）

* `changeGroupTit`：设置组合标题-->传入（新标题，当前组合id）；标题可以为空

* `openTrimModel`：开启微调模式-->传入（组件项id）；只支持一级组件，不设置组件项；系统中自带菜单已进行权限过滤；开启后无法进行拖拽、点击菜单等操作；传入的组件必须是非static和非关闭dragable的组件
>
	开启后按键盘的←↑↓→即可使组件移动1px，期间会触发的事件与拖拽时相同
>

* `closeTrimModel`：关闭微调模式-->无入参；正常情况会自动调用，存在异常情况时可以手动调用
>
	开启微调模式后：鼠标单击事件/esc/空格/enter 都会自动调用该方法
	// enter有时候会触发页面中的表单事件，可以使用@keydown.enter.prevent阻止
>

* `resetData`：重置画布数据-->重置基准宽度、当前比例、组件数据

* `getData`：获取当前画布数据->传入（目标基准），默认null为取当前创建时基准宽度，否则取传入目标基准进行等比缩放；为了解决执行顺序问题，这里改为了异步函数(promise)
>
	{
		data:组件数据,
		width:目标基准/当前基准宽度
	}
>

* `@baseWidthInit`：基准宽度初始化-->第一个参数返回当前基准宽度
>
	基准只有在画布为空，且添加一个组件后会进行初始化/重置
>

* `@changeScale`：当前画布尺寸变化-->第一个参数返回当前组件缩放比例指导值
>
	默认返回1，只有存在基准宽度才会改变，同时会更改对应css变量(--item-scale)值;
	此值为无限制的缩放比，编辑/预览模式都为实际缩放比；
	组件内可以使用css或js变量做对应的缩放修改（与changeCssScale根据实际情况选择）;
>

* `@changeCssScale`：当前画布尺寸变化-->第一个参数返回当前组件内缩放比例指导值
>
	默认返回1，只有存在基准宽度才会改变，同时会更改对应css变量(--css-scale)值;
	此值为受限的缩放比，编辑模式永久为1，预览模式时最大与最小值受对应props变量值影响；
	组件内可以使用css或js变量做对应的缩放修改（与changeScale根据实际情况选择）;
>

* `@changeTrimModel`：微调模式改变-->第一个参数返回当前状态（开启/关闭），状态为开启时第二个参数返回当前操作对象（复制对象，随意操作）
>
	此事件不管是手动/自动触发的打开/关闭微调模式都会触发
>

* `@dragStart`：开始拖拽-->第一个参数返回当前操作对象（复制对象，随意操作）

* `@dragIng`：正在拖拽-->无参数

* `@dragEnd`：结束拖拽-->第一个参数返回当前操作对象（复制对象，随意操作）

* `@resizeStart`：开始收缩-->第一个参数返回当前操作对象（复制对象，随意操作）

* `@resizeIng`：正在收缩-->无参数

* `@resizeEnd`：结束收缩-->第一个参数返回当前操作对象（复制对象，随意操作）

* `@openSetMenu`：打开设置菜单-->第一个参数返回当前操作对象（复制对象，随意操作）

* `@showGroup`：组合功能开启/关闭回调-->第一个参数返回true/false
>
	当前组件不提供内置组合操作确认/取消按钮，只会提供方法
	例如：在父组件添加一个按钮通过ref去触发确认/取消合并功能
>

* `@updateChecked`：实时返回当前组合选中项的个数-->第一个参数返回总选中个数

* `@showTitPop`：打开内置组合插槽中的组合标题设置弹窗-->第一个参数返回当前标题，第二个参数返回当前组合id
>
	无内置弹窗，需要的话自己写
>

* `@domStart`：执行init()后dom开始加载-->无参数
>
	可以自己加loading之类的逻辑
>

* `@domReady`：执行init()后dom加载完成-->无参数
>
	可以自己加loading之类的逻辑
>


## 3. 插槽
* `item`：替换默认展示的内容区（不包含组合壳子）
>
	// 如果插槽需要点击事件阻止默认的拖动事件（这两个事件是冲突的），给需要点击的地方加 @mousedown.prevent.stop="null" (或@mousedown.stop="null"，根据实际情况调整)即可
	// 如果阻止了拖动事件，建议将鼠标样式修改区分一下：cursor: default;
	// 此处包含在组合内的设置菜单，可以用data.inGroupId判断当前是独立组件还是在组合内
	data:返回当前组件项的详细数据（不要随意更改原数据，要编辑先复制一个出来操作）
>

* `empty`：替换默认空数据内容

* `setPopNormal`：替换默认设置正常弹窗
>
	// 此处包含在组合内的设置菜单，可以用data.inGroupId判断当前是独立组件还是在组合内
	data:返回当前组件项的详细数据（复制对象，随意操作）
>

* `setPopSpecial`：替换默认设置组合弹窗
>
	// 原插槽中的设置组合标题会调用hideGroupSet()方法
	data:返回当前组件项的详细数据（复制对象，随意操作）
>


## 更多vue3组件
[**自定义右键菜单**](https://github.com/QuietHear/vue-diy-rightmenu-plus '右键新窗口浏览') | ***拖拽卡片布局组件*** | [**可拖拽菜单**](https://github.com/QuietHear/vue-drag-menu-plus '右键新窗口浏览') | [**echarts组件**](https://github.com/QuietHear/vue-echarts-block-plus '右键新窗口浏览') | [**基于el-menu的菜单组件**](https://github.com/QuietHear/vue-ele-nav-plus '右键新窗口浏览') | [**面包屑组件**](https://github.com/QuietHear/vue-permission-breads-plus '右键新窗口浏览') | [**滑动拼图**](https://github.com/QuietHear/vue-puzzle-slider-plus '右键新窗口浏览') | [**工作日历**](https://github.com/QuietHear/vue-shop-calendar-plus '右键新窗口浏览') | [**多页签组件**](https://github.com/QuietHear/vue-tabs-plus '右键新窗口浏览') | [**uEditor**](https://github.com/QuietHear/vue-ueditor-block-plus '右键新窗口浏览') | [**wangEditor**](https://github.com/QuietHear/vue-wangEditor-block-plus '右键新窗口浏览') | [**年密度组件**](https://github.com/QuietHear/vue-year-density-plus '右键新窗口浏览')
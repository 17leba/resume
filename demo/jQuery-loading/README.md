jQuery-plugins-loading
==============
### 示例HTML
```html
<a href="javascript:void(0)" class="J_loading-1">loading btn 1</a>
<a href="javascript:void(0)" class="J_loading-2">loading btn 2</a>
<a href="javascript:void(0)" class="J_loading-3">loading btn 3</a>
<a href="javascript:void(0)" class="J_loading-4">loading btn 4</a>
<a href="javascript:void(0)" class="J_loading-5">loading btn 5</a>
<a href="javascript:void(0)" class="J_loading-6">loading btn 6</a>
<a href="javascript:void(0)" class="J_loading-7">loading btn 7</a>
<div class="loading-box"></div>
<div class="loading-box"></div>
<div class="loading-box"></div>
```
### Live Demo
[View Demo](http://17leba.github.io/demo/jQuery-loading/)
### 参数默认为空，直接加到J_loading-1后面
```html
$(".J_loading-1").loading();
```
### 参数为字符串类名，类名需要自定义
```html
$(".J_loading-2").loading("loading-img");
```
### 参数为对象，设置自定义imgUrl，calssname，以及插入位
- 插入位置参数有三个可选
- 默认为insertAfter，插入到当前元素后面
- appendTo：插入到设置元素的末尾
- insertBefore：插入到设置元素前面<br>
- 三个参数不可同时设置，若同时设置，则优先级高低为:appendTo > insertBefore > insertAfter
### 默认为accord，插入到当前元素后面
```html
$(".J_loading-3").loading({
	imgUrl:"http://static.hiwifi.com/ued/images/icons/big_loading.gif",
	classWrap:"loading-3"
})
```
### appendTo：插入到设置元素的末尾
```html
$(".J_loading-4").loading({
	imgUrl:"http://static.hiwifi.com/ued/images/icons/big_loading.gif",
	appendTo:$(".loading-box:eq(0)")
})
```
### insertBefore：插入到设置元素前面
```html
$(".J_loading-5").loading({
	imgUrl:"http://static.hiwifi.com/ued/images/icons/big_loading.gif",
	insertBefore:$(".loading-box:eq(1)")
})
```
### 参数为false时，删除添加的loading img
```html
var i = 0;
$(".J_loading-6").on("click",function(){
	if(i++ % 2 === 0){
		$(this).loading({
			imgUrl:"http://static.hiwifi.com/ued/images/icons/big_loading.gif",
			insertAfter:$(".loading-box:eq(2)")
		})
	}else{
		$(this).loading(false)
	}
})
```
### 参数为false时，删除添加的loading bg
```html
var j = 0;
$(".J_loading-7").on("click",function(){
	if(j++ % 2 === 0){
		$(this).loading("loading-img");
	}else{
		$(this).loading(false)
	}
})
```
- 当然也可以自己手动删除添加的classname，如
```html
$(".J_loading-7").removeClass("loading-img")
```


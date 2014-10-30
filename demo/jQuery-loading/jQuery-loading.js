// jquery loading plugins by ypb

jQuery.fn.loading = function(options){
	var opType = typeof options,
		html = '',
		obj,
		that = this,
		gid = Math.random() * 10,
		classWrap = "loading";

	if(opType === "undefined"){
		// 参数为空的修正
		opType = "object";
	}
	switch(opType){
		case "string":
			// options 为 classname，为当前按钮添加背景loading
			// class 需自己定义
			if(this.hasClass(options)) return;
			this.data("gid",options);
			this.addClass(options);
			break;
		case "object":
			// imgUrl:img地址
			// accord:插入到那个目标元素的后面
			// loading img 的 classname，默认为loading
			options = $.extend({
				imgUrl:"loading.gif",
				insertAfter:this,
				classWrap:classWrap
			},options)
			html = '<img src="'+ options.imgUrl +'" alt="loading" class="'+ options.classWrap +'"/>';
			obj = $(html);

			// 当存在appendTo参数时，插入到appendTo参数的末尾
			// 当存在insertBefore参数时，插入到insertBefore参数的前面
			// 默认loading的插入位置为this元素的后面
			options.appendTo ? obj.appendTo(options.appendTo) : options.insertBefore ? +'\n'
			+ obj.insertBefore(options.insertBefore) : obj.insertAfter(options.insertAfter);

			// 设置对应gid，方便对应删除loading
			obj.data("gid",gid);
			this.data("gid",obj.data("gid"))
			
			html = null;
			break;
		case "boolean":
			var lastGid = this.data("gid");
			if(isNaN(lastGid - 0)){
				this.removeClass(lastGid + "");
			}else{
				$(".loading").filter(function(){
					return lastGid === $(this).data("gid");
				}).remove()
			}
			break;
		default:break;
	}
}
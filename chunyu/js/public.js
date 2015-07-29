$(function(){

	// 导航
	$(".nav-more").on("click",function(){
		var $this = $(this);
		$this.siblings(".nav-top").toggleClass("hide");
	})
	// 弹出评论框
	$(".C_comment-reply").on("click",function(){
		var $this = $(this);
		$(".comment-float").addClass("hide");
		$(".comment-add").removeClass("hide").find(".comment-add-content").focus();
	})
	// 收起评论框
	$(".comment-add-cancel").on("click",function(){
		var $this = $(this);
		$this.closest(".comment-add").addClass("hide")
			.siblings(".comment-float").removeClass("hide");
	})
	// share
	$(".comment-share-btn").on("click",function(){
		var $this = $(this);
		$this.closest(".comment-float").addClass("hide")
			.siblings(".share-wrap").removeClass("hide");
	})
	// slide img height
	$(".slider").css({
		height:$(document).width() / Math.ceil((640/210))
	})
	
	$(".comment-add-content").on({
		"focus":function(){
			$(".comment-add").css({
				"position":"absolute"
			})
		},
		"blur":function(){
			$(".comment-add").css({
				"position":"fixed"
			})
		}
	})
	$('comment-add-content').focus(function(){
	var _this = this;

	//无键盘时输入框到浏览器窗口顶部距离
	var noInputViewHeight = $(window).height() - $(_this).height();

	//网页正文内容高度
	var contentHeight = $(document).height() - $(_this).height();

	//控制正文内容高度大于一屏，保证输入框固定底部
	contentHeight = contentHeight > noInputViewHeight ? contentHeight : noInputViewHeight;

	//因为弹出输入法需要时间，需延时处理
	setTimeout(function(){

		//弹出输入法时滚动条的起始滚动距离
		var startScrollY = $(window).scrollTop();

		//弹出输入法时输入框到窗口顶部的距离，即到软键盘顶部的起始距离
		var inputTopHeight = $(_this).offset().top - startScrollY;

		//弹出输入法时输入框预期位置，即紧贴软键盘时的位置。因输入框此时处于居中状态，所以其到窗口顶部距离即为需往下移动的距离。
		var inputTopPos = $(_this).offset().top + inputTopHeight;

		//控制div不超出正文范围
		inputTopPos = inputTopPos > contentHeight ? contentHeight : inputTopPos;

		//设置输入框位置使其紧贴输入框
		$(_this).css({'position':'absolute', 'top':inputTopPos });

		//给窗口对象绑定滚动事件，保证页面滚动时div能吸附软键盘
		$(window).bind('scroll', function(){

			//表示此时有软键盘存在，输入框浮在页面上了
			if (inputTopHeight != noInputViewHeight) {

				//页面滑动后，输入框需跟随移动的距离
				var offset = $(this).scrollTop() - startScrollY;

				//输入框移动后位置
				afterScrollTopPos = inputTopPos + offset;

				//设置输入框位置使其紧贴输入框
				$(_this).css({'position':'absolute', 'top':afterScrollTopPos });
			}
		});
	}, 100);
}).blur(function(){//输入框失焦后还原初始状态
	$(".comment-add-content").removeAttr('style');
	$(window).unbind('scroll');
});
})

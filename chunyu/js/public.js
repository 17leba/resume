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
		console.log(2323)
		$this.closest(".comment-add").addClass("hide")
			.siblings(".comment-float").removeClass("hide");
	})
	// share
	$(".comment-share-btn").on("click",function(){
		var $this = $(this);
		$this.closest(".comment-float").addClass("hide")
			.siblings(".share-wrap").removeClass("hide");
	})
	// 
	// slide img height
	$(".slider").css({
		height:$(document).width() / Math.ceil((640/210))
	})
	if(/iPhone|iPad|iPod/.test(navigator.userAgent)){
		$(".comment-add-content").on({
			"focus":function(){
				$(".comment-add").css({
					"position":"static"
				})
				$("html,body").scrollTop($(document).height())
			},
			"blur":function(){
				$(".comment-add").css({
					"position":"fixed"
				})
			}
		})
	}
})

// jquery loading plugins by ypb

jQuery.mask = function(options){
	var configs = {
		"position":"absolute",
		"width":"100%",
		"height":"100%",
		"background-color":"#000",
		"filter":"alpha(opacity=50)",
		"opacity":.5,
		"z-index":999,
	},
	html = '',
	$body = jQuery("body"),
	classWrap = "mask" + parseInt(Math.random() * 1000);

	if(options === false && $body.data("classWrap")){
		jQuery("." + $body.data("classWrap")).remove();
		return;
	}

	options = jQuery.extend(configs,options || {})
	$body.data("classWrap",classWrap);
	html = '<div class="'+ classWrap +'"></div>';
	jQuery(html).appendTo($body);
	html = null;
	// 设置css
	jQuery('.' + classWrap).css(configs);
}
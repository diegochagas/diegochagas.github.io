$("#more-works").click(function(){
	$("button span.glyphicon").toggleClass("glyphicon-menu-up");
    $("button span.glyphicon").toggleClass("glyphicon-menu-down");
});

setTimeout(function(){
	$(".gear").css("animation", "gear-rotate 10s infinite");
	$(".gear-small .bar-small:nth-child(2)").css("animation", "bar-rotate1 10s infinite");
	$(".gear-small .bar-small:nth-child(3)").css("animation", "bar-rotate2 10s infinite");
	$(".gear-small .bar-small:last-child").css("animation", "bar-rotate3 10s infinite");
}, 2000);
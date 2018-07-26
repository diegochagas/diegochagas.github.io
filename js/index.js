$(document).ready(function(){
    // Alterna as direções do ícone de seta entre baixo e cima.
    $("#more-works, #records-fals, #records-etec").click(function(){
        $("span.glyphicon", this).toggleClass("glyphicon-menu-up");
        $("span.glyphicon", this).toggleClass("glyphicon-menu-down");
        var moreWorks = $(this).is("#more-works");
        if(moreWorks && $(this).attr("aria-expanded") == "true")
            $(".text", this).text("More works");
        if(moreWorks && $(this).attr("aria-expanded") == "false")
            $(".text", this).text("Less works");
    });

    // Carrega a animação de rotação da engrenagem após 2 segundos
    setTimeout(function(){
    	$(".gear").css("animation", "gear-rotate 10s infinite");
    	$(".gear-small .bar-small:nth-child(2)").css("animation", "bar-rotate1 10s infinite");
    	$(".gear-small .bar-small:nth-child(3)").css("animation", "bar-rotate2 10s infinite");
    	$(".gear-small .bar-small:last-child").css("animation", "bar-rotate3 10s infinite");
    }, 2000);
});


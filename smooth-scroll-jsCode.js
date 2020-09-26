// Smooth Scroll
$(function(){
    $(".scroll-link").click(function(e){
        e.preventDefault();
        $("body, html").animate({
            scrollTop: $(this.hash).offset().top
        }, 1250)
    })
})
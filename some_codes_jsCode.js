// Smooth Scroll
$(function(){
    $(".scroll-link").click(function(e){
        e.preventDefault();
        $("body, html").animate({
            scrollTop: $(this.hash).offset().top
        }, 1250)
    })
})

// What Browser
if (navigator.userAgent.search("MSIE") >= 0) {
    //code goes here
}
else if (navigator.userAgent.search("Chrome") >= 0) {
    //code goes here
}
else if (navigator.userAgent.search("Firefox") >= 0) {
    //code goes here
}
else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
    //code goes here
}
else if (navigator.userAgent.search("Opera") >= 0) {
    //code goes here
}
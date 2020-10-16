// Smooth Scroll
$(function () {
    $(".scroll-link").click(function (e) {
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
// Parallax Effect Background Img
$(function () {
    function parallaxEffect(section) {
        var header_height = 100;
        var smallPage = false;
        var bgXvalue = 0;
        if ($(window).width() < 999) {
            header_height = 92
            smallPage = true;
        }
        var windowHeight = $(this).height();
        var item_scrollTop = $(this).scrollTop() + header_height;
        var sec_top = $(section).offset().top - item_scrollTop;
        var scrollValue = (sec_top - windowHeight) * 0.15;
        console.log("parallaxEffect -> scrollValue", scrollValue)
        if (smallPage) {
            scrollValue = 0;
            bgXvalue = 20;
        }
        bgValue = bgXvalue + "% " + scrollValue + "px"
        $(section).css("background-position", bgValue)
    }
    $(window).scroll(function () {
        // parallaxEffect(".second-page");
        // parallaxEffect(".contact-page");
    });
})

// Read from JSON
$.ajax({
    dataType: "json",
    url: "/cmds.json",
}).done(function (resp) {
    for (var p in resp) {
        if (!resp.hasOwnProperty(p)) continue;
        var writer = resp[p].writer;
        var command = resp[p].command;
        cmd_wrapper.html(cmd_wrapper.html() + "<div class='cmd'>\
        <h3>" + writer + "</h3>\
        <p>"+ command + "</p>\
      </div>");
    }
});

//   has class - PURE Javascript
function hasClass(element) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}
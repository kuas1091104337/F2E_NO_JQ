$(function() {
    var text = "PC";
    if (/android/i.test(navigator.userAgent)) {
        text = "Android";
        document.querySelector("body").style.background="red";
    } else if (/iphone/i.test(navigator.userAgent)) {
        text = "iPhone";
        document.querySelector("body").style.background="blue";
    }
    $("body").append("<div>" + text + "版網頁</div>");
});
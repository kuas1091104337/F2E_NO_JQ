﻿$(function() {
    for (var i = 0; i < 10; i++) {
        var number = i;
        alert("i=" + number);
        $(".pagination li:last").before("<li><a href=\"#\">" + (i + 1) + "</a></li>");
    }
});
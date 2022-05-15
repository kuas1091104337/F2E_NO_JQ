$(function() {
    console.time('6-S');
    var data = ["John", "Tom", "Mark", "Allen", "Peter", "David"];
    $("ul").append("<li class=\"nav-header\">員工名單</li>");
    $("ul").append("<hr>");
    
     for (var i = 0; i < data.length; i++) {
         $("ul").append("<li><a>" + data[i] + "</a></li>");
     }

    console.timeEnd('6-S');
});
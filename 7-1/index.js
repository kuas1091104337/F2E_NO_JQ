$(function() {
    var $content = $("#content");
    $content.html(function(index, oldhtml) {
    	$(".count").text(oldhtml.match(/(手機[^，。、]*)/g).length);
        return oldhtml.replace(/(手機[^，。、]*)/g, "<span>$1</span>");
        // return oldhtml.replace(/(手機[^，。、]*)/, "<span>$1</span>");
        // return oldhtml.replace(oldhtml, "<span>手機</span>");

    });
});
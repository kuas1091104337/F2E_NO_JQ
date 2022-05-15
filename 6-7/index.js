$(function() {
	console.time('6-S');
    var data = ["John", "Tom", "Mark", "Allen", "Peter", "David"],
		$ul=$("ul"),
		html = "";
    html += "<li class=\"nav-header\">員工名單</li>";
    html += "<hr>";
    for (var i = 0, max = data.length; i < max; i++) {
        html += "<li><a>" + data[i] + "</a></li>";
    }
    $ul.append(html);
    console.timeEnd('6-S');
});
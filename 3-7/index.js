// $(function() {
//     $.getJSON("data.json", function(data) {
//         $.get("template.html", function(html) {
//             $("#list").html(render(html, data));
//             console.log(html);
//         });
//     });
// });


$(function(){
    function render(html, data) {
        function replace(html, key, value) {
            key="{{" + key + "}}";
            while(html.indexOf(key)>-1) {
                html = html.replace(key, value);
            }
            return html;
        }
        var template;
        if (data instanceof Array) {
            template = html;
            html = "";
        }
        for (var a in data) {
            if (template) {
                html += template;
                for (var b in data[a]) {
                    html = replace(html, b, data[a][b]);
                }
            } else {
                html = replace(html, a, data[a]);
            }
        }
        return html;
    }

	$.getJSON("data.json", function (data) {
		$.get("template.html", function(webhtml){
			$("#list").html(render(webhtml, data));
		});
	});		
});
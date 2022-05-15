// $(function() {
//     $(".menu").load("Menu.html", function() {
//         var url = location.href;
//         var href = url.substr(url.lastIndexOf("/") + 1);
//         //var href = url.split("/").pop();
//         $("a[href='" + (href || "index.html") + "']").addClass("selected");
//     });
// });

$(function(){
	$.ajax({
		url:'Menu.html',
		dataType:'html'
	}).done(function(data){
		$('.menu').html(data);
		var web_url = location.href,
			web_href = web_url.substr(web_url.lastIndexOf("/")+1);
		$("a[href='"+(web_href || "index.html")+"']").addClass("selected");
	});
	
});

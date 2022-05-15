// $(function () {
//     $("#header").load("common.html #header>div");
//     $("#footer").load("common.html #footer>*");
// });

$(function(){
	$.ajax({
		url: 'common.html',
		dataType:'html'
	}).done(function(data) {
		$("#header").html($("<div>"+data+"</div>").find("#header").html());
		$("#footer").html($("<div>"+data+"</div>").find("#footer").html());
	})	
});
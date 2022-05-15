// $(function () {
//     $("#header").load("header.html");
//     $("#footer").load("footer.html");
// });

$(function(){
	$.ajax({
		url:'header.html',
		dataType:'html'
	}).done(function(data) {
		$('#header').html(data);
	});
	$.ajax({
		url:'footer.html',
		dataType:'html'
	}).done(function(data) {
		$('#footer').html(data);
	});
});
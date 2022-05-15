// $(function() {
//     $(window).scroll(function() {
//         $("#show").text($(this).scrollTop());
//         console.log($(this).scrollTop());
//     }).scroll();
// });

$(function(){
	$(window).scroll(function(){
		$("#show").html($(this).scrollTop()+"px");	
	}).scroll();		
});
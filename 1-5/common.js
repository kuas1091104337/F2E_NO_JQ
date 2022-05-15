﻿// $(function() {
//     $(".menu>a").click(function(e) {
//         $(".menu>a.selected").removeClass();
//         $(".content").load($(this).addClass("selected").attr("href"));
//         location.hash = $(this).index();
//         e.preventDefault();
//     }).eq(location.hash.substr(1)).click();
// });

$(function(){
	$(".menu a").click(function(e){
		$("a.selected").removeClass();

		$(".content").load($(this).addClass("selected").attr("href"));
		location.hash = $(this).index();
		e.preventDefault();
	}).eq(location.hash.substr(1)).click();		
	$(window).on("hashchange", function(){
		$(".menu a").eq(location.hash.substr(1)).click();	
	});
});

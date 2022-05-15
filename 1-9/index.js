// $(function() {
//     $("#menu").load("menu.html", function() {
//         $(this).find("a").on("mouseenter mouseleave", function() {
//             var temp = $(this).text();	//temp = 開課時間
//             $(this).text($(this).data("english"));
//             $(this).data("english", temp);
//         });
//     });
// });

$(function(){
	$("#menu").load("menu.html", function() {
		$(this).find("a").on("mouseover mouseout", function(){
			console.log($(this));
			console.log($(this).text());	// 開課時間
			var menuWord = $(this).text();
			$(this).text($(this).data("english"));
			$(this).data("english", menuWord);
		});
	});		
});

// $.ajax({
//   url: './menu.html',
//   dataType: 'html'
// }).done(function(res) {
//   $('#menu').replaceWith(res)
// })
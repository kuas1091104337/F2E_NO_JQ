// $(function() {
//     $(window).load(function() {
//         $(".loading").fadeOut(1000);
//     });
//     var progress = 0;
//     $("img").load(function() {
//         progress += 100 / $("img").length;
//         var percent = Math.round(progress) + "%";	// 圖片載入的進度 0 ~ 100%
//         $(".txt").text(percent);
//         $(".bar").css("width", percent);
//     });
// });

$(function(){
    $(window).load(function(){
        $(".loading").fadeOut(1000);
    });       
    var Number = 0;
    $("img").load(function(){	//一張圖片
    	Number += 100/$("img").length;
    	var percent = Math.round(Number) + "%";
    	$(".txt").text(percent);
    	$(".bar").css('width', percent);
    });
});
$(function() {
    $(".menu>a").click(function(e) {
        $(".menu>a.selected").removeClass();
        $(".content").load($(this).addClass("selected").attr("href"));
        e.preventDefault();
    }).first().click();
});

// $(function(){
// 	var Number=1;
// 	$(".menu a").click(function(e){
// 		//1
// 		console.log(Number);
// 		document.getElementById("N_"+Number).className="";
// 		Number = this.id.substr(this.id.indexOf("_")+1);
// 		document.getElementById("N_"+Number).className="selected";
// 		//2
// 		// for (var i=1; i<=6; i++) {
// 		// 	document.getElementById("N_"+i).className="";
// 		// }
// 		//3
// 		// $(".menu a.selected").removeClass();
// 		// $(".content").load($(this).addClass("selected").attr("href"));
// 		$(".content").load($(this).attr("href"));
// 		location.hash = $(this).index();
// 		e.preventDefault();
// 	// }).first().click();		
// 	}).eq(location.hash.substr(1)).click();		
// 	$(window).on("hashchange", function(){
// 		$(".menu a").eq(location.hash.substr(1)).click();	
// 	});
// });

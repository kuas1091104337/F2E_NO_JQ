// $(function() {
//     $(".menu>a").click(function(e) {
//         $(".menu>a.selected").removeClass();
//         $(".content").load($(this).addClass("selected").attr("href"));
//         e.preventDefault();
//     }).first().click();
// });
window.onload = function(){
    let selectNum = 0;
    document.querySelectorAll('.menu > a').forEach((el,i) => {
        // el.addEventListener('click',function(e){
        el.addEventListener('click',e => {
            console.log(selectNum);
            console.log(i);
            console.log(e.target.getAttribute('href'));
            console.log(el.getAttribute('href'));
            selectNum = i
            console.log(selectNum);
            axios.get('./'+el.getAttribute('href')).then(function(res){
              document.getElementsByClassName('content')[0].innerHTML = res.data;
            }).catch(function(error){
                document.getElementsByClassName('content')[0].innerHTML = 'API ERROR';
            });
            e.preventDefault();
        });
    });
    axios.get('./Page0.html').then(function(res){
        document.getElementsByClassName('content')[0].innerHTML = res.data;
        
    }).catch(function(error){
        document.getElementsByClassName('content')[0].innerHTML = 'API ERROR';
    });
}

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

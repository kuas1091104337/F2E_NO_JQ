// $(function() {
//     $(".menu>a").click(function(e) {
//         $(".menu>a.selected").removeClass();
//         $(".content").load($(this).addClass("selected").attr("href"));
//         e.preventDefault();
//     }).first().click();
// });
window.onload = function(){
    document.querySelectorAll('.menu > a').forEach((el,i) => {
        el.addEventListener('click',e => {
            e.preventDefault();
            if(el.classList.contains('selected')) return;
            // console.log(e.target.getAttribute('href')); console.log(el.getAttribute('href'));
            let selectNum = i;
            axios.get('./'+el.getAttribute('href')).then(function(res){
                document.querySelector('.menu > .selected').className = '';
                document.getElementsByClassName('content')[0].innerHTML = res.data;
                document.querySelector('.menu > a:nth-child('+(selectNum+1)+')').classList.add('selected');
                location.hash = el.id;
            }).catch(function(error){
                document.getElementsByClassName('content')[0].innerHTML = 'API ERROR';
                console.log(error.response);
            });
        });
    });
    axios.get('./Page0.html').then(function(res){
        document.getElementsByClassName('content')[0].innerHTML = res.data;
        document.querySelector('.menu > a:nth-child(1)').classList.add('selected');
    }).catch(function(error){
        document.getElementsByClassName('content')[0].innerHTML = 'API ERROR';
    });
    window.addEventListener('hashchange',el => {
        console.log(el);
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

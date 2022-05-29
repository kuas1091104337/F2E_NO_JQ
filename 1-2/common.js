// $(function () {
//     $("#header").load("common.html #header>div");
//     $("#footer").load("common.html #footer>*");
// });

// $(function(){
// 	$.ajax({
// 		url: 'common.html',
// 		dataType:'html'
// 	}).done(function(data) {
// 		$("#header").html($("<div>"+data+"</div>").find("#header").html());
// 		$("#footer").html($("<div>"+data+"</div>").find("#footer").html());
// 	})	
// });

window.onload = function(){
	axios.get('./common.html').then(function(res){
		console.log(res.data);
		//s-1
		document.getElementById('mainarea').insertAdjacentHTML('beforebegin',res.data)
		document.getElementById('mainarea').insertAdjacentElement('afterend',document.getElementById('footer'))
		//s-2
		// document.getElementById('render').innerHTML = res.data;
		// document.getElementById('mainarea').insertAdjacentElement('beforebegin',document.getElementById('header'))
		// document.getElementById('mainarea').insertAdjacentElement('afterend',document.getElementById('footer'))
		//s-3
		// document.getElementById('render').innerHTML = res.data;
		// var hd = document.querySelector('#render > #header').cloneNode(true),
		//     ft = document.querySelector('#render > #footer').cloneNode(true);
		// document.getElementById('mainarea').insertAdjacentElement('beforebegin',hd)
		// document.getElementById('mainarea').insertAdjacentElement('afterend',ft)
		// document.getElementById('render').innerHTML = '';
	}).catch(function(error){
		console.log(error.response);
		// console.error(error.response.data.msg);
	});
}
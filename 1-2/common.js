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
	axios.get('./common.html')
	.then(function(res){
		// 2XX系列進來then
		console.log(res.data);
		document.getElementById('render').innerHTML = res.data;
		var hd1 = document.querySelector('#render > #header > *').outerHTML,
				hd2 = document.querySelector('#render > #header > * + *').outerHTML,
		    ft = document.querySelector('#render > #footer > *').outerHTML;
		console.log(hd1);
		console.log(ft);
		document.getElementById('header').insertAdjacentHTML('afterbegin',hd1)
		document.getElementById('header').insertAdjacentHTML('beforeend',hd2)
		document.getElementById('footer').innerHTML = ft;
		document.getElementById('render').innerHTML = '';
	}).catch(function(error){
		// 不是2XX系列進來catch
		// console.log(error.response.data);
		// console.error(error.response.data.msg);
	});
}
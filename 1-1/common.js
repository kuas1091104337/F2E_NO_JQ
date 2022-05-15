// $(function () {
//     $("#header").load("header.html");
//     $("#footer").load("footer.html");
// });

// $(function(){
// 	$.ajax({
// 		url:'header.html',
// 		dataType:'html'
// 	}).done(function(data) {
// 		$('#header').html(data);
// 	});
// 	$.ajax({
// 		url:'footer.html',
// 		dataType:'html'
// 	}).done(function(data) {
// 		$('#footer').html(data);
// 	});
// });
window.onload = function(){
	function renderHead(){
		return axios.get('./header.html');
	}
	function renderFoot(){
		return axios.get('./footer.html');
	}
	Promise.all([renderHead(),renderFoot()]).then(function(ress){
		const hData = ress[0].data, fData = ress[1].data;
		document.getElementById('header').innerHTML = hData;
		document.getElementById('footer').innerHTML = fData;
	});
}
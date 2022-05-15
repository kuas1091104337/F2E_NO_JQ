// $(function() {
//     $.getJSON("data.json", function(data) {
//         $("#image").attr("src", data.image);
//         $("#username").text(data.username);
//         $("#photos").prepend(data.photos);//.after(data.photos)
//         $("#followers").prepend(data.followers);//.before(data.followers)
//     });
// });

$(function(){
	$.getJSON("data.json", function (data) {
		document.getElementById("image").src = data.image;
		document.getElementById("username").innerHTML = data.username;
		$("#photos").prepend(data.photos);
		$("#followers").prepend(data.followers);
	});	
});
// $(function () {
//     $.getJSON("message.json", function (data) {
//         $("#message").html(data);
//     });
// });

// $(function(){
// 	$.getJSON("message.json", function (data) {
// 		document.getElementById("message").innerHTML=data;
// 		console.table(data);
// 	});		
// })

var request = new XMLHttpRequest();
request.open('GET', 'message.json', true);

request.onload = function() {
	if (request.status >= 200 && request.status < 400) {
		var data = JSON.parse(request.responseText);
		document.getElementById("message").innerHTML=data;
	}
};

request.send();

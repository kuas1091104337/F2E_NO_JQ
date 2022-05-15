// $(function() {
//     $.getJSON("photos.json", function(data) {
//         var i = 0;
//         function run() {
//             if (i >= data.length) {
//                 i = 0;
//             }
//             $("#image").fadeOut(function() {
//                 $(this).attr("src", data[i][0]).fadeIn();
//                 $("#text").text(data[i][1]);
//                 i++;
//             });
//         }
//         setInterval(run, 3000);
//         run();
//     });
// });


$(function(){
    $.getJSON("photos.json", function (data) {
        var Number = 0;
        function GO(){
            if (Number >= data.length) {
                Number=0;
            }
            $("#image").attr("src",data[Number][0]);
            $("#text").text(data[Number][1])
            Number++;
        }
        setInterval(GO,1500);
        GO();
    });       
});

// var request = new XMLHttpRequest();
// request.open('GET', 'photos.json', true);

// request.onload = function() {
//     if (request.status >= 200 && request.status < 400) {
//         var data = JSON.parse(request.responseText);
//         var Number = 0;
//         function GO(){
//             if (Number >= data.length) {
//                 Number=0;
//             }
//             document.getElementById("image").src = data[Number][0];
//             document.getElementById("text").innerHTML = data[Number][1];
//             Number++;
//         }
//         setInterval(GO,1500);
//         GO();
//     }
// };

// request.send();
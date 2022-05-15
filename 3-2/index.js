// $(function() {
//     $.getJSON("photos.json", function(data) {
//         var i = 0;
//         function run() {
//             if (i >= data.length) {
//                 i = 0;
//             }
//             $("#image").attr("src", data[i]);
//             i++;
//         }
//         setInterval(run, 3000);
//         run();
//         console.table(data);
//     });
// });

// $(function(){
//     $.getJSON("photos.json", function (data) {
//         var Number = 0;
//         function GO(){
//             if (Number >= data.length) {
//                 Number=0;
//             }
//             document.getElementById("image").src = data[Number];
//             Number++;
//         }
//         setInterval(GO,1500);
//         GO();
//     });       
// });

var request = new XMLHttpRequest();
request.open('GET', 'photos.json', true);

request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText),
            Number = 0;
        function GO(){
            // if (Number >= data.length) {
            //     Number=0;
            // }
            Number = Number % data.length;
            document.getElementById("image").src = data[Number];
            Number++;
        }
        setInterval(GO,1500);
        GO();
    }
};
request.send();

// var request = new XMLHttpRequest();
// request.open('GET', '/my/url', true);
// request.onload = function() {
//   if (request.status >= 200 && request.status < 400) {
//     // Success!
//     var data = JSON.parse(request.responseText);
//   } else {
//     // We reached our target server, but it returned an error
//     // 我們到達了我們的目標服務器，但它返回了一個錯誤
//   }
// };
// request.onerror = function() {
//   // There was a connection error of some sort
//   // 有某種連接錯誤
// };
// request.send();
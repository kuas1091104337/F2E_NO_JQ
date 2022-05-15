// $(function() {
//     $.getJSON("data.json", function(data) {
//         var html = "";
//         for (var i = 0; i < data.length; i++) {
//             html += "<tr>";
//             html += "<td>" + data[i]["date"] + "</td>";
//             html += "<td>" + data[i]["className"] + "</td>";
//             html += "<td>" + data[i]["peoples"] + "</td>";
//             html += "</tr>";
//         }
//         $("#content").html(html);
//     });
// });

$(function(){
    $.getJSON("data.json", function (data) {
        var webHtml = "";
        for (var i=0; i< data.length; i++) {
            webHtml+="<tr>";
            webHtml+="<td>"+data[i]["date"]+"</td>";
            webHtml+="<td>"+data[i]["className"]+"</td>";
            webHtml+="<td>"+data[i]["peoples"]+"</td>";
            webHtml+="</tr>";
        }
        document.getElementById("content").innerHTML=webHtml;
    });
});
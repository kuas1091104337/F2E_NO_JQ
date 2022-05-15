// $(function() {
//     var current = 0;
//     function getArticle(num, fetch) {
//         $.getJSON("http://tw.somee.com/demo/4-6/data.ashx", {
//                 fetch: fetch, //一次抓取幾筆
//                 num: num //抓取大於此編號
//         }, function(data) {
//             var html = "";
//             for (var i = 0; i < data.length; i++) {
//                 html += "<div>";
//                 html += "<div>" + data[i].title + "</div>";
//                 html += "<div>" + data[i].content + "</div>";
//                 html += "</div>";
//                 current = data[i].num;
//             }
//             $(".box").append(html);
//         });
//     }
//     $("#more").click(function() {
//         getArticle(current, 3);
//     });
//     getArticle(current, 5);
// });
$(function(){
    var current = 0;
    function getArticle(num, fetch){
        $.getJSON('http://tw.somee.com/demo/4-5/data.ashx', {fetch: fetch, num: num}, function(data){
            var dataHtml = '';
            for (var i=0; i<data.length; i++) {
                dataHtml += '<div>'
                dataHtml += '<div>'+data[i].title+'</div>';
                dataHtml += '<div>'+data[i].content+'</div>';
                dataHtml += '</div>'
            }
            $('.box').append(dataHtml);
        });
        $('#more').click(function(){
            getArticle(current, 3);     
        });
        getArticle(current, 5);
    }
});
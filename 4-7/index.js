// $(function() {
//     var oldder;
//     var current = 0;
//     function getArticle(num, fetch) {
//         $.getJSON("http://tw.somee.com/demo/4-7/data.ashx", {
//             fetch: fetch, //一次抓取幾筆
//             num: num //抓取大於此編號
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
//     $(window).scroll(function() {
//         if (oldder != current && $(window).scrollTop() > $(document).height() - $(window).height() - 100) {
//             getArticle(current, 3);
//             oldder = current;
//         }
//     });
//     getArticle(current, 5);
// });

$(function(){
    var oldder,
        current = 0;
    function getArticle(num, fetch){
        $.getJSON('http://tw.somee.com/demo/4-5/data.ashx', {fetch: fetch, num: num}, function(data){
            var dataHtml = '';
            for (var i=0; i<data.length; i++) {
                dataHtml += '<div>'
                dataHtml += '<div>'+data[i].title+'</div>';
                dataHtml += '<div>'+data[i].content+'</div>';
                dataHtml += '</div>'
                current = data[i].num;
            }
            $('.box').append(dataHtml);
        });
        $(window).scroll(function(){
            if () {
            getArticle(current, 3);     
                
            }     
        });
        getArticle(current, 5);
    }
});
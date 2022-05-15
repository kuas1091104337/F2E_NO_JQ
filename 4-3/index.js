// $(function() {
//     $("#search").keyup(function() {
//         var value = $(this).val().trim();
//         if (value) {
//             $.getJSON("http://tw.somee.com/demo/4-3/data.ashx", {
//                     search: value
//                 }, function(data) {
//                     if (data.length) {
//                         var html = "";
//                         for (var i = 0; i < data.length; i++) {
//                             html += "<a>" + data[i] + "</a>";
//                         }
//                         $(".list").html(html).show();
//                     } else {
//                         $(".list").hide();
//                     }
//                 });
//         } else {
//             $(".list").hide();
//         }
//     });
// });
$(function(){
    $('#search').keyup(function(){
        var inputValue = $(this).val().trim();
        if (inputValue) {
            $.getJSON('http://tw.somee.com/demo/4-3/data.ashx', {search:inputValue}, function(data){
                if (data.length) {
                    var inputHtml = '';
                    for (var i=0; i<data.length; i++) {
                        inputHtml += '<a>'+data[i]+'</a>';
                    }
                    $('.list').html(inputHtml).show();
                } else {
                    $('.list').hide();
                }
            });
        } else {
            $('.list').hide();
        }     
    });       
});
﻿// $(function() {
//     $("#name").keyup(function() {
//         $("#status").removeClass().addClass("loading");
//         $.getJSON("http://tw.somee.com/demo/4-1/data.ashx", { username: $(this).val() }, function (data) {
//             if (data) {
//                 $("#status").removeClass().addClass("no");
//             } else {
//                 $("#status").removeClass().addClass("ok");
//             }
//         });
//     });
// });

$(function(){
    $("#name").keyup(function(){
       $("#status").removeClass().addClass("loading");
       $.getJSON("http://tw.somee.com/demo/4-1/data.ashx", {username : $(this).val()}, function (data) {
            if(data){
                $("#status").removeClass().addClass("no");
            }else{
                $("#status").removeClass().addClass("ok");
            };
       });     
    });       
});
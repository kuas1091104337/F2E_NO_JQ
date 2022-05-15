// $(function() {
//     $("#menu").load("menu.html", function() {
//         $(this).find("a").on("mouseenter mouseleave click", function(e) {
//             if (e.type != "click") {
//                 var temp = $(this).text();
//                 $(this).text($(this).data("english"));
//                 $(this).data("english", temp);
//             } else {
//                 $(".content").load($(this).attr("href"));
//                 e.preventDefault();
//             }
//         });
//     });
// });

$(function(){
    $("#menu").load("menu.html", function() {
        $(this).find("a").on("mouseover mouseout click", function(e){
                // console.log($(this));
                // console.log($(this).text());    // 開課時間
                if(e.type!="click"){
                    var menuWord = $(this).text();
                    $(this).text($(this).data("english"));
                    $(this).data("english", menuWord);
                }else{
                    var web = $(this).attr("href");
                    $(".content").load(web);
                    // $(".content").load($(this).attr("href"));
                    console.log($(this).attr("href"));
                    // return false;
                    e.preventDefault();
                };
                
        });
    });     
});
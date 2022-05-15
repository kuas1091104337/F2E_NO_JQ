// $(function() {
//     function getIndex(index,length) {
//         console.log('length-a，1開始',length);
//         if (index < 0) {
//             index = length - 1; //最後一個的indexNumber
//         } else if (index >= length) {
//             index = 0;  //第一個的indexNumber
//         }
//         console.log("index-getIndex",index); 
//         return index;   
//     }
//     function getTop(index,top) {
//         if (top < 0) {
//             return index * 30;
//         } else if (top > 270) {
//             return (index - 9) * 30;
//         }
//     }
//     function getAdd(index, keyCode) {
//         if (keyCode == 40) {
//             return ++index;
//         }
//         return --index;       
//     }    
//     $("#search").keydown(function(e) {
//         if (e.keyCode == 40 || e.keyCode == 38) {   console.log("e.keyCode",e.keyCode);
//             var index = $("a.selected").removeClass().index();
//             console.log("index-1，0開始",index);   //沒有所以第一次是-1

//             index = getAdd(index,e.keyCode);
//             console.log("index-getAdd",index);   //下(40)：0 ，上(38)：-2

//             index = getIndex(index,$(".list>a").length);

//             var top = $(".list>a").eq(index).addClass("selected").position().top;
//             console.log("top-1",top);     //-120  因為i上面有四個，所以4*30=120，因為是超過list所以是負值是-120

//             $(".list").scrollTop(getTop(index,top));
//             console.log("top-getTop",top); //-120
//             // console.log("index-getTop",index);
//             console.log("index-getTop",(index - 9) * 30);//- 9*30=-270
//         }
//         if (e.keyCode == 13) {
//             $("a.selected").click();
//         }
//     });
//     // $(".list").on("mouseenter click","a",function(e) {
//     //     if (e.type=="click") {
//     //         $("#search").val($("a.selected").text());
//     //         $(".list").hide();
//     //     } else {
//     //         $("a.selected").removeClass();
//     //         $(this).addClass("selected");            
//     //     }
//     // });
//     $("#search").keyup(function(e) {
//         if (e.keyCode != 40 && e.keyCode != 38 && e.keyCode != 13) {
//             var value = $(this).val().trim();
//             if (value) {
//                 $.getJSON("http://tw.somee.com/demo/4-4/data.ashx", {
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
//             } else {
//                 $(".list").hide();
//             }
//         }
//     });
// });

$(function(){
    function getIndex(){
        if(index<0){
            index = length-1;
        }else if(index>=length){
            index=0;
        };
        return index;
    }
    function getTop(){
            
    }
    function getAdd(index, keyCode){
        if (keyCode == 40) {
            return ++index;
        }
        return --index;
    }
    $('#search').keydown(function(e){
        if (e.keyCode == 40 || e.keyCode == 38) {
           var index = $('a.selected').removeClass().index();
           index = getAdd(index, e.keyCode);
           index = getIndex(index, $('.list>a').length);
           var top = $('.list > a').eq(index).addClass('selected').position().top;
           $('.list').scrollTop(getTop(index,top));

        }
        if (e.keyCode == 13) {
            $('a.selected').click();
        }
    });
    $('#search').keyup(function(e){
        if (e.keyCode != 40 && e.keyCode != 38 && e.keyCode != 13) {
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
        }
    });

});
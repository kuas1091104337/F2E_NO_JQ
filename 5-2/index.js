// function callback(data) {
    // var source = data.result.results;
    // $("#search").keyup(function() {
    //     var val = $(this).val();
    //     var html = "";
    //     if (val) {
    //         var show = source.filter(function(a) {
    //             return a.addr.indexOf(val) > -1 || a.name.indexOf(val) > -1;
    //         });
    //         for (var i = 0; i < show.length; i++) {
    //             html += "<div>";
    //             html += "<div>" + show[i].name + "</div>";
    //             html += "<a href=\"http://maps.google.com.tw/maps?f=q&hl=zh-TW&z=16&q=" + show[i].addr + "\" target=\"_blank\">" + show[i].addr + "</a>";
    //             html += "</div>";
    //         }
    //     }
    //     $("#list").html(html);
    // });
//     console.table(source);
// }

function callback(data) {
    var source = data.result.results;
    //資料裡面的result物件，在裡面的results陣列內的物件
    // http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=42cfc382-f2b8-4c3a-87ad-37249634f78e
    $('#search').keyup(function(){
    		
    });
}
$(function() {
    var json;
    function show(data) {
        $.get("template.html", function(html) {
            $("#list").html(render(html, data));
        });
    }
    $.getJSON("data.json", function(data) {
        json = data;
        show(json);
    });
    $("#search").keyup(function() {
        console.log($(this).val());
        show(json.filter(function(a) {
            var name = a.name.toLowerCase();    //對比每筆資料的性名
            var search = $("#search").val().toLowerCase();  //toLowerCase 轉小寫
            return name.indexOf(search) > -1;   //回傳true或false
                                                //如果是true就回傳新的陣列、false就不動作
        }));
    });
});
(function($) {
    $.fn.render = function(data) {
        this.html(function(index, oldhtml) {
            for (var key in data) {
                oldhtml = oldhtml.replace("{{" + key + "}}", data[key]);
            }
            return oldhtml;
        });
        return this
    };
})($);
$(function() {
    $(".box1, .box2, .box3").render({title:"網頁設計基本觀念",content:"所謂的HTML檔案基本上是一個單純的文字檔..."}).find('h3').css('color', 'red');
    $(".box4, .box5, .box6").render({title:"CSS語法結構",content:"CSS是指Cascading Style Sheets稱為層疊樣式表..."}).find('p').css('color', 'blue');
    // $(".box3").render({title:"JavaScript程式設計",content:"JavaScript描述語言是一種網頁描述語言..."});
});
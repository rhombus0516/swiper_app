let title = "javascriptがつかえるようになりました";
alert(title);

$(document).ready(function() {
    $('.jQuery').on('click',function(){
        $(this).css('color','red');
    });
});
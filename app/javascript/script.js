let title = "javascriptがつかえるようになりました";
alert(title);

/* global $*/
$(document).ready(function() {
    $('.jQuery').on('click',function(){
        $(this).css('color','red');
    });
});
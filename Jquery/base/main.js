$(document).ready(function(){

    $('tr').click(function() {
        $(this).toggleClass("hid");
    });
    $('but').click(function(){
        $('tr').removeClass('hid')
    });






}); 
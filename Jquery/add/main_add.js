$(document).ready(function(){

$('.sec').keyup(function(){
    
var pass_1 = $('.fir').val();
var pass_2 = $('.sec').val();

if (pass_1 != pass_2) {
    $(".sec").css('background-color', 'red');
    } 
    if (pass_1 == pass_2) {
        $(".sec").css('background-color', 'green');
        }
    
});

}); 
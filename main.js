$(document).ready(function(){
    
    $('dd').addClass('hide');
    $('dt').on('click', function(){
    $(this).next().slideDown(200).siblings("dd").slideUp(200);
})
});
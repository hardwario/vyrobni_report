$(function(){

    $('.js-formenu').click(function(){
        $('.js-menu').toggleClass('d-none')
    })

    $(window).resize(function(){
        $('.js-menu').addClass('d-none')
    });


});

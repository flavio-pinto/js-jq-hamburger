var hambMenu = $('.header-right a');

hambMenu.click(function(){
    $('.hamburger-menu').show();
});

var closeMenu = $('.close');

closeMenu.click(function(){
    $('.hamburger-menu').hide();
});
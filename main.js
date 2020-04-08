var hambMenu = $('.header-right > a');

hambMenu.click(function(){
    $('.hamburger-menu').show();
});

var closeMenu = $('.hamburger-menu a.close');

closeMenu.click(function(){
    $('.hamburger-menu').hide();
});
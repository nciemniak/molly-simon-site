$(function() {
  // open mobile nav menu
  $('#mobile-nav-menu-icon').on('click', function() {
    $(".dim-overlay").fadeIn();
    $('#mobile-nav-menu').slideDown();
  });

  // close mobile nav menu
  $('img#close-icon').on('click', function() {
    $(".dim-overlay").fadeOut();
    $('#mobile-nav-menu').slideUp();
  });
});
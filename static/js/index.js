$(function() {
  // open mobile nav menu
  $('#mobile-nav-menu-icon').on('click', function() {
    $(".dim-overlay").fadeIn();
    $('#mobile-nav-menu').slideDown();
  });

  // click "x" to close mobile nav menu
  $('img#close-icon').on('click', function() {
    $(".dim-overlay").fadeOut();
    $('#mobile-nav-menu').slideUp();
  });

  // clicking anywhere on the page will also trigger close
  $(window).on('click', function(event) {
    if (event.target.id == 'mobile-nav-menu-icon')
      return;
    $(".dim-overlay").fadeOut();
    $('#mobile-nav-menu').slideUp();
  });
  
  //stop menu from closing if clicking within menu
  $('#mobile-nav-menu').on('click', function(event) {
    if(event.target.id == "close-icon")
      return;
    event.stopPropagation();
  });
});

// research dropdown navigation
function goToPastProjects(url) {
  query_params = "?section=past_projects"
  window.location.href = url + query_params;
}

function goToResearchGroup(url) {
  query_params = "?section=reserach_group"
  window.location.href = url + query_params;
}
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

// research dropdown navigation
function goToPastProjects(url) {
  query_params = "?section=past_projects"
  window.location.href = url + query_params;
}

// research dropdown navigation
function goToResearchGroup(url) {
  query_params = "?section=reserach_group"
  window.location.href = url + query_params;
}
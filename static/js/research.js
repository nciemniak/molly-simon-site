var params = new URLSearchParams(window.location.search);
var section = params.get("section");

if (section == "past_projects") {
  $("#past-projects-tab").prop("checked", true);
}
else if (section == "reserach_group") {
  $("#research-group-tab").prop("checked", true);
}
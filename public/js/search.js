$(document).ready(function() {
  $("#submit").click(function() {
    var avail = $("input[name='opt2radio']:checked").val();
    var searchSkill = $("input[name='optradio']:checked").val();
    if (searchSkill) {
      alert("Your search term is " + searchSkill);
    }
    if (avail) {
      alert("Your availability is " + avail);
    }
  });
});

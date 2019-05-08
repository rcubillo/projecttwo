$(document).ready(function() {
  console.log("I am Here");

  var postService = function(e) {
    e.preventDefault();
    var newService = {
      name: $("#activityName").val(),
      date: $("#date").val(),
      description: $("#description")
    };
    console.log(newService);
  };

  $("#formSubmit").on("click", postService);
});

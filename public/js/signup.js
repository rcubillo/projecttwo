$(document).ready(function() {
  //References to our form and input.
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var skillsInput = $("select#skillsinput");

  //When we click the signup button, we validate that the email, password and skills  are not blanck
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      skills: skillsInput.find("option:selected").val(),
    };

    // Wont submit the post if we are missing a email or password
    if (userData.email === "" || userData.password === "" || userData.skills === "") {
      return;
    }

    // If we have an email,  password and skills, then, run the signUpUser fucntion.
    signUpUser(userData.email, userData.password, userData.skills);
    emailInput.val("");
    passwordInput.val("");
    skillsInput.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, skills) {
    $.post("/api/signup", {
      email: email,
      password: password,
      skills: skills
    }).then(function(data) {
       window.location = "/login";
   // If there's an error, handle it by throwing up a boostrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});

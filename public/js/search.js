
$(document).ready(function () {
    $("#submit").click(function () {
        
        var searchSkill = $("input[name='optradio']:checked").val();
        if (searchSkill) {
            alert("Your search term is " + searchSkill);
        }
    });

});
    

    
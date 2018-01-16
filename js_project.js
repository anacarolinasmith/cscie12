$(document).ready(function () {
    $("#form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            }
        }
    });
    var mybodyid = $("body").attr("id");
    var mynavid = "#nav" + mybodyid;
    $(mynavid).attr("id", "iamhere");
    $("#toggle1").click(
        function (event) {
            $("#q1-a").toggle("slow");
            event.preventDefault();
        }
    );
    $("#toggle2").click(
        function (event) {
            $("#q2-a").toggle("slow");
            event.preventDefault();
        }
    );
});

function displayProgramOptions() {
    var programopt = document.getElementById("program_options");
    var inputYes = document.getElementById("program_yes");
    if (inputYes.checked === true) {
        programopt.style.display = "block";
    } else {
        programopt.style.display = "none";
    }
}

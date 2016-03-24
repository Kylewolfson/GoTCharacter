$(document).ready(function() {

  $("#survey").submit(function(event) {
    event.preventDefault();
    var score = parseInt($("#honor").val());
    score += parseInt($("#sadism").val());
    score += parseInt($("#rule").val());
    $("#output").show();

    if ($("#patricide").val() === "Yes") {
      $("#result").text("Tyrion");
      }
    else {
      if (score < 5) {
        $("#result").text("Joffrey");
      }

      else if (score > 8){
        $("#result").text("Ned Stark");
      }

      else {
        $("#result").text("Jaime Lannister");
      }
    }
  });
});

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var food = $("#food").val();
    var born = $("#born").val();
    var gender = $("input:radio[name=gender]:checked").val();
    var music = $("#music").val();
    var color = $("#color").val();

    var bigstring = "Your name is " + name +  ". Your favorite food is " + food + ". Your birthday is " + born + ". Your gender is " + gender + ".  Your favorite music is " + music + ".";

    var bigstring = "";
    if (name != "") {
      bigstring += "Your name is " + name + ". ";
    }
    if (gender != undefined) {
      bigstring += "Your gender is " + gender + ". "
    }
    if (food != "") {
      bigstring += "Your favorite food is " + food + ". "
    }
    if (born != "") {
      bigstring += "Your birth date is " + born + ". "
    }
    if (music != "-Choose Favorite Music-") {
      bigstring += "Your favorite type of music is " + music + ". "
    }


    $("body").css("backgroundColor", color);
    $("#results").css("border", "1px solid #D1D1D1");
    $("#results").text(bigstring);
  });
});

$(document).ready(function () {
  $("form#entry").submit(function () {
    event.preventDefault();
    var length1 = parseInt($("#length1").val());
    var length2 = parseInt($("#length2").val());
    var length3 = parseInt($("#length3").val());

    var a = length1 + length2;
    var b = length2 + length3;
    var c = length3 + length1;

    if (a < length3 || b < length1 || c < length2) {
      $("#output").text("You don't even triangle!")
    } else if (length1 === length2 && length1 === length3) {
      $("#output").text("Equilateral!")
    } else if (length1 === length2 || length2 === length3 || length1 === length3) {
      $("#output").text("Isosceles!")
    } else if (length1 != length2 && length2 != length3 && length1 != length3) {
      $("#output").text("Scalene!")
    }
  });
});

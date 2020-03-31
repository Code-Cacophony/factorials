var factorial = function (number) {
  if (number > 0) {
    var total = 1;
    for (var i = number; i > 0; i--) {
      total *= i;
    }
    return total;
  } else if (number === 0) {
    return 1;
  } else {
    alert("You can't perform factorials on negative numbers! That's undefined!");
  }
}


$(document).ready(function () {
  $("#user-info").submit(function (event) {
    event.preventDefault();

    var numberInput = parseInt($("#factorial").val());

    var result = factorial(numberInput);

    $(".result").text(result)

  })
})
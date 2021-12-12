
$(document).ready(function () {
  const $text = document.getElementById("counter")

  let count = 140
  const updateDisplay = () => {
    document.getElementById("counter").innerHTML = count;
  };

  $("#tweet-text").on('keyup', function (event) {

    count = 140 - $(this).val().length;

    if (event.key === "Backspace") {
      count + 1;
    }

    if ($(this).val().length > 139) {    // if char under 0, turn counter red
      $text.style.color = "red"

      updateDisplay();
    }

    else {
      $text.style.color = "black"
      updateDisplay();
    }

    $("form").on("submit", function (event) {    // on submit, refresh counter and make it black
      
      if ($(this).val().length > 139) {    // if char under 0, turn counter red
        $text.style.color = "red"
      }  
    
      return count = 140
      
    })

  })


});

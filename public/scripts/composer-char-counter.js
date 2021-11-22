


 $(document).ready(function() {
  const $text = document.getElementById("counter")

  let i = 140
  const updateDisplay = () => {
  document.getElementById("counter").innerHTML = i;
};

  $("#tweet-text").on('keydown', function(event) {
    if(i <= 0){    // if char under 0, turn counter red
      $text.style.color = "red"
      i--;
     updateDisplay();
    } 
    const key = event.key;

    if (key === "Backspace") { // attempt at counter reversing when letters deleted
      i++
      updateDisplay();
    }

    else {
    i--;
    updateDisplay();
    }
    $("form").on("submit", function (event) {    // on submit, refresh counter and make it black
      $text.style.color = "black"
      return i = 140
    })
   
    })

  
});
 
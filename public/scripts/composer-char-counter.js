


 $(document).ready(function() {
  const $text = document.getElementById("counter")

  let i = 140
  const updateDisplay = () => {
  document.getElementById("counter").innerHTML = i;
};

  $("#tweet-text").on('keydown', function(event) {
    if(i <= 0){
      $text.style.color = "red"
      i--;
     updateDisplay();
    } 
    const key = event.key;

    if (key === "Backspace") {
      i++
      updateDisplay();
    }

    else {
    i--;
    updateDisplay();
    }
    $("form").on("submit", function (event) { 
      $text.style.color = "black"
      return i = 140
    })
   
    })

  
});
 



 $(document).ready(function() {
  const $text = document.getElementById("counter")
  let textLength = 0;
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
      return i = 140
    })
   
    })

  
});
 
document.getElementById("button").addEventListener("click", function() {
    // Grabs the values from input fields
    var p = document.getElementById("p").value;
    n=12,
    r=roi/n/100,
      result=0,
    instalments=n*t
    var t =document.getElementById("t").value;
    var roi = document.getElementById("roi").value;
    // selects the result element
    
    
    var result = document.getElementById("result");
    // Returns the result of the percentage portion amount
    return (result.textContent = p * Math.pow((1 + r/n), n*t));
  });
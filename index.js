var counter = 0;

var clickHandler = function(eventObject){
    counter = counter + 1;
    document.querySelector("#messages").innerText = `${counter}`;
  }
  
  document.querySelector("#first_button").addEventListener("click",clickHandler);
var container = document.querySelector(".container");

container.addEventListener("", function(event) {
  var element = event.target;

  if(element.matches(".box")) {
    var state = element.getAttribute("data-state");

    if (state === "hidden") {
      element.textContent =  element.dataset.number;
      element.dataset.state = "visible";
  } 
  // TODO: Complete function
}});


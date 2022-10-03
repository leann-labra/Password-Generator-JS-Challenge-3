var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
incrementEl.addEventListener("click", function () {
  count++;
  countEl.innerHtml = count;
}
);

decrementEl.addEventListener("click", function () {
  if (count > 0) { 
  count--;
  countEl.innerHtml = count;
}
}
);
// TODO: Add event listener to decrement button 


function keydownAction(event) {
  // TODO: Complete keydown function
  event.preventDefault();
  document.querySelector("#status").innerHTML = "KEYDOWN Event";

}

function keyupAction(event) {
  event.preventDefault();
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", (event)=> {
  var name = event.key;
  var code = event.code;
  // Alert the key name and key code on keydown
  alert(`Key pressed ${Keyup} \r\n Key code value: ${code}`);
}, false);

document.addEventListener('keydown', (event)=> {
  var name = event.key;
  var code = event.code;
  // Alert the key name and key code on keydown
  alert(`Key pressed ${name} \r\n Key code value: ${code}`);
}, false);

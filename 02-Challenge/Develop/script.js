// Assignment Code
var generateBtn = document.querySelector("#generate");

var password = {
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lower: 'abcdefghijklmnopqrstuvwxyz',
  
}
// Write password to the #password input
function writeRandomPassword() {
  var userInput = window.prompt("Password length? (enter value between (8-128)")

  //first ask user the length
  if(isNaN(passwordLength)) {
    window.alert('Hey! That is not a number')
    return;
  } else 
  if (passwordLength < 8 || passwordLength > 128 ) {
    window.alert("Must choose a password length between values 8-128")
    return;
  } else {
    return;
  }

  var userInput = window.prompt("uppercase or lowercase?")

  

  


  
}

function generatePassword() {
  var password = generatePassword()

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writeRandomPassword);


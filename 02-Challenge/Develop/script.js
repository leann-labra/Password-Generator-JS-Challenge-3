// Assignment Code
var generateBtn = document.querySelector("#generate");

//will attempt to use str.split('') to convert string into an array
let number = ("0123456789");
let symbols = ("!@#%$^&*()");
let alphaLower = ("abcdefghijkllmnopqrstuvwxyz");
let alphaUpper = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

var confirmnNumber = "";
var confirmSymbol = "";
var confirmLower = "";
var confirmUpper = "";

function writeRandomPassword() {

  //prompt to confirm how long user would like their password
  var userInput = window.prompt("Password length? (enter value between (8-128)");

  if (isNaN(userInput)) {
    window.alert("Please choose an appropriate value!");
    return;
  } 
  else if (userInput < 8 || userInput > 128) {
    window.alert("Hey now! You're not listening to me! Please pick a value between 8-128 for your password!")
    return;
  } 

  console.log(userInput); //check to see if function above works properly

  window.alert("Your password will have" + userInput + "characters");

  var confirmNumber = confirm("Click OK to confirm if you would like to include special characters");
  var confirmSymbols = confirm("Click OK to confirm if you would like to include numeric characters");    
  var confirmLower = confirm("Click OK to confirm if you would like to include lowercase characters");
  var confirmUpper = confirm("Click OK to confirm if you would like to include uppercase characters");
 
  //need to come up with alternatives if no 

//confirmed booleans, need to pull together

  var passwordCharacters = '';

//attempting to combine strings into arrays, eventally want to convert strings into lists using str.split
  if (confirmNumber) {
  let = number.split('');
  passwordCharacters = passwordCharacters.concat(number);
  }

  if (confirmSymbols) {
    let = symbols.split('');
    passwordCharacters = passwordCharacters.concat(symbols);
  }

  console.log(passwordCharacters); 
  

}

function generatePassword() {
  var password = generatePassword()

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
 generateBtn.addEventListener("click", writeRandomPassword)

// Assignment Code
var generateBtn = document.querySelector("#generate");

//will attempt to use str.split('') to convert string into an array
var number = ("0123456789");
var symbols = ("!@#%$^&*()");
var lower = ("abcdefghijkllmnopqrstuvwxyz");
var upper = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

var confirmnNumber = "";
var confirmSymbol = "";
var confirmLower = "";
var confirmUpper = "";

function generatePassword() {

  //prompt to confirm how long user would like their password
  var passLength = window.prompt("Password length? (enter value between (8-128)");

  if (isNaN(passLength)) {
    window.alert("Please choose an appropriate value!");
    return;
  } 
  else if (passLength < 8 || passLength > 128) {
    window.alert("Hey now! You're not listening to me! Please pick a value between 8-128 for your password!")
    return;
  } 

  console.log(passLength); //check to see if function above works properly

  window.alert("Your password will have " + passLength + " characters");

  var confirmNumber = confirm("Click OK to confirm if you want to include numeric characters");
  var confirmSymbols = confirm("Click OK to confirm if you want to include special characters");    
  var confirmLower = confirm("Click OK to confirm if you want like to include lowercase characters");
  var confirmUpper = confirm("Click OK to confirm if you want like to include uppercase characters");
 
  //need to come up with alternatives if no 

//confirmed booleans, need to pull together

  var passwordCharacters = '';

//attempting to combine strings into arrays, eventally want to convert strings into lists using str.split
  if (confirmNumber) { //if confirm number is true, then string will be split into an array
  
   const numberArray = number.split('');
  //number.forEach((number) => {
    //console.log(number)})
  passwordCharacters = passwordCharacters.concat(numberArray);
  } 

  if (confirmSymbols) {
    const symbolsArray = symbols.split('');
    passwordCharacters = passwordCharacters.concat(symbolsArray);
  } 

  if (confirmLower) {
    const lowerArray = lower.split('');
    passwordCharacters = passwordCharacters.concat(lowerArray);
  } 

  if (confirmUpper) {
    const upperArray = upper.split('');
    passwordCharacters = passwordCharacters.concat(upperArray);
  }

  console.log(passwordCharacters); //should include combined arrays
  
  var randomPassword = ""
      
      for (var i = 0; i < passLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        //console.log(randomPassword)
      }
      return randomPassword;

}

function createPassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  if (!password) {
    return;
  }

  if (password) {
  passwordText.value = password;
  }
}


// Add event listener to generate button
 generateBtn.addEventListener("click", createPassword)

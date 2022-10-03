// Assignment Code
var generateBtn = document.querySelector("#generate");
// declared variable selects id generator to trigger function
//var char = '0123456789!@#$%^&.*()abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//var passwordLength = 8-128;
//if (
 // char = '0123456789!@#$%^&.*()abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';



// Write password to the #password input
function writeRandomPassword() {
  let char = '0123456789!@#$%^&.*()abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return char[Math.floor(Math.random () * char.length)]
}

  var password = generatePassword(); //called method 
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writeRandomPassword);

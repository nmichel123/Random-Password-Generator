var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
var upperCaseCharacters = ['K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'];
var allCharacters = "0123456789!@#$%^&*()abcdefghijKLMNOPQRST";
var randomPasswordGenerated ="";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {
  var characterCount = prompt("How many characters would you like? (Must be between 8-128 characters)");
  while (characterCount < 8 || characterCount > 128) {
    characterCount = prompt("Length must be 8-128 characters. How many characters would you like your password to be?");
  }
  var lowerCase = confirm("Do you want lowercase characters?");
  var upperCase = confirm("Do you want uppercase characters?");
  var numericChar = confirm("Do you want numeric characters?");
  var specialChar = confirm("Do you want special characters?");

  for (var i=0, n=allCharacters.length; i<128; i++){
    password += allCharacters.charAt(Math.floor(Math.random()* n));
  }
  return password
  // if (lowerCase===true) {
  //   return lowerCaseCharacters[Math.floor(Math.random()*lowerCaseCharacters.length)];
  // }

  // if (upperCase===true) {
  //   return upperCaseCharacters[Math.floor(Math.random()*upperCaseCharacters.length)];
  // }

  // if (numericChar===true) {
  //   return numericCharacters[Math.floor(Math.random()*numericCharacters.length)];
  // }

  // if (specialChar===true) {
  //   return specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
  // }
 
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

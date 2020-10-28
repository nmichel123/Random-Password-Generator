// Character arrays 
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Function to prompt user for password options
function passwordOptions() {

  // Variable to store the length of the user's password
  var length =  parseInt(
    prompt("How many characters would you like? (Must be between 8-128 characters)")
  );
 
  // Conditional statement to check if password is a number
  if (isNaN(length) === true) {
    alert('Password length must be typed as a number');
    return; 
  }

  // Conditional statement to check if password is at least 8 characters
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return; 
  }

  // Conditional statement to check if password is less than 128 characters
  if (length > 128) {
    alert('Password length must be less than 128 characters');
    return; 
  }

  // Variables to store boolean values regarding inclusion of character types 
  var lowerCase = confirm("Do you want to include lowercase characters?");
  var upperCase = confirm("Do you want to include uppercase characters?");
  var numericChar = confirm("Do you want to include numeric characters?");
  var specialChar = confirm("Do you want to include special characters?");

  // Conditional statement to make sure at least one character type is selected/filter character types
  if (
    lowerCase === false &&
    upperCase === false &&
    numericChar === false &&
    specialChar === false 
  ) {
    alert ('Must select at least one character type');
    return; 
  }

  // Object for storing user input 
  var passwordOptions = {
    length: length,
    lowerCase: lowerCase, 
    upperCase: upperCase,
    numericChar: numericChar,
    specialChar: specialChar
  };

  return passwordOptions;
}

//Function to select random object from an array 
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex]

  return randElement 
}

//Function to generate password based off user input 
function generatePassword() {
  // Variable to receive options from the passwordOptions function 
  var options =  passwordOptions(); 

  // Variable to store password as it is created 
  var result = []; 

  // Array to store character types to be included in the result 
  var possibleCharacters = [];

  // Array to contain one of each type of chosen characters 
  var guaranteedCharacters = []; 

  // Conditional statements that adds array of character types to possible and guaranteed character arrays 
  if (options.lowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCaseCharacters);
    guaranteedCharacters.push(getRandom(lowerCaseCharacters));
  }

  if (options.upperCase) {
    possibleCharacters = possibleCharacters.concat(upperCaseCharacters);
    guaranteedCharacters.push(getRandom(upperCaseCharacters));
  }

  if (options.numericChar) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.specialChar) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  // For loop to match user length input from the possible characters array and into the result variable 
  for (var i=0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  // For loop to mix in one of each guaranteed characters into result
  for (var i=0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i]; 
  }

  // Turn the result into a string and pass into the writePassword function
  return result.join(''); 
}

// Get references to the #generate element in HTML/CSS
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

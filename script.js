<<<<<<< HEAD
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
=======
// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Hey!  You clicked the button!");
//ask for length
var characterlength = prompt("How many characters will your password be? Enter a number between 8 and 128");

//ask for character type
var charactertype = prompt("Enter a character type: special, numeric, uppercase, lowercase.");
var charoptions = "";
  if( charactertype.toLowerCase === "lowercase" ) {
    charoptions = "abcdefghijklmnopqrstuvwxyz";
  } else if( charactertype.toLowerCase === "uppercase" ) {
    charoptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charactertype.toLowerCase === "numeric" ) {
    charoptions = "0123456789";
  } else if( charactertype.toLowerCase === "special" ) {
    charoptions = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } 
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password; 
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
>>>>>>> 17d33641a28dc963f60dd7d14ae142f50afd859b

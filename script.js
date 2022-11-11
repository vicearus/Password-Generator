// Assignment Code
var generateBtn = document.querySelector("#generate");
alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
upper = [alphabet.toUpperCase()]

// Write password to the #password input
function writePassword() {
  length = prompt("Password Length?")
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");


  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(length)
console.log(upper[0])

// Length query: prompt, convert string to number
// Numbers query
// Special char query


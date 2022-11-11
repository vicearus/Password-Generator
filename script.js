// Assignment Code
var generateBtn = document.querySelector("#generate");
alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","Q","X","Y","Z"]
number = [0,1,2,3,4,5,6,7,8,9]
spec = ["!","@","#","$","%","^","&","*","(",")","-","_","+","=","[","{","]","}","\\","|",":",";","'","\"",",","<",".",">","/","?"]
gen = [alphabet, upper, number, spec]


// Write password to the #password input
function writePassword() {
  input = prompt("Please pick a password length from 8 to 128.")
  input = parseInt(input)

  if (input === NaN || input > 128 || input < 8){
    alert("Please enter an integer between 8 and 128.");
    return
  }
  choiceAlphabet = confirm("Include lower case letters?")
  choiceUpper = confirm("Include upper case letters?")
  choiceNumber = confirm("Include numbers?")
  choiceSpec = confirm("Include special characters?")

  if ((choiceAlphabet && choiceNumber && choiceUpper && choiceSpec) === false){
    alert("Please pick at least one option.")
  }
// Declare variables for use in the for loop.
array = [] 
var arrayLength

  password = function(){
    // Loops a number of times equal to the user input
  for (let i = 0; i < input; i++) {
    //Chooses a number between 0 and 3, which will be used to choose an array
    arraySelector = Math.floor(Math.random()*gen.length);
    //Sets array length for ran char
    //if ranArray = 0 or 1 then i want length = 26
    //if ranArray = 2 then i want length = 10
    //if ranArray = 3 then i want length = 30
    if (arraySelector === 0) {
      var arrayLength = 26;
    }else if (arraySelector === 1){
      var arrayLength = 26;
      } else if (arraySelector === 2){
      var arrayLength = 10
      } else{
        var arrayLength = 30
      }
      //random array is chosen from the 4
    ranArray = gen[arraySelector]
    // generates a character randomly from alphabet, upper, number, or spec
    ranChar = ranArray[Math.floor(Math.random()*arrayLength)]
    // Pushes randomly chosen character into an initially blank array
    array.push(ranChar);
  }
  //turns the items in array into a single text string.
  text = array.join('')
}
  password();
alert("Your password is " + text)
  document.getElementById("password").textContent = text
  }
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// console.log(length)
// console.log(typeof length)
// console.log(typeof choiceAlphabet)
// console.log(choiceAlphabet)
// console.log(gen)
// console.log(alphabet.join(''))

// Length query: prompt, convert string to number
// Numbers query
// Special char query
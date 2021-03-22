// Assignment code here
var generateBtn = document.querySelector("generate");
/* Variable Arrays Begin */
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChar = ["!", "@", "3", "$", "%", "^", "&", "*", "+", "?", "<", "~", "_"];
/* Variable Arrays End */

/* Variable Declaration Begins */
var confirmLength = "";
var confirmUpper;
var confirmLower;
var confirmSpecialCharacter;
var confirmNumber;
/* Variable Declaration Ends */

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* Start Function Begins */
function generatePassword() {
  
  passwordLength = prompt("How many characters would you like your password to contain?");
  console.log("Password Length" + passwordLength);

  if(!passwordLength) {
    alert("Required Entry!");
  }

  else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Please select a password between 8 and 128 characters.");
    console.log("Password Length" + passwordLength);
  }

  else {
    confirmLower = confirm("Do you want this to contain lower case letters?");
    console.log("Lower Case" + confirmLower);
    confirmUpper = confirm("Do you want this to contain upper case letters?");
    console.log("Upper Case" + confirmUpper);
    confirmNumber = confirm("Do you want this to contain numbers?");
    console.log("Number" + confirmNumber);
    confirmSpecialCharacter = confirm("Do you want this to contain special characters?");
    console.log("Special Character" + confirmSpecialCharacter);
  };

  /* Random variable generation loop begins */
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }
  /* Random variable generation loop ends */

  /* Non-Answered variable for password contents & length begins */
  var passwordBlank = [];
  /* Non-Answered variable for password contents * length ends */


  /* Variables if user chooses not to answer begins*/
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecialCharacter) {
    userChoices = alert("Please select a required criteria.");
  }

  /* If user chooses four variables */
  else if (confirmLower && confirmUpper && confirmNumber && confirmSpecialCharacter) {
    userChoices = lowerCase.concat(upperCase, number, specialCharacter);
    console.log(userChoices)
  }

  /* If user chooses three variables */
  else if (confirmLower && confirmUpper && confirmSpecialCharacter) {
   userChoices =  lowerCase.concat(upperCase, SpecialCharacter);
   console.log(userChoices);
  }

  else if (confirmLower && confirmUpper && confirmNumber) {
    userChoices = lowerCase.concat(upperCase, number);
    console.log(userChoices);
  }

  else if (confirmLower && confirmSpecialCharacter && confirmNumber) {
    userChoices = lowerCase.concat(number, specialCharacter);
    console.log(userChoices);
  }

  else if (confirmSpecialCharacter && confirmNumber && confirmUpper) {
    userChoices = lowerCase.concat(specialCharacter, number);
    console.log(userChoices);
  }

  /* If user chooses two options */
  else if (confirmLower && confirmSpecialCharacter) {
    userChoices = lowerCase.concat(SpecialCharacter);
    console.log(userChoices);
  }

  else if (confirmLower && confirmNumber) {
    userChoices = lowerCase.concat(number);
    console.log(userChoices);
  }

  else if (confirmUpper && confirmNumber) {
    userChoices = upperCase.concat(number);
    console.log(userChoices);
  }

  else if (confirmLower && confirmUpper) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  }

  else if (confirmUpper && confirmSpecial) {
    userChoices = upperCase.concat(specialCharacter);
    console.log(userChoices);
  }

  else if (confirmNumber && confirmSpecial) {
    userChoices = number.concat(specialCharacter);
    console.log(userChoices);
  }



  /* If user chooses one variable */
  else if (confirmLower) {
    userChoices = lowerCase;
    console.log(userChoices);
  }

  else if (confirmUpper) {
    userChoices = upperCase;
    console.log(userChoices);
  }

  else if (confirmNumber) {
    userchoices = numbers;
    console.log(userChoices);
  }

  else if (confirmSpecialCharacter) {
    userchoice = specialCharacter;
    console.log(userChoices);
  }

  /* Password Generation Final */
  var password = passwordBlank.join("");
  console.log("Your generated password is: " + password);
  return password;
}

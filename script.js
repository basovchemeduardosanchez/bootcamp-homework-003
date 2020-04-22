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

function generatePassword() {
    // BEGIN LOGIC
// PROMPT FOR SIZE
// ENCAPSULATE THIS ONTO A LOOP SO THE USER IS OBLIGGED TO PROVIDE A VALID NUMBER

// This will store the strings
var lowercaseArray = "abcdefghijklmnopqrstuvxyz";
var uppercaseArray = lowercaseArray.toUpperCase();
var numericArray = "1234567890";
var specialCharArray = [
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "+",
    "(",
    ")",
    "*",
    "-",
    ",",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "'",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~"
];
var randomString;
var mixedString = new Array();

var stringSize = prompt("Select a lenght between 8 and 128");
while (stringSize < 8 || stringSize > 128) {
    alert("The provided lenght is not valid please try again");
    stringSize = prompt(" Select a lenght between 8 and 128");
}

console.log("String size : " + stringSize);

// Get selected parameters (lower,upper,special,numerical)
var parametersCount = 0;
// The minimum parameters required are 1 as long as we don't have at minimum one parameter
// This loop will keep requesting te user to prive inputs
while (parametersCount < 1) {
    var lowerCase = confirm("Would you like to use Lowercase values?");
    // This values are stored with the confirms
    console.log("lowercas : " + lowerCase);
    // If this parameter was selected by the user then
    // add one to the parametersCount variable
    // Other wise keep going
    // TODO: This is not necessary, just use lowercase as in if( lowerCase ) because it is already a boolean
    if (lowerCase === true) {
        parametersCount++;
    }
    console.log( "Parameters Count : " + parametersCount );
    
    
    
    var upperCase = confirm( "Would you like to use Uppercase values?" );
    console.log("uppercase : " + upperCase );
    if ( upperCase === true ) {
        parametersCount++;
    }
    // Same structure as described before for the other parameters
    console.log( "Parameters Count : " + parametersCount );
    
    
    
    var specialCharacters = confirm(
        "Would you like to use special characters?"
    );
    console.log("Special Characters : " + specialCharacters);
    if (specialCharacters === true) {
        parametersCount++;
    }
    console.log("Parameters Count : " + parametersCount);
    
    
    
    var numericalCharacters = confirm(
        "Would you like to use numerical characters?"
    );
    console.log("Numerical Characters : " + numericalCharacters);
    if (numericalCharacters === true) {
        parametersCount++;
    }

    // Final evaluation before starting the Loop again
    if ( parametersCount < 1 ) {
        alert( "At least you need to select one character type \n please try again" );
    }
}
// RANDOMIZER POPULATION
console.log("BEGIN RANDOMIZER POPULATION");

// stringSize is already a number between 8 and 128
for ( i = 0; i < stringSize; i=i+0) {
    // Resolve lowercase
    if ( lowerCase === true ) {
        // Notice that we are usnig Math.foor the Array.length-1
        // usually indicates the number of available positions on the array
        // but since que are already using Math.floor wich is relative 
        // to substract 1 to the Array.lenght is no longer requred to use 
        // lowercaseArray.length -1
        randomString = Math.floor( Math.random() * lowercaseArray.length );
        console.log( "lowercase: " + lowercaseArray[randomString] );
        // We add to the index so that it skips one more character when the loop evaluates the condition
        i++;
        console.log("index" + i );
        mixedString.push(lowercaseArray[randomString] );
        console.log("built : " + mixedString );
    }
    // Resolve uppercase
    if ( upperCase === true ) {
        randomString = Math.floor( Math.random() * uppercaseArray.length );
        console.log( "uppercase: " + uppercaseArray[randomString] );
        // We add to the index so that it skips one more character when the loop evaluates the condition
        i++;
        console.log("index" + i);
        // TODO: Push the character to the array
        mixedString.push(uppercaseArray[randomString]);
        console.log( "built : " + mixedString );
    }
    // Resolve special characters
    if ( specialCharacters === true ) {
        randomString = Math.floor( Math.random() * specialCharArray.length );
        console.log( "numeric : " + specialCharArray[randomString] );
        // We add to the index so that it skips one more character when the loop evaluates the condition
        i++;
        console.log("index" + i );
        // DONE: Push the character to the array 
        mixedString.push( specialCharArray[randomString] );
        console.log("built" + mixedString );
        
    }
    // Resolve numerical characters 
    if (numericalCharacters === true) {
        randomString = Math.floor( Math.random() * numericArray.length );
        console.log("special: " + numericArray[randomString]);
        // We add to the index so that it skips one more character when the loop evaluates the condition
        i++;
        console.log("index : " + i);
        // TODO: Push the character to the array
        mixedString.push( numericArray[randomString] );
        console.log("built :" + mixedString );
    }
}
// END LOGIC

function shuffle( mixCharacters ) {
    // [i=0][i=1][i=2][i=3]
    //  [A]  [B]  [C]  [D]
    // Rememnber the length is not equal to the last index
    // Therefore we make this decrement mixCharacters.length-1
    var currentIndex = mixCharacters.length - 1,
        tempValue,
        randomIndex;

    while (currentIndex >= 0) {
        // Obtain a randmized values that is between the last index value
        // of the array plus one, this is because the last index is not equal
        // to the length of the array
        // arr.length =4
        // arr last index =3
        // CURRENT_INDEX
        //                 ↓
        //[i=0][i=1][i=2][i=3]
        // [A]  [B]  [C]  [D]
        // arr.length = currenIndex + 1
        randomIndex = Math.floor(Math.random() * currentIndex + 1);
        console.log(randomIndex);
        // The temp value is used to store the
        // the content on the currentIndex

        // arr.length =4
        // arr last index =3

        // CURRENT_INDEX
        //                 ↓
        //[i=0][i=1][i=2][i=3]
        // [A]  [B]  [C]  [D]
        // currentIndex = 3

        // RANDOM_INDEX
        //       ↓
        //[i=0][i=1][i=2][i=3]
        // [A]  [B]  [C]  [D]
        // randomIndex = 1

        // tempValue will be equals to the content
        // of the [currentIndex] position
        // NOT THE NUMERICAL VALUE OF THE INDEX
        // tempValue = D
        tempValue = mixCharacters[currentIndex];
        console.log(tempValue);
        // This operation assigns the content value at the
        // random position to the content of the current position

        // arr.length =4
        // arr last index =3

        // CURRENT_INDEX
        //                 ↓
        //[i=0][i=1][i=2][i=3]
        // [A]  [B]  [C]  [D]
        // currentIndex = 3

        // RANDOM_INDEX
        //       ↓
        //[i=0][i=1][i=2][i=3]
        // [A]  [B]  [C]  [D]
        // randomIndex = 1

        // SHUFFLE_PROCESS
        // tempValue = D

        //mixCharacters[currentIndex]= D
        console.log(mixCharacters[currentIndex]);
        //mixCharacters[randomIndex] = B
        console.log(mixCharacters[randomIndex]);

        //mixCharacters[currentIndex] = mixCharacters[randomIndex]
        //mixCharacters[currentIndex]= D
        mixCharacters[currentIndex] = mixCharacters[randomIndex];
        console.log(mixCharacters[currentIndex]);
        // This sets the temporary value retrieved before on the random index because
        // the las operation assigns the same content value to both pstions "random" and "current"

        // mixCharacters [currenIndex] = B
        // mixCharacters [randomIndex] = B
        // NOTE:Notice the content value on currenIndex[3]
        //–––––––––––––––––––––––––––––––––––––––––––––––––––|
        //     CURRENT_STATUS     |     ORIGINAL_STATUS      |
        //___________________________________________________|
        //     CURRENT_INDEX      |     CURRENT_INDEX        |
        //                  ↓     |                     ↓    |
        // [i=0][i=1][i=2][i=3]   |    [i=0][i=1][i=2][i=3]  |
        //  [A]  [B]  [C]  [B]    |     [A]  [B]  [C]  [D]   |
        //    currentIndex = 3    |     currentIndex = 3     |
        //________________________|__________________________|
        //     CURRENT_STATUS     |     ORIGINAL_STATUS      |
        //––––––––––––––––––––––––|––––––––––––––––––––––––––|
        //                        |     RANDOM_INDEX         |
        //                        |           ↓              |
        //                        |    [i=0][i=1][i=2][i=3]  |
        //                        |     [A]  [B]  [C]  [B]   |
        //                        |     randomIndex = 1      |
        //________________________|__________________________|

        // mixCharacters[currentIndex]= B
        // mixCharacters[randomIndex]= B
        // tempValue = D

        // This is performed that way so that we can recover the value that we have
        // vewritten in the line above otherwise you will endup with repeated values
        // and lost characters because
        mixCharacters[randomIndex] = tempValue;
        // mixCharacters [currenIndex] = B
        // mixCharacters [randomIndex] = D
        // NOTE:Notice the content value on currenIndex[3]
        // NOTE:Notice the content value on randomIndex[1]
        //–––––––––––––––––––––––––––––––––––––––––––––––––––|
        //     CURRENT_STATUS     |     ORIGINAL_STATUS      |
        //___________________________________________________|
        //     CURRENT_INDEX      |     CURRENT_INDEX        |
        //                  ↓     |                     ↓    |
        // [i=0][i=1][i=2][i=3]   |    [i=0][i=1][i=2][i=3]  |
        //  [A]  [B]  [C]  [B]    |     [A]  [B]  [C]  [D]   |
        //    currentIndex = 3    |     currentIndex = 3     |
        //________________________|__________________________|
        //     CURRENT_STATUS     |     ORIGINAL_STATUS      |
        //–––––––––––––––––––––––––––––––––––––––––––––––––––|
        //  RANDOM_INDEX          |      RANDOM_INDEX        |
        //         ↓              |          ↓               |
        //  [i=0][i=1][i=2][i=3]  |   [i=0][i=1][i=2][i=3]   |
        //   [A]  [D]  [C]  [B]   |    [A]  [B]  [C]  [B]    |
        //    randomIndex =1      |     randomIndex = 1      |
        //–––––––––––––––––––––––––––––––––––––––––––––––––––|

        // mixCharacters[currentIndex]= B
        // mixCharacters[randomIndex]= B
        // tempValue = D
        // currenIndex = 3
        currentIndex--;
        // currenIndex = 2
    }
    return mixCharacters;
    }
    console.log(shuffle(mixedString));
    alert(shuffle(mixedString).join(''));
 return shuffle(mixedString).join('');
}   


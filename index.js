function isPalindrome(word) {
  // Write your algorithm here
  // lowercase the letters to be matchin
  // remove any spaces or letters if any
  //split the string 
  //reverse and store it to a variable
  // check if reverse value is equal (===) to the string
  // returns true;
  // let re = /[\W_]/g; // or 
  // var re = /[^A-Za-z0-9]/g;
let symbols = /[^A-Za-z0-9]/g;
  let lowerCase = word.toLowerCase().replace(symbols, '');
  
  let stringReverse = lowerCase.split('').reverse().join(''); 

if(stringReverse === lowerCase){
  return true;
}
else{
  return false
}

}

/* 
  Add your pseudocode here
  let symbols = /[A-Za-z0-9^]/g;
  let lowerCase = word.toLowerCase().replace(symbols, '');
  let stringReverse = lowerCase.split("").reverse().join("");
if(stringReverse === lowerCase){
  return true;
}
else{
  return false
}
*/

/*
  Add written explanation of your solution here
Converting all letters to lowercase allows for the letters to be uniform incase they were input in mixed 
upper and lowercase.
Removing the sysmbols and spaces to ensure no symbol will be checked as letter to avoid conflict when reversed.
Re

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

    console.log("Expecting: false");
  console.log("=>", isPalindrome("teacher"));
}

module.exports = isPalindrome;

function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
  
*/
function isPalindrome(str) {
  // Get the length of the string
  const len = str.length;
  
  // Loop through half the string
  for (let i = 0; i < Math.floor(len / 2); i++) {
      // Compare character from start with character from end
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
  }
  return true;
}
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

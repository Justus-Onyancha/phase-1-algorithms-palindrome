function isPalindrome(word) {
  // Write your algorithm here

  let leftIndex = 0;
  let rightIndex = word.length - 1
  while (leftIndex < rightIndex){
    if (word[leftIndex] !== word[rightIndex]) 
      return false
    leftIndex++;
    rightIndex--;

  }
  return true;

  // const reverseword = word.split('').reverse().join('');
  // if (word === reverseword) {
  //   return true;
  // }else
  //   return false;
}

/* 
  Add your pseudocode here
*/

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

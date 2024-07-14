/**
 * @param {string} s
 * @return {number}
 */
 lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let finalString = ""
    let start = 0
    let strLen = s.length
    for (let i = 0; i < strLen; i++) {
       let char = s[i]
        // Check if the character is already in the current substring
       let index = finalString.indexOf(char);
       if (index !== -1) {
        // Move the start position to the right of the first occurrence of the character
        start += index + 1;
    }
    finalString = s.slice(start,  i+ 1);
     // Update maxLength if necessary
     console.log('finalString', finalString);
     console.log('maxLength', maxLength);
     maxLength = Math.max(maxLength, finalString.length);
  }
    return maxLength
};

const resp =lengthOfLongestSubstring("pwwkew")
console.log('resp', resp);
 
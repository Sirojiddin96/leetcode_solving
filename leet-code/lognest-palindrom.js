/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let temp = []
    let result = [];
    for(let i=0; i<s.length; i++){
        temp.push(s[i]);
        for(let j=i+1; j<s.length; j++){
            temp.push(s[j]);
            if(temp.join('') === temp.join('').split('').reverse().join('')){
              result.push(temp.join(''));
            }
        }
        temp = [];
    }
    return result
};

 const response = longestPalindrome("ac"); // "bab" or "aba"

 console.log(response);
 
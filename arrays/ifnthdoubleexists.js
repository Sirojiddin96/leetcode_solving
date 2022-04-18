/**
 * @param {number[]} arr
 * @return {boolean}
 */

// arr
// if(element of array's multiplication is the same as another one){
// return true
// }

var checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == 2 * arr[j] || arr[j] == 2 * arr[i]) return true;
    }
  }
  return false;
};

console.log(checkIfExist([-16, -13, 8]));

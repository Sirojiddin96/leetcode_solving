/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let sqr;
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    sqr = nums[i] * nums[i];
    if (sqr === nums[i - 1]) {
      arr.push(sqr);
    } else {
      arr.push(sqr);
    }
  }
  console.log(arr.sort((a, b) => a - b));
  return arr.sort((a, b) => a - b);
};

sortedSquares([-10000, -9999, -7, -5, 0, 0, 10000]);

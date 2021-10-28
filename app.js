/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let counter = 0;
  const k = nums.filter((num) => {
    if (num == val) {
      counter++;
      return false;
    }
    return true;
  });
  console.log(k);
  return k;
};

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);

// very stressfull
// 부통 난 쉽게 스트레스 안받아요.

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == val) {
//       delete nums[i];
//       nums[i - 1] = nums[i + 1];
//       console.log(nums);
//     }
//   }

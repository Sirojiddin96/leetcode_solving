// Shift each element one position to the right.
// intArray[i + 1] = intArray[i];

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      for (let j = arr.length - 1; j > i; j--) {
        arr[j] = arr[j - 1];
      }
      i = i + 1;
    }
  }
};

duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]);

// 파리를 날리다 pasha qo'rimmoq.
// 눈이 높다 standardi baland.
// 눈코 뜰 새 없다- nafas olishga vaqt bo'lmaslik.

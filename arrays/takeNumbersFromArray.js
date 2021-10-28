function sortArray(arr) {
  let num = [];
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i])) {
      console.log("Only Numbers", arr[i]);
    }
  }
}
sortArray([1, 2, 3, 4, "six", 88, "five"]);

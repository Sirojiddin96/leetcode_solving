/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
   let N=arr.length;
   let i=0;
   //walk up
   while(i+1<N && arr[i]<arr[i+1])
   i++;
   if(i==0 || i==N-1)
   return false

   //walk up
   while(i+1<N && arr[i]>arr[i+1])
   i++

   return i==N-1

};

validMountainArray([0,3,2,1]);

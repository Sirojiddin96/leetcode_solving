 /**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  let k=0; 
 
  if(arr==null){
     return null;
    }
    while(k<arr.length){
      for(let i = 0; i < arr.length; i++) {
         if(arr[k]<arr[i+1]){  
           
           arr[k]=arr 
         }
        }
        console.log(arr)
  
         
         
};
}
 replaceElements([17,18,5,4,6,1])
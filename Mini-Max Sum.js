//const arr = [1, 2, 3, 4, 5];
//const arr = [7, 69, 2, 221, 8974];
const arr = [5, 5, 5, 5, 5];

let minarr=Math.min.apply(Math, arr);
let maxarr=Math.max.apply(Math, arr);

let arr_minSum=0;
let arr_maxSum=0;

if(maxarr === minarr){
    for(let i =0; i<arr.length-1; i++){
        arr_minSum = arr_minSum + arr[i];
        arr_maxSum = arr_maxSum + arr[i];
    }
    
}


for(let i =0; i<arr.length; i++){
    if(arr[i]!=maxarr){
        arr_minSum = arr_minSum + arr[i];
    }
    
    if(arr[i]!=minarr){
        arr_maxSum = arr_maxSum + arr[i];
    }
    
   
}

console.log(arr_minSum + " " + arr_maxSum);
//console.log(minarr);
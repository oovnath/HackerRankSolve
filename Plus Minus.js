let arr= [1,1,0,-1,-1];
let posVal = 0;
let negVal = 0;
let zeroVal = 0;
for(i=0; i<arr.length; i++){
    if(arr[i]>0){
        posVal++;
    }
    if(arr[i]<0){
        negVal++;
    }
    if(arr[i]===0){
        zeroVal++;
    }
    
}
   // console.log(arr.length);
    console.log(posVal/arr.length);
    console.log(negVal/arr.length);
    console.log(zeroVal/arr.length);
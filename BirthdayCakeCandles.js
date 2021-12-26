/*
You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. 
They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
*/ 

let candles=[3,2,1,3];
let total_candles=0;
let bigCandles=Math.max.apply(Math, candles);
for(let i=0; i<candles.length; i++){
    
    if(candles[i]==bigCandles){
        total_candles++;
        
    }
    
}
console.log(total_candles);
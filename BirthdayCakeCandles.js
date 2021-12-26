let candles=[3,2,1,3];
let total_candles=0;
let bigCandles=Math.max.apply(Math, candles);
for(let i=0; i<candles.length; i++){
    
    if(candles[i]==bigCandles){
        total_candles++;
        
    }
    
}
console.log(total_candles);
function birthdayCakeCandles(candles) {
    var tallest = candles[0];
    var count = 0;
    
    for(var i=1;i<=candles.length-1;i++){
        if(  > tallest){
            tallest = candles[i];
        }
    }
    console.log(tallest);
    for(var j=0; j<= candles.length-1;j++){
        if(candles[j] === tallest){
            count++;
        }
        continue;
    }
    
    return count;
}

console.log(birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]));
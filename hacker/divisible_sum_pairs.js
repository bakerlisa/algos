function divisibleSumPairs(n, k, ar) {
    // Write your code here
    var adds = new Set();
    var total = 0;
    
    for(var i=0; i< ar.length;i++){
        for(var j=0+i;j<ar.length;j++){
            if((ar[i]+ar[j]) % k === 0){
                total++;
            }
        }
    }
    console.log(total)
    return total;
}

console.log(divisibleSumPairs(6,3,[1, 3, 2, 6, 1, 2]));
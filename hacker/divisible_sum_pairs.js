function divisibleSumPairs(n, k, ar) {
    // Write your code here
    var per = ar[0];
    var add = 0;
    var total = 0;
    
    for(var i=1; i< ar.length;i++){
        console.log(ar[i] + ar[per]);
        if((ar[i] + ar[per]) % k === 0){
            total++;
        }
    
        per = i;
    }
    
    return total;
}

console.log(divisibleSumPairs(6,3,[1, 3, 2, 6, 1, 2]));
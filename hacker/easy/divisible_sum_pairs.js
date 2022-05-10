function divisibleSumPairs(n, k, ar) {
    // Write your code here
    var arr = [];
    var total = 0;
    
    for(var i=0; i<= ar.length-1;i++){
        for(var j=1+i;j<ar.length;j++){
            arr.push(ar[i] + ar[j]);
        }
    }
    
    for(var g=0; g< arr.length;g++){
        if(arr[g] % k == 0){
            total++;
        }
    }
    
    // console.log(total)
    return total;
}

console.log(divisibleSumPairs(6,3,[1, 3, 2, 6, 1, 2]));
const binary = (binNum) => {
    const arr = binNum.split("");
    var runner = 1;
    total = 0;
    
    for(i=binNum.length - 1;i >= 0; i--){
        runner * arr[i]
        total += (runner * arr[i])
        runner *= 2;
    }
    return total;
}

console.log(binary('010001'))
// console.log(binary('1010'))
// console.log(binary('01010101'))


// Tomorrow do the reverse. So take a number and put it into binary
const reverseBinary = (val) => {
    var start = 1;
    var binNum = "";
    
    // gets our starting point
    while(start * 1 < val){
        start *= 2;
    }

    // builds out binary number
    while(val >= 1){
        if(start < val){
            val -= start;
            binNum += "1";
        }else{
            binNum += "0";
        }
        start /= 2;
    }

    
    console.log(val)
    return binNum;
}

console.log(reverseBinary(9))

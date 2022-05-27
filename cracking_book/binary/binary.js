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

console.log(binary('1000101'))
// console.log(binary('1010'))
// console.log(binary('01010101'))


// Tomorrow do the reverse. So take a number and put it into binary
const reverseBinary = (val) => {
    var start = 1;
    var binNum = "";

    if(val === 1){
        return 1;
    }else if(val === 0){
        return 0;
    }else if(val < 0){
        return "neagitve number"
    }
    
    // gets our starting point
    while(start * 2 < val){
        start *= 2;
    }
    // builds out binary number
    while(start >= 1){
        if(start <= val){
            val -= start;
            binNum += "1";
        }else{
            binNum += "0";
        }
        start /= 2;
    }
    return binNum;
}
console.log(reverseBinary(-11))


//  Negative you need to know how many bits you're working with
// https://www.youtube.com/watch?v=4qH4unVtJkE

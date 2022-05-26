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

console.log(binary('0101'))
// console.log(binary('1010'))
// console.log(binary('01010101'))


// Tomorrow do the reverse. So take a number and put it into binary

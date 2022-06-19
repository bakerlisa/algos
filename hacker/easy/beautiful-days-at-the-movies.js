const beautifulDays = (i, j, k) => {
    // Write your code here
    var total = 0;

    var counter = i;
    while(counter <= j){
        let countst = counter.toString();
        let revNum = "";

        for(var x=countst.length-1; x >= 0;x--){
            revNum += countst[x]; 
        } 

        if(Number.isInteger(Math.abs((revNum - counter)) / k)  === true || (Math.abs((revNum - counter)) / k) === 0  ){
            total++;
        }
        counter++;
    }

    return total;

}

console.log(beautifulDays(20,23,6))


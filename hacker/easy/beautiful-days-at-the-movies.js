const beautifulDays = (i, j, k) => {
    // Write your code here
    i = i.toString();
    j = j.toString();

    var revi = ""; 
    var revj = "";
    var total;
    for(var l=i.length -1; l >= 0;l--){
        if(i[l] != 0){
            revi += i[l]; 
        }
    }

    if( Math.abs((revi - i)) % k  === 0 ){
        total = Math.abs((revi - i)) / k
    }
    
    for(var m=j.length -1; m >= 0;m--){
        if(j[m] != 0){
            revj += j[m]; 
        }
    }
    if( Math.abs((revj - j)) % k  === 0 ){
        total = Math.abs((revi - j)) / k
    }
    return total;

}

console.log(beautifulDays(20,23,6))


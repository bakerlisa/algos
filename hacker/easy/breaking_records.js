function breakingRecords(scores) {
    var min = scores[0];
    var max = scores[0];
    var lowTally = 0;
    var hightTally = 0;
    var total = [];

    for(var i=1;i <scores.length; i++){
        if(scores[i] < min){
            lowTally++;
            min = scores[i];
        }
        if(scores[i] > max ){
            hightTally++;
            max = scores[i];
        }
    }
    total.push(hightTally);
    total.push(lowTally);
    return total;
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25,  1]));

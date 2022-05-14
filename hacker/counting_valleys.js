function countingValleys(steps, path) {
    var up = 0;
    var down = 0;
    var total = 0;
    var valley = 0;


    // Write your code here
    for(var i=0;i<steps;i++){
        if(path[i] === 'U'){
            up++;
        }else{
            down--;
        }
        console.log(up);
        console.log(down);
        console.log(up + down)
        
        console.log()
    }

    return  valley;
}

// console.log(countingValleys(8, "UDDDUDUU"));
console.log(countingValleys(12, "DDUUDDUDUUUD"));

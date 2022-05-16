function countingValleys(steps, path) {
    var travel = 0;
    var runner = path[0];
    var valley = 0;


    // Write your code here
    for(var i=0;i<steps;i++){
        if(path[i] === 'U'){
            travel++;
        }else if(path[i] === 'D'){
            travel--;
        }

        if(runner ===  "U" && path[i] === "D"){
            if(travel + 1 >= 0){
                valley++;
            }
        }
        
        runner = path[i];
        
    }
    runner = path[i]

    return  valley;
}

// console.log(countingValleys(8, "UDDDUDUU"));
// console.log(countingValleys(12, "DD UU DD U D UUU D"));
console.log(countingValleys(12, "DDUUDDUDUUUD"));

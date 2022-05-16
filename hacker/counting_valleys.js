function countingValleys(steps, path) {
    var travel = 0;
    var valley = 0;
    var up = 0;
    var down = 0
    var past = path[0];

    if(path[0] === 'U'){
        travel++;
        up++;
    }else if(path[0] === 'D'){
        travel--;
        down--;
    }


    // Write your code here
    for(var i=1;i<steps;i++){

        if(path[i] === 'U'){
            travel++;
            up++;
        }else if(path[i] === 'D'){
            travel--;
            down--;
        }
        // console.log(`past: ${past}`)
        // console.log(`current: ${path[i]}`)
        
        
        if(past === "U" && path[i] === "D"){
            travel++;
            if(travel === 0 && up >= 0 && down < 0){
                valley++;
            }
            up=0;
            down=0;
        }
        
        past = path[i];
    }

    return  `valley: ${valley}`;
}

console.log(countingValleys(8, "UDDDUDUU"));
// 1

// console.log(countingValleys(12, "DD UU DD U D UUU D"));
// console.log(countingValleys(12, "DDUUDDUDUUUD"));
// 2

// console.log(countingValleys(10, "UDUUUDUDDD"));
// 0


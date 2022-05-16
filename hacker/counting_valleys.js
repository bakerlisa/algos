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
        travel++;
        down++;
    }


    // Write your code here
    for(var i=1;i<steps;i++){
        if(path[i] === 'U'){
            travel++;
        }else if(path[i] === 'D'){
            travel--;
        }

        if(past === "U" && path[i] === "D"){
            console.log(`i: ${i}`)
            console.log(`up: ${up}`)
            console.log(`down: ${down}`)
            console.log(`down: ${up - down}`)
        
            if(travel === 0 && (travel - up >=0 ||  travel - down < 0)){
                console.log("add valley")
                valley++;
            }
            travel = 0;
            up=0;
            down=0;
            console.log()
        }else{
            if(path[i] === 'U'){
                up++;
            }else if(path[i] === 'D'){
                down--;
            }
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

// console.log(countingValleys(100, "DUDUUUUUUUUDUDDUUDUUDDDUUDDDDDUUDUUUUDDDUUUUUUUDDUDUDUUUDDDDUUDDDUDDDDUUDDUDDUUUDUUUDUUDUDUDDDDDDDDD"));
// 2



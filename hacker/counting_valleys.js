function countingValleys(steps, path) {
    var up = 0;
    var down = 0;
    var total = 0;


    // Write your code here
    for(var i=0;i<=steps;i++){
        if(path[i] === 'U'){
            up++;
        }else{
            down++;
        }
    }

    return up +2 - down;
}

console.log(countingValleys(8, "UDDDUDUU"));
console.log(countingValleys(12, "DDUUDDUDUUUD"));
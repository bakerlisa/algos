function hurdleRace(k, height) {
    // Write your code here
    let max = k;
    for(var i=0;i<height.length;i++){
        if(height[i] > max){
            max = height[i]
        }
    }

    max === k ?  max = 0 :  max -= k;
    return max;
}

console.log(hurdleRace(4,[1,6,3,5,2]))
// hurdleRace();
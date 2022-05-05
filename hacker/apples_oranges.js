function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    var fruitCount = [0,0];
    
    for(var i=0;i<apples.length;i++){
        apples[i] = apples[i] + a; 
        if(apples[i] >= s && apples[i] <= t){
            fruitCount[0] += 1;
        }   
    }

    for(var j=0;j<oranges.length;j++){
        oranges[j] = oranges[j] + b;
        if(oranges[j] >= a && oranges[j] <= b){
            fruitCount[1]++
        } 
    }

    return apples;
}

countApplesAndOranges(7,10,4,12,[2,3,-4],[3,-2,-4]);
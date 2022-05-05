function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    var apple = 0;
    var orange = 0;
    
    for(var i=0;i<apples.length;i++){
        apples[i] = apples[i] + a; 
        
        if(apples[i] >= s && apples[i] <= t){
            apple++;
        }  
        
    }

    for(var j=0;j<oranges.length;j++){
        oranges[j] = oranges[j] + b;
        console.log( oranges[j])
        if(oranges[j] >= s && oranges[j] <= t){
            orange++;
        } 
    }
    console.log(apple);
    console.log(orange);
}

countApplesAndOranges(2,3,1,5,[-2],[-1]);



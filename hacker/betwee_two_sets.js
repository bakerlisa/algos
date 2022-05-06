function getTotalX(a, b) {
    // Write your code here
    var factorsA = [];
    var factorsB = [];
    var runner = 2;
    
    for(var i=0;i<b.length;i++){

        if(b[i] % runner === 0){
            var newArray = [];
            newArray.push(b[i]/runner);
            newArray.push(runner);
            
            // factorsA.push(factorsA);
            break;
        
        }

        
    }
    console.log(newArray)
    // console.log(factorsA)

}
getTotalX([2, 4],[16,32,96]);


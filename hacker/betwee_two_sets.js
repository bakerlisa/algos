function getTotalX(a, b) {
    var allFactors = new Set();
    var runner = 2;

    for(var x=0;x<b.length;x++){
        while(b[x] / runner >= runner){
            if(b[x] % runner === 0){
                if(runner <= a[a.length - 1]){
                    allFactors.add(runner);
                }
            }
            runner++;
        }
        runner = 2;
    }
    
    allFactors.forEach(element => {
        if((element % a[0] === 0 || (element % a[1] === 0)) ){
        }else{
            allFactors.delete(element);
        }
    });

    console.log(allFactors.size);
    return allFactors.size;
}
getTotalX([2, 4],[16,32,96]);


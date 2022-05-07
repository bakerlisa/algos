function getTotalX(a, b) {
    var allFactors = new Set();
    var runner = 2;

    //finds all the factors that each one has (excepct for copies)
    for(var x=0;x<b.length;x++){
        while(b[x]/2 >= runner){
            if(b[x] % runner === 0){
                allFactors.add(runner);
            }
            runner++;
        }
        runner = 2;
    }

    //filtes out any factors that don't fit with b
    allFactors.forEach(item => { 
        for(var d=0; d < b.length; d++){

            if(b[d] % item != 0){
                allFactors.delete(item);
            }
        }
    });

    // filter by a
    allFactors.forEach(element => { 
        for(var s=0; s < a.length;s++){
            if(element % a[s] != 0 ){
                allFactors.delete(element);
            }
        }
    });  

    console.log(allFactors);
    return allFactors.size;
}
console.log(getTotalX([2, 4],[16,32,96]));
// console.log(getTotalX([3, 4],[24,48]));








// function getTotalX(a, b) {
//     var allFactors = new Set();
//     var runner = 2;

//     for(var x=0;x<b.length;x++){
//         while(b[x] > runner){
//             if(b[x] % runner === 0){
//                 allFactors.add(runner);
//             }
//             runner++;
//         }
//         runner = 2;
//     }
    
//     allFactors.forEach(element => {
//         // if(element > a[0]){
//         //     if(element % a[0] != 0){
//         //         allFactors.delete(element);
//         //     }
//         // }else{
//         //     if(a[0] % element != 0){
//         //         allFactors.delete(element);
//         //     }
//         // }

//         // if(element > a[1]){
//         //     if(element % a[1] != 0){
//         //         allFactors.delete(element);
//         //     }
//         // }else{
//         //     if(a[1] % element != 0){
//         //         allFactors.delete(element);
//         //     }
//         // }


        
//     });

//     console.log();
//     console.log(allFactors.size);
//     console.log(allFactors);
//     return allFactors.size;
// }
// getTotalX([3, 4],[24,48]);
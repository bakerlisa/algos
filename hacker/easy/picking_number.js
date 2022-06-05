// function pickingNumbers(a) {
//     var total = [];
//     var runner = 0;
//     for(var i=1;i<a.length;i++){
//         if((Math.abs(a[i] - a[runner]) <= 1) ){
//             total.push(a[runner])
//         }
//         runner = i;
//     }

//     console.log(a)
//     console.log(total.length)

// }

// console.log(pickingNumbers([ 1, 2, 2, 3, 1, 2 ]))
// console.log(pickingNumbers([ 4, 6, 5, 3, 3, 1 ]))
// pickingNumbers([ 4, 6, 5, 3, 3, 1 ])

function pickingNumbers(a) {
    var total = 0;
    var returnTotal = 0;

    for(var i=1;i<a.length;i++){
        total += a[i]
    }

    var middle = Math.round(total / a.length);
    for(var j=0; j<a.length;j++){
        if(Math.abs(a[j] - middle) <= 1){
            returnTotal++;
        }
    }
    console.log(returnTotal)
}

console.log(pickingNumbers([ 1, 2, 2, 3, 1, 2 ]))
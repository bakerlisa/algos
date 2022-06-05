function pickingNumbers(a) {
    var total = [];
    var runner = 0;
    for(var i=1;i<a.length;i++){
        if((Math.abs(a[i] - a[runner]) <= 1) ){
            total.push(a[runner])
        }
        runner = i;
    }

    console.log(a)
    console.log(total.length)

}

console.log(pickingNumbers([ 1, 2, 2, 3, 1, 2 ]))
// console.log(pickingNumbers([ 4, 6, 5, 3, 3, 1 ]))
// pickingNumbers([ 4, 6, 5, 3, 3, 1 ])
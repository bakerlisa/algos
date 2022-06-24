// Circular Array Rotation

function circularArrayRotation(a, k, queries) {
    // Write your code here
    var output;
    var r;
    var vals = []

    if(a.length === k || k === 0 ){
        output = a;
    }else if(k > a.length){
        r = k % a
    }else{
        r = k
    }

    const firstHalf = a.splice(0, k).sort(function(a, b){return a-b});   
    output = a.concat(firstHalf);

    queries.forEach(element => {
        vals.push(output[element])
    });

    return vals;
}

console.log(circularArrayRotation([ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30 ],17,[ 0, 1, 2 ]))
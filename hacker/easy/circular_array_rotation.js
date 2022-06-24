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

    const firstHalf = a.splice(0,k-1); 

    output = a.concat(firstHalf);  

    queries.forEach(element => {
        vals.push(output[element])
    });

    return vals;
}

console.log(circularArrayRotation([ 1,2,3 ],2,[ 0, 1, 2 ]))
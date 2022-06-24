// Circular Array Rotation

function circularArrayRotation(a, k, queries) {
    // Write your code here
    console.log(a.length % k)
    var output = []
    var r;

    if(a.length === k || k === 0 ){
        return a;
    }else if(k > a.length){
        r = k % a
    }else{
        r = k
    }

    const firstHalf = list.splice(0, k);   
    const secondHalf = list.splice(-k);
}

console.log(circularArrayRotation([ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30 ],1,[ 0, 1, 2 ]))
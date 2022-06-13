function utopianTree(n) {
    var num =  1;
    
    for(var i=0; i < n;i++){
        i % 2 === 0 ? num *= 2 : num += 1;
    }
    return num;
}

console.log(utopianTree(4))
// console.log(utopianTree(3))
// utopianTree();
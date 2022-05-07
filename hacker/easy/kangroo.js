function kangaroo(x1, v1, x2, v2) {
    // Write your code here

    var reaction = "NO";
    if(x1 === 0 && x2 %2 != 0){
        return reaction;
    }
    for(var i=0; i <= 10000;i++){
        if((i*x1*x2) % x2 === 0){
            return = "YES";
        }
    }
    return reaction;

}

kangaroo();


//function kangaroo(x1, v1, x2, v2) {
    // if(x1 + v1 == x2 +v2){
    //     return "YES";
    // }else if(v1 * x2 >= x2 *v2){
    //     return "YES";
    // }else{
    //     return "NO";
    // }
// }
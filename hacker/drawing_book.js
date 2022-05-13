function pageCount(n, p) {
    var pagesTurn = 0;
    if(n === 2 && p === 1 ){
        pagesTurn = 0;
    }else if( (p % 2 === 0) && n - 1 === p){
        pagesTurn = 0;
    }else if( n - 1 === p && (n % 2 != 0)){
        pagesTurn = 0;
    }else if((n % 2 === 0) && (p+1 == n || p +2 === n) ){
        pagesTurn = 1;
    }else{
        if( Math.ceil(n / 2) > p){
            // from front
            for(var i=1;i<n;i++){
                if(i == p || i - 1 == p  ){
                    break;
                }else{
                    i++;
                    pagesTurn++;
                }
            }
        }else{
            // from back
            for(var i=n;1<n;i--){
                if(i == p || i - 1 == p  ){
                    break;
                }else{
                    i--;
                    pagesTurn++;
                }
            }
        }
    }
    return pagesTurn;
}


// console.log(pageCount(6,5));
// console.log(pageCount(6,2));
// console.log(pageCount(5,4));
// console.log(pageCount(25,15));
console.log(pageCount(2,1));
// console.log(pageCount(7,4));x
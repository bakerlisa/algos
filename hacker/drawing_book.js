function pageCount(n, p) {
    var pagesTurn = 0;
    if(p === 2 || p === 3){
        pagesTurn = 1;
    }else if((n % 2 === 0) && (p+1 == n || p +2 === n) ){
        pagesTurn = 1;
    }else if( (p % 2 === 0) && n - 1 === p){
        pagesTurn = 0;
    }else{
        if( n / 2 > p){
            //front front
            for(var i=1;i<n;i++){
                if(i ){

                }
            }
        }else{
            // front back
            for(var i=n;1<n;i--){

            }
        }
    }
    return pagesTurn;
}


// console.log(pageCount(6,5));
console.log(pageCount(25,6));
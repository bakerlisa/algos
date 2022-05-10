// bill = items bought
// k = ana didn't eat
// b = $ ana contributerd

function bonAppetit(bill, k, b) {
    var total = 0;
    for(var i=0;i<bill.length;i++){
        if(i != k){
            total += bill[i]
        }
    }
    total /=2;
    
    if(total === b){
        console.log("Bon Appetit");
    }else{
        console.log(b-total);
    }
}

console.log(bonAppetit([ 3, 10, 2, 9 ],1,12));
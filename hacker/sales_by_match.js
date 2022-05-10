function sockMerchant(n, ar) {
    // Write your code here
    if(n < 100 ){
        return "out of range";
    }else{
        var socks = {};
        var unpaired = 0;

        for(var i=0;i<n;i++){
            if(socks[ar[i]]){
                socks[ar[i]] = socks[ar[i]]+1;
            }else{
                socks[ar[i]] = 1;
            }
        }

        for (const [key, value] of Object.entries(socks)) {
            if(value % 2 != 0){
                unpaired++;
            }
        }
        return unpaired;
    }
}

console.log(sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20]));
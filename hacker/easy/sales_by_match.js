function sockMerchant(n, ar) {
    // Write your code here

        var socks = {};
        var unpaired = 0;
        var paried = 0;

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

        paried = (n - unpaired) / 2;
        return paried;

}

// console.log(sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.log(sockMerchant(10,[1,1,3,1,2,1,3,3,3,3]));
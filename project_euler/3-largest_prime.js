// PRoblem 3

// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

findLargestPrime = (num) => { 
    var div = 2;
    while(num > 1){
        if(num % div === 0){
            num /= div;
        }else{
            div++;
        }
    }
}


findLargestPrime(600851475143);

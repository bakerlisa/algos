// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

multiple = (number) => {
    for(var i=2;i<=20;i++){
        if(number % i != 0 ){
            return false
        }
    }
        return true
}
number = 20;
while(true){
    if(multiple(number)){
        break;
    }else{
        number+=20
    }
    console.log(number)
}

// 232792560
// 36251400

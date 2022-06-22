// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

multiple = () => {
    var smallest = 2520;
    smallest *= 20
    smallest *= 19
    smallest *= 18
    smallest *= 17
    smallest *= 16
    smallest *= 15
    smallest *= 14
    smallest *= 13
    smallest *= 12
    smallest *= 11
    // smallest *= 10
    // smallest *= 9
    // smallest *= 8
    // smallest *= 7
    // smallest *= 6
    // smallest *= 5
    // smallest *= 4
    // smallest *= 3
    // smallest *= 2
    // smallest *= 1


    console.log(smallest /= 20)
    console.log(smallest /= 19)
    console.log(smallest /= 18)
    console.log(smallest /= 17)
    console.log(smallest /= 16)
    console.log(smallest /= 15)
    console.log(smallest /= 14)
    console.log(smallest /= 13)
    console.log(smallest /= 12)
    console.log(smallest /= 11)
    console.log(smallest /= 10)
    console.log(smallest /= 9)
    console.log(smallest /= 8)
    console.log(smallest /= 7)
    console.log(smallest /= 6)
    console.log(smallest /= 5)
    console.log(smallest /= 4)
    console.log(smallest /= 3)
    console.log(smallest /= 2)

    // 11,12,13,14,15,16,17,18,19,20
    // for(var i =20; i>=1;i--){
    //     var result = (smallest / i) !== 0; 
    //     if(result){
    //         smallest /= i;
    //     }else{
    //         return false;
    //     }
    // }

    console.log(smallest);
}
console.log(multiple());

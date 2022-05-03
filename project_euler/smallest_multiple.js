// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

multiple = () => {
    var smallest = 2520;
    var found = false;

    while(!found){
        for(var i=0;i =>11 && i <= 20;i++){
            var div = smallest / i;
            var result = (div - Math.floor(div)) !== 0; 
            var isDividable = true;

            if(result){
                isDividable = false;
                smallest+=2520;
                console.log(smallest);
                break;
            }
        }
        if (isDividable) {
            found = true;
        }
    }

    console.log(smallest);
}
multiple();

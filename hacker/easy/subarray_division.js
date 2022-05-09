function birthday(s, d, m) {
    // Write your code here

    var running = 0;
    var total = 0;
    
    for(var i=0; i <= s.length ;i++){
        var j=0;
        var counter = i;
        while(j != m){
            if(s[counter]){
                running += s[counter];
                counter++;
                j++;
            }else{
                break;
            }
        }

        if(running === d){
            total++;
        }
        running = 0;
        counter = 0;
    }
    return total;
}

console.log(birthday([ 1, 2, 1, 3, 2 ],3,2));
// console.log(birthday([4],4,1));
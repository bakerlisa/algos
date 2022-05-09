function migratoryBirds(arr) {
    // Write your code here
    var items = {};
    


    for(var i=0; i<arr.length;i++){
        if(items[arr[i]]){
            items[arr[i]] = items[arr[i]]+ 1;
        }else{
            items[arr[i]] = 1;
        }
    }
    var mostSeen = 0;
    var counter = 0;
    for (const item in items) {
        var vals = Object.values(items);
        if(vals[counter] > mostSeen){
            mostSeen=item;
        }else if(vals[counter] === mostSeen){
            if(item < mostSeen){
                mostSeen=item;
            }
        }
        counter++;
    }
    // console.log( mostSeen)
    return mostSeen;
}

console.log(migratoryBirds([1,4,4,4,5,3]));
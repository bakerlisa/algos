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
    var mostSeenName = 0;
    var counter = 0;
    var vals = Object.values(items);


    for (const item in items) {
        if(counter === 0 ){
            mostSeen = vals[counter]
            mostSeenName = item;
        }else if(mostSeen < vals[counter]){
            mostSeen = vals[counter]
            mostSeenName = item;
        }else if(mostSeen === vals[counter]){
            if(mostSeenName > item ){
                mostSeenName = item;
            }
        }
        counter++;
    }
    // console.log(`mostSeen: ${mostSeenName} : ${mostSeen}`);

    return mostSeen;
}

// console.log(migratoryBirds([1,1,1,4,4,4,5,3]));
migratoryBirds([4,4,4,5,3,1,1,1]);
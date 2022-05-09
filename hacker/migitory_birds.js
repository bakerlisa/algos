function migratoryBirds(arr) {
    // Write your code here
    console.log(arr);
    var items = {};

    for(var i=0; i<arr.length;i++){
        if(items[arr[i]]){
            items[arr[i]] = items[arr[i]]+ 1;
        }else{
            items[arr[i]] = 1;
        }
    }
    var mostSeen = 0;
    var mostItem;
    var counter = 1;
    var per = 0;
    var perItm;
    var vals = Object.values(items);

    console.log(items)
    for (const item in items) {
        if(vals[counter] < vals[per]){
            mostSeen = item;
            console.log(vals[counter]);
            console.log(vals[per]);
            if(vals[counter] === vals[per]){
                if(perItm < item){
                    mostItem = item;
                }else{
                    mostItem = perItm
                }
            }
        } 
        perItm = item;
        per = counter;
        counter++;
    }

 
    // console.log( mostSeen)
    return mostSeen;
}

console.log(migratoryBirds([1,1,1,4,4,4,5,3]));
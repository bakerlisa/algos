function deliveryPlan(allLocations, numDeliveries) {
    // Write your code here
    var list = {}
    var orders = []

    for(var i=0; i < allLocations.length; i++){
        let sqr = Math.sqrt(Math.abs(allLocations[i][0])) + Math.sqrt(Math.abs(allLocations[i][1]))
        list[parseFloat(sqr)] = allLocations[i]
    }

    //sorts the object by its keys
    const ordered = Object.keys(list).sort().reduce(
        (obj, key) => { 
            obj[key] = list[key]; 
            return obj;
        }, 
        {}
    );
    console.log(ordered)
    //only add X num to our return list
    var counter = 0;
    for (const key in ordered) {
        counter <numDeliveries ?  orders.push(list[key]) : "";
        counter++;
    }
    // console.log(orders)
    return orders;
}

// console.log(deliveryPlan([[1,2],[3,4],[-1,1]], 2))
// console.log(deliveryPlan([[3,6],[2,4],[5,3],[2,7],[1,8],[7,9]], 3))
console.log(deliveryPlan([[3,6],[2,4],[5,3],[2,7],[1,8],[7,9]], 3))






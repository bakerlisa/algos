const bubble = (arr) => {
    // console.log(arr)
    var sorted = false;

    while(sorted != true){
        sorted = true;
        for(var i=1;i<arr.length;i++){
            if(arr[i] < arr[i-1] ){
                let temp = arr[i]
                arr[i] = arr[i-1]
                arr[i-1] = temp
                sorted = false;
            }
        }
    }
    return arr;
}

console.log(bubble([12,2,54,6,7,23,5,52,34,10,23,41,12,1,0,-11]))
// bubble([12,2,54,6,7,23,5,52,34,10,23,41,12,1,])
const selectionSort = (arr) => {

    var sorted = false;
    var minIndx = 0;
    var runner = 1;
    var sorted = false;

    //get the smallest value by finding the next lowest value
    while(sorted != true){
        sorted = true;
        for(var j=runner;j<arr.length;j++){
            if(arr[j] < arr[minIndx]){
                sorted = false;
                let temp = arr[j];
                arr[j]= arr[minIndx]
                arr[minIndx] = temp;
            }
        }
        runner++;
        minIndx++;
    }

    return arr;
}


console.log(selectionSort([1,12,3,4,55,10,58,20,0,43,51,17,19,6,2,9,21]))
// selectionSort([11,12,3,4,55,10,58,1,20,0,43,51,17,19,6,2,9,21])
const mergeSort = (arr) => {
    let half = Math.ceil(arr.length / 2)
    let arr1 = arr.slice(0,half)
    let arr2 = arr.slice(half, arr.length)
    
    console.log(arr1)
    console.log(arr2)
}



// console.log(mergeSort([81,21,3],[23,45,12]))
mergeSort([81,21,3,23,45,12,0])
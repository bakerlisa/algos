function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    var max = 0;
    for(i=0;i<keyboards.length;i++){
        for(j=0;j<drives.length;j++){
            if(keyboards[i] + drives[j] > max && keyboards[i] + drives[j] <= b){
                max = keyboards[i] + drives[j];
            }
        }
    }
    if(max === 0){
        return -1
    }else{
        return max;
    }
}


console.log(getMoneySpent([3,1], [5,2,8],10))

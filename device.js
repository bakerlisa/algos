function applicationPairs(deviceCapacity, foregroundAppList, backgroundAppList) {
    // Write your code here
    var closests = []
    var closetPair = [] 
    
    for(var i=0; i <foregroundAppList.length;i++){
        for(var j=0; j<backgroundAppList.length;j++){
            if(foregroundAppList[i][1] > deviceCapacity ||  backgroundAppList[j][1] > deviceCapacity){
                continue
            }else if((foregroundAppList[i][1] + backgroundAppList[j][1]) === deviceCapacity){
                closests.push([i, backgroundAppList[j][0]])
            }   

            /// find the closets pair just in case we find no paris
            if(closetPair.length === 0){
                //first value
                closetPair.push([i, j])
            }else{
                //Other values we're comparing against

                if((foregroundAppList[i][1] + backgroundAppList[j][1]) > (foregroundAppList[closetPair[0][0]][1] + backgroundAppList[closetPair[0][0]][1]) && (foregroundAppList[i][1] + backgroundAppList[j][1]) < deviceCapacity ){
                    closetPair.push([i,j])
                }
            }
        }
    }


    if(closests.length > 0){
        return closests;
    }else{
        return closetPair;
    }

}

console.log(applicationPairs(7, [[1,2],[2,4],[3,6]],[[1,2]]))
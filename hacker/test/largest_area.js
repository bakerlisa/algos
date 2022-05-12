function getMaxArea(w, h, isVertical, distance) {
    // Write your code here
    var total = [];
    total.push((w - isVertical[0]) * ( distance[0]))
    total.push((h - isVertical[1]) * (h - distance[1]))

        for(var i=0; i< 6; i++){
            if(total[0] >  (isVertical[0]) * ( distance[0]) ){
                total[0] = (isVertical[0]) * ( distance[0]);
            }else if(total[0] >  (w - isVertical[0]) * ( w - distance[0]) ){
                
            }else if(){
                
            }
            
            if( total[1] > (isVertical[1]) * ( w - distance[1]) ){
                total[1] = (isVertical[1]) * ( distance[1]);
            }else if( total[1] > (isVertical[1]) * ( distance[1]) ){
                total[1] = (isVertical[1]) * ( distance[1]);
            }else if(total[1] > (isVertical[1]) * ( h - distance[1])){
                total[1] = (h - isVertical[1]) * ( distance[1]);
            }
        }
    }
    
    console.log(h)
    console.log(w)
    console.log(isVertical)
    console.log(distance)
   

    return total;
}

// console.log(getMaxArea(4,4,[0,1],[3,1]));
// console.log(getMaxArea(2,2,[1,2],[1,1]));
console.log(getMaxArea(3,4,[1,1],[1,3]));
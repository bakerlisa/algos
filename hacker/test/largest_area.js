function getMaxArea(w, h, isVertical, distance) {
    // Write your code here
    var total = [];
    total.push((w - isVertical[0]) * (h - isVertical[1]));
    total.push(distance[0] * (h - distance[1]));

    // isVertical
    if(total[0]  < ( isVertical[0] * (h - isVertical[1]))){
        total[0] =  isVertical[0] * (h - isVertical[1]);
    }
    if(total[0] < ((w - isVertical[0]) * isVertical[1]) ){
        total[0] = (w - isVertical[0]) * h;
    }
    if(total[0] < (isVertical[0] * isVertical[1]) ){
        total[0] = isVertical[0] * isVertical[1];
    }

    // Distance
    if(total[1] < (w - distance[0]) * (h - distance[1])){
        total[1] = (w - distance[0]) * (h - distance[1]);
    }
    if((w - distance[0]) * distance[1]){
        total[1] = ((w - distance[0]) * distance[1]);
    }
    if(total[1] < distance[0] * distance[1] ){
        total[1] = distance[0] * distance[1];
    }
        
    return total;
}
console.log(getMaxArea(4,4,[0,1],[3,1]));
// console.log(getMaxArea(2,2,[1,2],[1,1]));
// console.log(getMaxArea(3,4,[1,1],[1,3]));
// [9,6]
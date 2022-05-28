function climbingLeaderboard(ranked, player) {
    var place = [];
    var rank = 0;

    // Write your code here
    for(var i=0;i<player.length;i++){
        for(var j=0;j<ranked.length;j++){
            if(j === (ranked.length - 1) ){
                // last
                place.push(rank); 
                rank = 1;
                break;
            }else if(player[i] > ranked[j]){
                // first
                place.push(1); 
                rank = 1;
                break;
            }else if(ranked[j] === player[i]){
                // equal
                place.push(rank);
                rank = 1;
                break;
            }else{
                // everything else
                if(ranked[j+1] >= player[i] ){
                    if(ranked[j] != ranked[j+1]){
                        rank++;
                    }
                }else{
                    place.push(rank);
                    rank = 1;
                    break;
                }
            }
        }

    }
    console.log(rank)
    return place;
}



console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10],[ 5, 25, 50, 120 ]));

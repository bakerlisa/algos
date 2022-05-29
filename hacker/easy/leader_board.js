function climbingLeaderboard(ranked, player) {
    var place = [];
    var rank = 0;
    var half = Math.floor(ranked / 2)

    // Write your code here

        for(var i=0;i<player.length;i++){
            rank = 1;

            if(ranked[half] > player[i]){
                j = half
            }else{
                j = 0;
            }

            while(j<ranked.length){
                if(player[i] > ranked[0]){
                    // first
                    place.push(1); 
                    break;
                }else if(ranked[j] === player[i] || j === (ranked.length - 1) ){
                    // equal
                    rank++;
                    place.push(rank);
                    break;
                }else{
                    // everything else
                    if(ranked[j] != ranked[j+1]){
                        rank++;
                    }
                    if(ranked[j] >= player[i] && ranked[j+1] <= player[i]){
                        place.push(rank);
                        break;
                    }
                }
                j++;
            }
        }
    return place;
}



console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10],[ 5, 25, 50, 120 ]));

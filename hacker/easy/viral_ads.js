// Viral Adverstiting 

const viralAds = (n) => {
    var data = []
    var runner = 0;

    for(var i=0; i<n ;i++){
        
        if(data.length === 0){
            data.push({day: i+1, shared: 5, liked: Math.floor(5 / 2), cumulaitve: Math.floor(5 / 2) })
        }else if(i === 1){
            data.push({day: i+1, shared: Math.floor(data[runner].shared / 2) * 3, liked: 3, cumulaitve: 3 + data[runner].liked })
        }else{
            let like =  Math.floor(( Math.floor(data[runner].shared / 2) * 3));
            data.push({day: i+1, shared: Math.floor(data[runner].shared / 2) * 3, liked: Math.floor(like / 2), cumulaitve:  data[runner].cumulaitve + Math.floor(like / 2) })
        }
        runner = i;
    }
    return data[n-1].cumulaitve
}

console.log(viralAds(5));
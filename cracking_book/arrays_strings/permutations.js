permutations = () => {
    var string = "cbabadcbbabbcbabaabccbabc";
    var total = 0;

    for(var i=0; i < string.length - 3;i++){
        let mutations = {"a":0,"b":0,"c":0};
        let newString = string[i]+string[i+1]+string[i+2]+string[i+3];
        let round = true;

            for (var j=0;j<newString.length;j++) {
                if(mutations[newString[j]] != undefined){
                    if(newString[j] === 'b' || mutations[newString[j]] === 0){
                        mutations[newString[j]] =  mutations[newString[j]]+1;
                    }else{
                        round = false;
                        break;
                    }
                }else{
                    round = false;
                    break;
                }
            }

            console.log(mutations)
        if(round === true && mutations["b"] === 2){
            total++;
        }

        // reset values just in case
        mutations = {"a":0,"b":0,"c":0};
        round = true;
    }
    return total;
}

console.log(permutations());
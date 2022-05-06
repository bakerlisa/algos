wordLadder = () =>{
    var end = "warm";
    var word_list = ["cold", "gold","cord","sold","card","ward","warm","tard"];
    var pervious = "cold";
    var count = 0;
    var notIn = "";
    var chain = [];

    const item = new Set(end.split(""));

    for(var i=1; i < word_list.length;i++){
        if(word_list[i] === end){
            break;
        }else{
            let word = new Set(word_list[i].split(""));
            pervious = pervious.split("");

            for(var k=0;k<pervious.length;k++){
                if(word.has(pervious[k])){
                    count++;
                }else{
                    notIn = pervious[k];
                }
            }
            if(count <= 3){
                if(!item.has(notIn)){
                    chain.push(word_list[i]);
                }              
            }
        }
        count = 0;
        pervious = word_list[i];
    }
    console.log(chain);
    return chain.length;
}
console.log(wordLadder());


// for(var j=0;j<word.length;j++){
//     if(item.has(word[j])){
//         chain.push(word_list[i]);
//         break;
//     }
//     console.log(word);
// }
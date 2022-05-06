// wordLadder = () =>{
//     var end = "warm";
//     var word_list = ["cold", "gold","cord","sold","card","ward","warm","tard"];
//     var pervious = "cold";
//     var count = 0;
//     var notIn = "";
//     var chain = [];

//     const item = new Set(end.split(""));

//     for(var i=1; i < word_list.length;i++){
//         if(word_list[i] === end){
//             break;
//         }else{
//             let word = new Set(word_list[i].split(""));
//             pervious = pervious.split("");

//             for(var k=0;k<pervious.length;k++){
//                 if(word.has(pervious[k])){
//                     count++;
//                 }else{
//                     notIn = pervious[k];
//                 }
//             }
//             if(count <= 3){
//                 if(!item.has(notIn)){
//                     chain.push(word_list[i]);
//                 }              
//             }
//         }
//         count = 0;
//         pervious = word_list[i];
//     }
//     console.log(chain);
//     return chain.length;
// }
// console.log(wordLadder());

// for(var j=0;j<word.length;j++){
//     if(item.has(word[j])){
//         chain.push(word_list[i]);
//         break;
//     }
//     console.log(word);
// }

/////////
function wordLadder(begin, end, wordList) {
    var pervious = begin;
    var count = 0;
    var chain = [begin];

    const item = new Set(end.split(""));

    while(wordList[i] === end){
        let word = wordList[i].split("");
        pervious = pervious.split("");

        for(var k=0;k<pervious.length;k++){
            if(word[k] === pervious[k]){
                count++;
            }
        }
        if(count === end-1){ 
            chain.push(wordList[i]);
        }
    }
    count = 0;
    pervious = wordList[i];
    return chain.length;
}

console.log(wordLadder("cold","warm",["cold", "gold","cord","sold","card","ward","warm","tard"]));
console.log(wordLadder("fool","sage",["fool", "pool", "poll", "pole", "pale", "sale", "sage"]));


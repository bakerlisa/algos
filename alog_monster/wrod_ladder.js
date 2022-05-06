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
// function wordLadder(begin, end, wordList) {
//     var pervious = begin;
//     var count = 0;
//     var counter = 0;
//     var chain = [begin];
//     var k = 1;

//     const item = new Set(end.split(""));

//     while(counter < wordList.length){
//         let word = new Set(wordList[counter].split(""));
//         pervious = pervious.split("");

//         for(var k=1;k<pervious.length;k++){
//             if(word.has(pervious[k]) ){
//                 console.log(word);
//                 console.log(pervious);
//                 console.log();
//                 count++;
//             }
//         }

//         if(count >= end-1){ 
//             chain.push(wordList[k]);
//         }
//         counter++;
//         count = 0;
//         pervious = wordList[k];
//     }
//     // console.log(chain);
//     return chain.length;
// }

///// THREE
function wordLadder(begin, end, wordList) {
    var pervious = begin;
    var chain = [];
    var count = 0;
    var runner = 1;
    var foundend = false;

    
        while(foundend != true){
            chain = [];
            pervious = begin;

            for(var i=runner;i<wordList.length ;i++){
                console.log(wordList[i])

                let item = new Set(pervious.split(""));
                let current = wordList[i].split("");

                for(var a=0;a<current.length;a++){
                    if(item.has(current[a])){
                        count++;
                    }
                }
                // console.log(pervious)
                if(pervious === end){
                    foundend=true;
                    break;
                }

                if(count >= end.length-1){
                    chain.push(wordList[i]);
                    pervious = wordList[i]; 
                    if(wordList[i] === end){
                        foundend=true;
                        break;
                    }                   
                }
                count = 0; 
            }
            
            runner++;
        }

    return chain.length;
}

console.log(wordLadder("cold","warm",["cold", "gold","cord","sold","card","ward","warm","tard"]));
// console.log(wordLadder("fool","sage",["fool", "pool", "poll", "pole", "pale", "sale", "sage"]));


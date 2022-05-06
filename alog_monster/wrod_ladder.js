var start = "cold";
var end = "warm";
var word_list = ["cold", "gold","cord","sold","card","ward","warm","tard"];
var chain = ["cold"];

const item = new Set(end.split(""));
console.log(item);

for(var i=0; i<word_list.length;i++){
    if(word_list[i] === end){
        chain.push(word_list[i]);
        break;
    }else{
        let word = word_list[i].split("");
        for(var j=0;j<word.length;j++){
            if(item.has(word[j])){
                chain.push(word_list[i]);
                break;
            }
        }
    }
}
console.log(chain);
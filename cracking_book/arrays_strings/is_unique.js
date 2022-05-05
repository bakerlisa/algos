// if string appears
var string = "The quick brown fox jumps over the lazy dog is an English-language pangram—a sentence that contains all the letters of the alphabet. The phrase is commonly used for fox touch-typing practice, testing typewriters and computer keyboards, displaying examples of fonts, and other applications involving text where fox is used of all letters in the alphabet is desired.";
var lookingFor = "fox";
var message = "couldn't find string";
var word = "";

for(var x=0;x<string.length;x++){
    if(string.charAt(x) === " "){
        if(word === lookingFor){
            message = "found you!"
            break;
        }        
        word = "";
    }else{
        word = word + string.charAt(x);
    }
}
// console.log(message);

// 1A. Was it found and how many times
var count = 0;
for(var x=0;x<string.length;x++){
    if(string.charAt(x) === " "){
        if(word === lookingFor){
            message = "found you!"
            count++;
        }        
        word = "";
    }else{
        word = word + string.charAt(x);
    }
}
console.log(`${message} was found ${count} times`);

// if all the characters are unique

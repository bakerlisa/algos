// if string appears
var string = "The quick brown fox jumps over the lazy dog is an English-language pangram—a sentence that contains all the letters of the alphabet. The phrase is commonly used for touch-typing practice, testing typewriters and computer keyboards, displaying examples of fonts, and other applications involving text where the use of all letters in the alphabet is desired.";
var lookingFor = "fox";
var message = "couldn't find string";

for(var x=0;x<string.length;x++){
    let word = "";
    if(string.charAt(x) != " "){
        word += string.charAt(x);
    }else{
        console.log(word);
        if(word === lookingFor){
            message = "found you!"
            break;
        }
        word = "";
    }
}
console.log(message);

// if all the characters are unique

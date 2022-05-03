function timeConversion(s) {
    // Write your code here
    var removeLastChar;

    if(s.includes("PM")){
        var ftChar = s.slice(0,2);

        if(ftChar == 12){
            removeLastChar = s.slice(0, s.length - 2); 
        }else{
            var firstChar = s.slice(2);
            firstChar = firstChar.slice(0, firstChar.length - 2)
            var time = parseInt(s.slice(0,2)) + 12;
            removeLastChar = time + firstChar;
        }
    }else if(s.includes("AM")){
        var firstChar = s.slice(0,2);

        if(firstChar == 12){
            var firstChar = s.slice(2);
            var nextStep = removeLastChar = "00" + firstChar;
            removeLastChar = nextStep.slice(0, nextStep.length - 2);
        }else{  
            removeLastChar = s.slice(0, s.length - 2); 
        }
    }
    return removeLastChar;
}

console.log(timeConversion("12:45:54PM"));
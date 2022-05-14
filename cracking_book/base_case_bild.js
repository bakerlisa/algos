base_case_build = (string) => {
    const stringArray = string.split("");
    var results = [];


    for(var i=2;i<stringArray.length;i++){
        if(results.length == 0){
            results.push(stringArray[0]);
        }
        if(results.length == 1){
            results.push((string[1]+ stringArray[0]));
            results.push( stringArray[0] + string[1]);
        }
        if(results.length > 1){
            
        }
    }


    return results;
}

console.log(base_case_build("abc"));
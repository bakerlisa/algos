function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    var numbers = {"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0};
    var lower_case = {"a":0,"b":0,"c":0,"d":0,"e":0,"f":0,"g":0,"h":0,"i":0,"j":0,"k":0,"l":0,"m":0,"n":0,"o":0,"p":0,"q":0,"r":0,"s":0,"t":0,"u":0,"v":0,"w":0,"x":0,"y":0,"z":0};
    var upper_case = {"A":0,"B":0,"C":0,"D":0,"E":0,"F":0,"G":0,"H":0,"I":0,"J":0,"K":0,"L":0,"M":0,"N":0,"O":0,"P":0,"Q":0,"R":0,"S":0,"T":0,"U":0,"V":0,"W":0,"X":0,"Y":0,"Z":0};
    var special_characters = {"!":0,"@":0,"#":0,"$":0,"%":0,"^":0,"&":0,"*":0,"(":0,")":0,"-":0,"+":0}
    var total = 5;
    var missing = {
        number:false,
        lower:false,
        upper:false,
        special:false,
        length:false
    };

        if(password.length > 6){
            total--;
            missing.length = true;
        }
        for(var i=0;i<n;i++){

            if(total === 0){
                console.log(missing)
                return 0;
            }else{
                if(numbers[password[i]] === 0 && missing["number"] === false){
                    total--;
                    missing.number = true;
                }
                if(lower_case[password[i]] === 0 && missing["lower"] === false){
                    total--;
                    missing.lower = true;
                }
                if(upper_case[password[i]] === 0 && missing["upper"] === false){
                    total--;
                    missing.upper = true;
                }
                if(special_characters[password[i]] === 0 && missing["special"] === false){
                    total--;
                    missing.special = true;
                }
            }
        }

        // look at length
        console.log(missing);
        
        if(missing.length != true){
            var length = 6 - password.length;
            
            return length;
            
        }else{
            //length is good buts its missing special characters
            return total;
        }

}

// console.log(minimumNumber(11,'#HackerRank'));
console.log(minimumNumber(3,'Ab1'));
// console.log(minimumNumber(5,'2bb1b'));
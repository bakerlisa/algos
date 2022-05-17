function formingMagicSquare(s) {
    // Write your code here
    var cost = 0;
    for(i=0;i<s.length;i++){
        let indvCost = 0;
        let sm = s[i][0]
        let lg = s[i][0];
        for(j=0;j<s[i].length;j++){
            indvCost += s[i][j];
            if(sm > s[i][j] && s[i][j] != 9){
                sm = s[i][j]
            }else if(s[i][j] === 9){
                // what to do if its a nine
            }
            if(lg < s[i][j] && s[i][j] != 1){
                lg = s[i][j]
            }else if(s[i][j] === 1){
                // what to do if its a 1
            }
        }

        var cost = Math.abs(15 - indvCost);

        indvCost = 0;
    }

    return cost;
}
// console.log(formingMagicSquare([ [ 4, 9, 2 ], [ 3, 5, 7 ], [ 8, 1, 5 ] ]));
console.log(formingMagicSquare([ [ 4, 9, 2 ], [ 3, 5, 7 ], [ 9, 9, 5 ] ]));
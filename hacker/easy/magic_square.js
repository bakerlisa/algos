function formingMagicSquare(s) {
    // Write your code here
    var cost = 0;

    for(var i=0;i<s.length;i++){
        let indvCost = 0;
        let sm = s[i][0]
        let lg = s[i][0];

        // row
        for(var j=0;j<s[i].length;j++){
            indvCost += s[i][j];
        }
        cost = Math.abs(15 - indvCost);
        indvCost = 0;

        //columns - check this before moving on
        for(var j=0;j<1;j++){
            for(var l=0;l<3;l++){
                indvCost += s[l][j]
            }
            cost = Math.abs(15 - indvCost);
        }
        

        //diagonals

    }

    return cost;
}
// console.log(formingMagicSquare([ [ 4, 9, 2 ], [ 3, 5, 7 ], [ 8, 1, 5 ] ]));
console.log(formingMagicSquare([ [ 4, 9, 2 ], [ 3, 5, 7 ], [ 9, 9, 5 ] ]));
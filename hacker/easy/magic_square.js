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
        var cost = Math.abs(15 - indvCost);
        indvCost = 0;

        //columns
        console.log(s[0])
        var counter = 0;
        for(var j=0;j<3;j++){
            for(var l=0;l<3;l++){
                console.log(s[j][l])
            }
            // indvCost += s[counter][j]
        }
        console.log()

        //diagonals

    }

    return cost;
}
// console.log(formingMagicSquare([ [ 4, 9, 2 ], [ 3, 5, 7 ], [ 8, 1, 5 ] ]));
console.log(formingMagicSquare([ [ 4, 9, 2 ], [ 3, 5, 7 ], [ 9, 9, 5 ] ]));
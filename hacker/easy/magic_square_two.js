function formingMagicSquare(s) {
    // Write your code here

    // if we change something we need to check the |/ as well
    var cost = 0;
    // rows
    for(let i=0;i<3;i++){
        let add = (s[i][0]+s[i][1]+s[i][2]);
        if(add != 15){
            console.log(15 - add)
            cost+= Math.abs(15 - add)
        }
    }

    // columns
    for(let i=0;i<3;i++){
        let add = (s[0][i]+s[1][i]+s[2][i]);
        if(add != 15){
            cost+= Math.abs(15 - add)
        }
    }

    //diagonals
    // let add1 = s[0][0]+s[1][1] +s[2][2]
    // if(add1 != 15 ){
    //     cost+= Math.abs(15 - add1)
    // }

    // let add2 = s[0][2]+s[1][1] +s[2][0]
    // if(add2 != 15 ){
    //     cost+= Math.abs(15 - add2)
    // }
    console.log()
    return cost;
}

// formingMagicSquare([ [ 4, 9, 2 ], [ 3, 5, 7 ], [ 8, 1, 5 ] ])
// console.log(formingMagicSquare( [[5, 3, 4], [1, 5, 8], [6, 4, 2]]))
    // 7
// console.log(formingMagicSquare( [[4, 5, 8], [2, 4, 1], [1,9,7]]))
    // 14
//console.log(formingMagicSquare( [[2, 9, 8], [4, 2, 7], [5, 6, 7]]))
    //21



function formingMagicSquareAgain(s) {
    const noDiganol = new Set(['s[0][1]','s[1][0]','s[1][2]','s[2][1]'])

    var cost = 0;
    // rows
    for(let i=0;i<3;i++){
        let add = (s[i][0]+s[i][1]+s[i][2]);
        if(add != 15){
            missing = Math.abs(15 - add)
            let row = s[i][0]+s[i][1]+s[i][2] 
            let col = s[0][i]+s[1][i]+s[2][i]
            //loop looking at up, across
            for(var j=0;j<3;j++){
                if(s[i][j] + missing < 9 && row <= 15 && col <= 15){
                    cost += missing;
                    break;
                }
                if((i === 0 && j === 0 || i === 0 && j === 2) || (j === 2 && i === 1) || (i === 2 && j === 1 || i === 2 && j === 2)){
                    let add1 = s[0][0]+s[1][1] +s[2][2]
                    if(add1 != 15 ){
                        cost+= Math.abs(15 - add1)
                        break;
                    }

                    let add2 = s[0][2]+s[1][1] +s[2][0]
                    if(add2 != 15 ){
                        cost+= Math.abs(15 - add2)
                        break;
                    }
                }
            }
        }
    }
    return cost;
}

// console.log(formingMagicSquareAgain([ [ 4, 9, 2 ], [ 3, 5, 7 ], [ 8, 1, 5 ] ]))
    // 1
// console.log(formingMagicSquareAgain( [[5, 3, 4], [1, 5, 8], [6, 4, 2]]))
// 7
console.log(formingMagicSquareAgain( [[4, 8, 2], [4, 5, 7], [6, 1, 6]]))
    // 4

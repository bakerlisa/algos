// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    var CatA = Math.abs(x - z );
    var CatB = Math.abs(y - z );

    if(CatA < CatB){
        return "Cat A"
    }else if(CatA > CatB){
        return "Cat B"
    }else if(CatA === CatB){
        return "Mouse C";
    }
}

console.log(catAndMouse(1,2,3));
function angryProfessor(k, a) {
    var students = 0
    

    for(const arriavelTime of a){
        students += arriavelTime <= 0;
    }

    return students >= k ?  "NO" : "YES";
}

// console.log(angryProfessor([4,3],[-2,-1,0,2]))
// console.log(angryProfessor([4,2],[0, -1, 2, 1]))
console.log(angryProfessor(3,[-1, -3, 4,2]))
console.log(angryProfessor(2,[0, -1, 2, 1]))



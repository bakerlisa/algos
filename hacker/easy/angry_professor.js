function angryProfessor(k, a) {
    var students = 0

    for(var i=0;i<=a.length;i++){
        if(a[i] <= 0){
            students++
        }   
    }
    console.log(`students ${students} : ${k}`)
    return students >= k ?  "YES" : "NO";
}

// console.log(angryProfessor([4,3],[-2,-1,0,2]))
// console.log(angryProfessor([4,2],[0, -1, 2, 1]))
console.log(angryProfessor(3,[-1, -3, 4,2]))
console.log(angryProfessor(2,[0, -1, 2, 1]))



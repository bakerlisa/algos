// Save The Prisoner

function saveThePrisoner(n, m, s) {
    var r = m % n

    if((r + s - 1) % n === 0){
        return n;
    }else{
        return ((r + s - 1) % n)
    }
}

// console.log(saveThePrisoner(5,2,2))
// 3
console.log(saveThePrisoner(5,2,1))
// 2
// console.log(saveThePrisoner(4,6,2))
// saveThePrisoner(4,6,2)

// ====================== NUMBER 2 ======================
// I had to go out and get help - https://www.youtube.com/watch?v=LeNU3WjrV_w

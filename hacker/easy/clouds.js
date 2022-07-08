function jumpingOnClouds(c, k) {
    let engery = 100;
    let newC = c.split(",");
    for(let i=0; i<k.length;i++ ){
        console.log(k[i])
        if(k[i] === 1){
            engery-=2;
        }else{
            engery-=1;
        } 
        i += newC[1] - 1;
    }
    console.log(engery)
}   

console.log(jumpingOnClouds('8,2',[0, 0, 1, 0, 0, 1, 1, 0]))
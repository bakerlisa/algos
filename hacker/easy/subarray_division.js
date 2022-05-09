function birthday(s, d, m) {
    // Write your code here
    var per = s[0];
    var total = 0;
    for(var i=1; i< s.length;i++){
        console.log( s[i]);
        console.log(per);
        console.log();
        if(per + s[i] === m){
            total++;
        }
        per = s[i];
    }
    console.log(total);
}

console.log(birthday([ 1, 2, 1, 3, 2 ],3,2));
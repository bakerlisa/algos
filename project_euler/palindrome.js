// console.log(999*999);


findPalindrome = (start,end) =>{
    var num1 = start*end;
    var num2 = "";
    for(i=0;i<num1.toString().length;i++){
        num2 = num1.toString().charAt(i) + num2;
    }

    if(num1 == num2){
        return num1;
    }else{
        end-=1;
        return findPalindrome(start,end);      
    }
}

console.log(findPalindrome(999,999));
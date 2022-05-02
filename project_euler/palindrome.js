// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

findPalindrome = (start,end) =>{
    var num1 = start*end;
    var num2 = "";

    for(i=0;i<num1.toString().length;i++){
        num2 = num1.toString().charAt(i) + num2;
    }
    if(num1 == num2){
        console.log(num1);
        return num1;
    }else{
        // doesnt go blow 100
        if(start > end || start == end){
            end-=1;
        }else if(end > start){
            start -= 1;
        }
        return findPalindrome(start,end);      
    }
}
//console.log(findPalindrome(999,999));

findPalindromeTwo = () => {
    let ans = 0;
    console.log("num");
    for(let i=999;i >=100; i--){
        for(let j=99;j>=100;j--){
            var num = i*j;
            
            var s = String(num);
            var rs = s.split('').reverse.join();
            if(s === rs){
                console.log(ans = Math.max(ans,num));
            }

        }
    }
}

findPalindromeTwo();
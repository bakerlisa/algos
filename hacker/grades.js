function gradingStudents(grades) {
    // Write your code here'
    for(let x=0;x<grades.length;x++){
        let numSt = grades[x].toString();
        if(grades[x] >= 100||  (grades[x] <= 33 && grades[x] >= 0 )){
            continue;
        }else{
            if(parseInt(numSt.charAt(1)) > 5 ){
                let increase = parseInt(numSt.charAt(0)) + 1;
                let numCheck =  increase.toString() + "0";
                if(grades[x] + 3 >  parseInt(numCheck)){
                    grades[x] = parseInt(numCheck);
                }  
            }else {
                let numCheckTwo = numSt.charAt(0) + "5";
                console.log(numCheckTwo)
                if(parseInt(grades[x]) + 3 > parseInt(numCheckTwo)){
                    grades[x] = parseInt(numCheckTwo);
                }
            } 
        } 
    }
    return grades;
}
console.log(gradingStudents([73, 67, 38, 33,53,94,16,2,99,57,53,70]));
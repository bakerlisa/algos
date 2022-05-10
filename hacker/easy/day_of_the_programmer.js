function dayOfProgrammer(year) {
    // Write your code here
    var days = 0;
    var month;
    var day;
    var daysMonths = {"jan":31,"feb":0,"mar":31,"apr":30,"may":31,"june":30,"july":31,"aug":31,"sep":30,"oct":31,"nov":30,"dec":31}

    if(year < 1700 || year > 2700){
        return "outside range";
    }else if(year > 1918){
        // Gregorian calendar
        if(year % 4 === 0 && year % 100 != 0 || year % 400 === 0){
            daysMonths['feb'] = 29;
        }else{
            daysMonths['feb'] = 28;
        }
    }else{
        // Julian calendar
        if(year % 4 === 0){
            daysMonths['feb'] = 29;
        }else{
            daysMonths['feb'] = 28;
        }
    }
    console.log(daysMonths);

    for (const [key, value] of Object.entries(daysMonths)) {
        if(days + value <= 256){
            console.log(value);
            days+=value;
        }else{
            month = key;
            console.log(days)
            day = (256 - days);
            break;
        }
    }

    // day formatting
    if(day < 10){
        day = "0" + day;
    } 

    //month
    switch(month) {
        case "jan":
            month = "01";
            break;
        case "feb":
            month = "02";
            break;
        case "mar":
            month = "03";
            break;
        case "apr":
            month = "04";
            break;
        case "may":
            month = "05";
            break;
        case "june":
            month = "06";
            break;
        case "july":
            month = "07";
            break;
        case "aug":
            month = "08";
            break;
        case "sep":
            month = "09";
            break;
        case "oct":
            month = "10";
            break;
        case "nov":
            month = "11";
            break;
        case "dec":
            month = "12";
            break;
    }
    if(year == 1918){
        return "26.09.1918"
    }else{
        return day+"."+month+"."+year
    }
}

console.log(dayOfProgrammer(1918));
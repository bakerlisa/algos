function dayOfProgrammer(year) {
    // Write your code here
    var days = 256;
    var month;
    var day;
    var daysMonths = {"01":31,"02":0,"03":31,"04":30,"05":31,"06":30,"07":31,"08":31,"09":30,"10":31,"11":30,"12":31}

    if(year < 1700){
        return "outside range";
    }else if(year > 1918){
        // Gregorian calendar
        if(year % 4 === 0 || year % 400 === 0 ){
            console.log("here")
            daysMonths['feb'] = 28
        }else{
            daysMonths['feb'] = 29
        }
    }else{
        // Julian calendar
        if(year % 2 === 0 ){
            daysMonths['feb'] = 27
        }else{
            daysMonths['feb'] = 26;
        }
    }

    for (const [key, value] of Object.entries(daysMonths)) {
        if(days - value < 0){
            month = key;
            day = value;
            break;
        }else{
            days-=value;
        }
    }
    
    // day
    if(day > days){
        day -= days;
    }else{
        day = days - day;
    }

    return day+"."+month+"."+year;
}

console.log(dayOfProgrammer(1900));
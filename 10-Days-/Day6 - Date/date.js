function getDayName(dateString) {
    let dayName;
    // Write your code here
     let date = new Date(dateString)
     
    if (date.getDay()==0){
        dayName="Sunday" ;
    }
    else if (date.getDay() ==1) {
        dayName ="Monday" ;
    }
    else if (date.getDay()==2) {
        dayName = "Tuesday" ;
    }
    else if (date.getDay()==3) {
        dayName = "Wednesday" ;
    }
    else if (date.getDay()==4) {
        dayName = "Thursday" ;
    }
    else if (date.getDay()==5) {
        dayName = "Friday" ;
    }
    else if (date.getDay()==6) {
        dayName = "Saturday" ;
    }
    
    return dayName;
}

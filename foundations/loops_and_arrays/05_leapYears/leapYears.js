const leapYears = function(year) {
    console.log(year % 100)
    console.log(year % 400)
    
    if (year % 100 == 0 && year % 4 == 0){
        if (year % 400 == 0){
            return true
        }
        else{
            return false
        }
    }
    else if (year % 4 == 0){
        return true
    }
    else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;

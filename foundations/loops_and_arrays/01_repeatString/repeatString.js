const repeatString = function(string, num) {
    let final_word = ""

    if (num >= 0){
        for (let i = 0 ; i < num; i ++){
            final_word += string
        }
        return final_word
    }
    else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;

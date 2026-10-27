const reverseString = function(string) {
    arr = Array.from(string)
    inverted_arr = []
    inverted_word = ""

    arr.forEach(element => {
        inverted_arr.splice(0, 0, element)
    })

    inverted_arr.forEach(element => {
        inverted_word += element
    })

    return inverted_word
};

// Do not edit below this line
module.exports = reverseString;

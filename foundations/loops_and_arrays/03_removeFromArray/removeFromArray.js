const removeFromArray = function(arr, ...theArgs) {
    let clean_arr = arr
    for (const arg of theArgs ){
        let indexes = []
        clean_arr.forEach((element, index) => {
            if (element == arg && typeof(element) == typeof(arg)){
                indexes.push(index)
            }
        })

        let move = 0
        for (const index of indexes){
            clean_arr.splice(index - move, 1)
            move += 1
        }
    }
    return clean_arr
};

// Do not edit below this line
module.exports = removeFromArray;

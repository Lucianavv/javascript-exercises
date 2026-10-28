const sumAll = function(num1, num2) {
    let args = []
    for (i = 0; i < arguments.length; i++){
        if (arguments[i] < 0 || !Number.isInteger(arguments[i])){
            return "ERROR"
        }
        else{
            args.push(arguments[i])
        }
    }
    args.sort()
    let difference = args.at(-1) - args[0]
    let sequence = []
    sequence.push(args[0])

    for(i = 0; i < difference; i ++){
        sequence.push(sequence.at(i) + 1)
    }
    
    let sum = sequence.reduce((sum, current) => sum + current, 0)
    return sum 
}
// Do not edit below this line
module.exports = sumAll;

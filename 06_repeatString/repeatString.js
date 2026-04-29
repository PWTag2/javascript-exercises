const repeatString = function(string, number) {
    if (number < 0) return "ERROR"
    let space = "";
    for (let i = 0; i < number; i++) {
        space += string;
    }
    return space
};

repeatString("hey", 3)

// Do not edit below this line
module.exports = repeatString;

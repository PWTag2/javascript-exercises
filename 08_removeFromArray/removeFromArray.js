
const removeFromArray = function(array, num) {
    const newArray = array.filter((i) => (i !== num)) 
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

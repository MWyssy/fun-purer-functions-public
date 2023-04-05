/*
This function should as its only argument take:

- an array of numbers

This function should return a new array of numbers with the last one removed

removeLastNumber([1, 2, 3, 4]);

should return 
[1,2,3]
*/
function removeLastNumber(numbers) {
    const copyNumbers = [...numbers];
    copyNumbers.pop();
    return copyNumbers;
};

module.exports = removeLastNumber;
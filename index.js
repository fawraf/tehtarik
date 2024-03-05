// index.js

// Function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// Function to check if a number is odd
function isOdd(number) {
    return !isEven(number);
}

// Exporting the functions to make them accessible to other modules
module.exports = {
    isEven,
    isOdd
};

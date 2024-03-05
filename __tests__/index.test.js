// __tests__/index.test.js

const { isEven, isOdd } = require('../index');

test('isEven function should return true for even numbers', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(4)).toBe(true);
});

test('isEven function should return false for odd numbers', () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(3)).toBe(false);
});

test('isOdd function should return true for odd numbers', () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(3)).toBe(true);
});

test('isOdd function should return false for even numbers', () => {
    expect(isOdd(2)).toBe(false);
    expect(isOdd(4)).toBe(false);
});

const calculator = require('./calculator');

describe('simply calculator test case', () => {

    test ('should return addition of two numbers', () => {
        expect(calculator.add(2,2)).toBe(4);
    })

    test ('should return addition of two numbers', () => {
        expect(calculator.subtract(2,2)).toBe(0);
    })

    test ('should return addition of two numbers', () => {
        expect(calculator.divide(2,2)).toBe(1);
    })

    test ('should return addition of two numbers', () => {
        expect(calculator.multiply(2,2)).toBe(4);
    })
})
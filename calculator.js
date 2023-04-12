class Calculator {
    constructor () {
        this.add();
        this.subtract();
        this.divide();
        this.multiply();
    }



    add(number1, number2){
        return number1 + number2;
    }

    subtract(number1, number2){
        return number1 - number2;
    }

    divide(number1, number2){
        return number1 / number2;
    }

    multiply(number1, number2){
        return number1 * number2;
    }
}

const calculator = new Calculator();

module.exports = calculator;

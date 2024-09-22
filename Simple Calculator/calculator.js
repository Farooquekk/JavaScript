const simpleCalculator = (num1, operator, num2) => {
    let result = undefined;
    switch (operator) {
        case '+':
            result = num1 + num2;
            console.log(`${num1} ${operator} ${num2} = ${result}`);
            break;
        case '-':
            result = num1 - num2;
            console.log(`${num1} ${operator} ${num2} = ${result}`);
            break;
        case '*':
            result = num1 * num2;
            console.log(`${num1} ${operator} ${num2} = ${result}`);
            break;
        case '/':
            result = num1 / num2;
            console.log(`${num1} ${operator} ${num2} = ${result}`);
            break;
        default:
            console.log('Invalid Input');
            break;
    }
}

simpleCalculator(100, '-', 19);

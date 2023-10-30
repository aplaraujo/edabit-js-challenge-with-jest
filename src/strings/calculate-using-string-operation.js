const calculate = (num1, num2, op) => {
    const operation = {
        "+": num1 + num2,
        "-": num1 - num2,
        "*": num1 * num2,
        "/": num1 / num2,
        "%": num1 % num2
    }
    return operation[num1, num2, op]
}

module.exports = calculate
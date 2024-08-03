/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let array = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            array.push("Fizz");
        }
        if (i % 5 === 0 && i % 3 !== 0) {
            array.push("Buzz");
        }
        if (i % 5 === 0 && i % 3 === 0) {
            array.push("FizzBuzz");
        }
        if (i % 3 !== 0 && i % 5 !== 0) {
            array.push(`${i}`);
        }
    }

    return array;

};
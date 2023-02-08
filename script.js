//////////////////////// 1 /////////////////////////

function getThirdPow(num) {
    return num ** 3;
}
console.log(getThirdPow(2) + getThirdPow(3));


/////////////////////// 2 //////////////////////////

function calculateIncome(salary) {
    console.log(`Размер заработной платы за вычетом налогов равен ${salary * 0.87}`);
}

let profit = prompt('Введите заработную плату до вычета налогов');
if (isNaN(profit)) {
    alert('Значение задано неверно')
}

calculateIncome(profit);


/////////////////////// 3 //////////////////////////

function getMax(num1, num2, num3) {
    let max = num1;
    if ((num1 > num2) && (num1 > num3)) {
        max = num1;
    }
    else if ((num2 > num1) && (num2 > num3)) {
        max = num2;
    }
    else max = num3;
    return max;
}

let number1 = prompt('Введите первое число');
let number2 = prompt('Введите второе число');
let number3 = prompt('Введите третье число');
console.log(`Max number is '${getMax(number1, number2, number3)}'`);


//////////////////////// 4 //////////////////////////

function calculateSum(num1, num2) {
    let result = num1 + num2;
    return result;
}
console.log(calculateSum(10, 3));

////////////////

function calculateDiff(num1, num2) {
    (num1 >= num2) ? (maxNum = num1) && (minNum = num2) : (maxNum = num2) && (minNum = num1);
    let result = maxNum - minNum;
    return result;
}
console.log(calculateDiff(20, 20));

////////////////

function calculateMultiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
console.log(calculateMultiply(5, 12));

////////////////

function calculateDivide(num1, num2) {
    let result = num1 / num2;
    return result;
}
console.log(calculateDivide(100, 20));
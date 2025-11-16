// code here, goodluck!!
'use strict';

// prompt-sync
const prompt = require('prompt-sync')({sigint: true});

// function for numbers
function getValidNumberInput(promptMessage) {
  let input;
  let num;
  do {
    input = prompt(promptMessage);
    num = Number(input);
  } while (isNaN(num));
  return num;
}

// function for operators
function getValidOperatorInput(promptMessage) {
  const validOperators = ['+', '-', '*', '/', '%', '**'];
  let operator;
  do {
    operator = prompt(promptMessage);
  } while (!validOperators.includes(operator));
  return operator;
}

// Add function
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero!";
  }
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

function power(a, b) {
  return a ** b;
}

// Calculator loop
while (true) {
  const num1 = getValidNumberInput('masukkan angka 1 : ');
  const num2 = getValidNumberInput('masukkan angka 2 : ');
  const operator = getValidOperatorInput('masukkan operasi perhitungan (+, -, *, /, %, **): ');

  let hasil;

  switch (operator) {
    case '+':
      hasil = add(num1, num2);
      break;
    case '-':
      hasil = subtract(num1, num2);
      break;
    case '*':
      hasil = multiply(num1, num2);
      break;
    case '/':
      hasil = divide(num1, num2);
      break;
    case '%':
      hasil = modulo(num1, num2);
      break;
    case '**':
      hasil = power(num1, num2);
      break;
    default:
      hasil = undefined;
  }

  console.log(`hasil: ${hasil}`);

  // hasil 
  if (hasil === undefined || hasil === null) {    
    console.log(hasil ?? "result is undefined or null, something went wrong!");
  } else if (typeof hasil === 'string') {    
    console.log(`Error Message: ${hasil}`);
  } else if (typeof hasil === 'number') {
    if (hasil > 0 && Number.isInteger(hasil)) {
      console.log('The result is a Positive and Integer number.');
    } else if (hasil > 0 && !Number.isInteger(hasil)) {
      console.log('The result is a Positive and Floating-point number.');
    } else if (hasil < 0 && Number.isInteger(hasil)) {
      console.log('The result is a Negative and Integer number.');
    } else if (hasil < 0 && !Number.isInteger(hasil)) {
      console.log('The result is a Negative and Floating-point number.');
    } else if (hasil === 0) {
      console.log('The result is Zero.');
    }

    // Even or Odd
    if (Number.isInteger(hasil)) {
      const evenOdd = (hasil % 2 === 0) ? 'Even' : 'Odd';
      console.log(`The result is ${evenOdd}.`);
    }

    if (hasil > 0 && (hasil % 2 === 0)) {
      console.log('The result is Positive and Even.');
    }
  } else {    
    console.log('Result type unexpected. Please check your inputs.');
  }

  // Exit
  const continueCalc = prompt('melanjutkan perhitungan? (ya/tidak)').toLowerCase();
  if (continueCalc === "tidak") {
    console.log('Terima kasih, sampai jumpa lagi!');
    break;
  }
}
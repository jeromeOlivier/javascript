// calculator challenge

function calculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'invalid operator';
  }
}

const first = calculator(5, 6, '*');
console.log(first);
const second = calculator(5, 6, '+');
console.log(second);
const third = calculator(5, 6, '%');
console.log(third);

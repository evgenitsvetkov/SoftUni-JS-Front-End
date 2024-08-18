function calculator(first, second, operation) {
    let operate = null;

  switch (operation) {
    case 'multiply':
        operate = (a, b) => a * b;
        break;
    case 'divide':
        operate = (a, b) => a / b;
        break;
    case 'add':
        operate = (a, b) => a + b;
        break;
    case 'subtract':
        operate = (a, b) => a - b;
        break;
  }

  const result = operate(first, second);

  console.log(result);
}

calculator(50,
    13,
    'substract');
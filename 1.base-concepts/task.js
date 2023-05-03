"use strict"
function solveEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;
  let arr = [];

  if (discriminant < 0) {
    // массив arr остается пустым
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    arr = [root];
  } else {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr = [root1, root2];
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNaN(contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNaN(amount)) {
    return `Параметр "Сумма кредита" содержит неправильное значение "${amount}"`;
  } else if (isNaN(countMonths)) {
    return `Параметр "Срок кредита в месяцах" содержит неправильное значение "${countMonths}"`;
  }
  
    const loanAmount = amount - contribution;
    const monthlyInterestRate = percent / 12 / 100;
    const monthlyPayment = loanAmount * (monthlyInterestRate + (monthlyInterestRate / (((1 + monthlyInterestRate) ** countMonths) - 1)));
    const totalPayment = countMonths * monthlyPayment;
  
    return Number(totalPayment.toFixed(2));
}
  
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
  if (typeof percent !== "number" || typeof contribution !== "number" || typeof amount !== "number" || typeof countMonths !== "number") {
    return false;
  }

  const monthlyPercent = percent / 100 / 12;
  const creditBody = amount - contribution;

  const monthlyPayment = creditBody * (monthlyPercent + monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1));
  const totalAmount = monthlyPayment * countMonths;

  return +totalAmount.toFixed(2);
}
  
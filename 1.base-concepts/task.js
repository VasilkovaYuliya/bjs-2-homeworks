"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  
   let oneRoot;
  let twoRoot;
  let d = Math.pow(b, 2) - 4 * a * c;
  
 
  if (d === 0) {
    oneRoot = -b/(2*a);
    arr.push(oneRoot);
    console.log(arr);
  } else if (d > 0) {
    oneRoot = (-b + Math.sqrt(d) )/(2*a);
    twoRoot = (-b - Math.sqrt(d) )/(2*a);
    arr.push(oneRoot);
    arr.push(twoRoot);
    console.log("Первый корень =" + arr[0] + "," + "Второй корень =" + arr[1])  
  }
   return arr;
  }
  
  solveEquation(1, 2, 3);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent;
  let bodyCredit;
  let monthlyPayment;
  let totalSum;

   if (isNaN(percent) ||
     isNaN(contribution) ||
     isNaN(amount) ||
     isNaN(countMonths)) 
    { 
    return false;
    }
   
  monthPercent = percent / 100 / 12;
  bodyCredit = amount - contribution;
  monthlyPayment = bodyCredit * (monthPercent + (monthPercent / (((1 + monthPercent) ** countMonths) - 1)));
  totalSum = parseFloat((monthlyPayment * countMonths).toFixed(2));
  return totalSum;
}
calculateTotalMortgage(10, 0, 50000, 12);

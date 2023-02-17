function getArrayParams(...arr) {
let min, max, sum, avg;
min = arr[0];
max = arr[0];
sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] < min) {
    min = arr[i];
  }
  sum += arr[i];
}
  avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}
getArrayParams(-99,99,10);



function summElementsWorker(...arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
return sum;
}
summElementsWorker(7,9,5,43);

function differenceMaxMinWorker(...arr) {
let max = arr[0];
let min = arr[0];

if (arr.length > 0){
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) 
          max = arr[i];
    if (arr[i] < min) 
          min = arr[i];
 }
return max - min;
}
return 0;
}
differenceMaxMinWorker(10, 10, 11, 20, 10);

function differenceEvenOddWorker(...arr) {
let sumEvenElement = 0;
let sumOddElement = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    sumEvenElement += arr[i];
  } else {
    sumOddElement += arr[i];
  }
}
return sumEvenElement - sumOddElement;
}
differenceEvenOddWorker(1, 2, 3, 4, 5, 6, 7, 8, 9);

function averageEvenElementsWorker(...arr) {
let sumEvenElement = 0;
let countEvenElement = 0;
if (arr.length > 0){
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    sumEvenElement += arr[i];
    countEvenElement ++;
  }
 }
return (sumEvenElement/countEvenElement);
}
return 0;
}
averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9);

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
  const res = func(...arrOfArr[i]);
    if (res > maxWorkerResult) 
    maxWorkerResult = res;
  }
  return maxWorkerResult;
}
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
makeWork(arr, summElementsWorker);
makeWork(arr, differenceMaxMinWorker);
makeWork(arr, differenceEvenOddWorker);
makeWork(arr, averageEvenElementsWorker);
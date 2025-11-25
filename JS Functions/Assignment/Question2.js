function applyOperation(numbers, operation) {
  let result = [];
  for (let num of numbers) {
    result.push(operation(num));
  }
  return result;
}

const nums = [1, 2, 3, 4];

// Double
console.log(applyOperation(nums, n => n * 2));

// Square
console.log(applyOperation(nums, n => n * n));

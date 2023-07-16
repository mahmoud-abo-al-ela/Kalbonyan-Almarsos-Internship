const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const bigNums = numbers.filter((val) => val > 5);
console.log(bigNums);

const mappedNums = numbers.map((val) => ({ num: val }));
console.log(mappedNums);

const multiNums = numbers.reduce((result, value) => result * value);
console.log(multiNums);

function findMax(...nums) {
  let numMax = nums[0];
  for (const num of nums) {
    if (num > numMax) {
      numMax = num;
    }
  }
  return numMax;
}

console.log(findMax(...numbers));

function findMinMax(...nums) {
  let numMax = nums[0];
  let numMin = nums[0];
  for (const num of nums) {
    if (num > numMax) {
      numMax = num;
    }
    if (num < numMin) {
      numMin = num;
    }
  }
  return [numMin, numMax];
}

const [min, max] = findMinMax(...numbers);

console.log(min, max);

const newSet = new Set();
newSet.add(1);
newSet.add(2);
newSet.add(2);

console.log(newSet);

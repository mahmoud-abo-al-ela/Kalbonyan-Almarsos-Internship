const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber >= 0.7) {
  alert(`random number: ${randomNumber}`);
}

let arr = [1, 2, 3, 4, 5];

for (let value of arr) {
  console.log(value);
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

const randomNumber2 = Math.random();

if (
  (randomNumber > 0.7 && randomNumber2 > 0.7) ||
  randomNumber < 0.2 ||
  randomNumber2 < 0.2
) {
  alert(
    `random number-1: ${randomNumber} and random number-2: ${randomNumber2}`
  );
}

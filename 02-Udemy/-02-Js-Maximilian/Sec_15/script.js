// function taxCalculator(tax) {
//   function calculateTax(amount) {
//     return amount * tax;
//   }
//   return calculateTax;
// }

// const calculateVat = taxCalculator(0.2);
// const calculateVat2 = taxCalculator(0.3);

// console.log(calculateVat(100));
// console.log(calculateVat2(200));

// let user = "mo";

// function greetUser() {
//   console.log("hi " + user);
// }

// user = "ali";
// greetUser();

// function power(x,y) {
//   let result = 1;
//   for (let i = 0; i < y; i++){
//     result *= x;
//   }
//   return result;
// }

// power(3, 3);

// function recursion(x, y) {
//   // if (y === 1) {
//   //   return x;
//   // }
//   // return x * recursion(x, y - 1);
//   return y === 1 ? 1 : x * recursion(x, y - 1);
// }
// console.log(recursion(2, 3));

const me = {
  name: "Mo",
  friends: [
    {
      name: "ali",
      friends: [
        {
          name: "koko",
        },
        {
          name: "joe",
        },
      ],
    },
    {
      name: "mena",
      friends: [
        {
          name: "mera",
        },
      ],
    },
  ],
};

function getFriends(person) {
  const names = [];
  if (!person.friends) {
    return [];
  }
  for (const friend of person.friends) {
    names.push(friend.name);
    names.push(...getFriends(friend));
  }
  return names;
}

console.log(getFriends(me));

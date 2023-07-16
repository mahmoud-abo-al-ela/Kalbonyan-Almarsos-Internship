const sayHello = (name) => console.log("Hi " + name);
const sayHello2 = (name, phrase) => console.log(phrase + " " + name);
const sayHello3 = () => console.log("Hi");
const sayHello4 = (name) => "Hi " + name;
const sayHello5 = (name, phrase = "hi") => console.log(phrase + " " + name);

sayHello("mahmoud");
sayHello2("mo", "hi");
sayHello3();
console.log(sayHello4("mo"));
sayHello5("mahmoud");

function checkInput(val, ...strs) {
  let hasEmpty = false;
  for (const str of strs) {
    if (!str) {
      hasEmpty = true;
      console.log("Empty");
      break;
    }
  }
  if (!hasEmpty) {
    val();
  }
}

checkInput(() => {
  console.log("Not Empty");
}, "ali");

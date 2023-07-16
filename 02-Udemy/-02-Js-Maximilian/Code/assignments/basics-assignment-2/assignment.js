const task3Element = document.getElementById("task-3");

function alert1() {
  alert("Hello world");
}

function alert2(name) {
  alert("Hello" + name);
}

alert1();
alert2("mahmoud");

task3Element.addEventListener("click", alert);

function alert3(str1, str2, str3) {
  return str1 + str2 + str3;
}

alert(alert3("mahmoud", "ali", "mo"));

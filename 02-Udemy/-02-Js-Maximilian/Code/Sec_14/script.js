const button = document.querySelector("button");

const buttonClick = (event) => {
  event.target.disabled = true;
  console.log(event);
};

const anotherClick = () => {
  console.log("You clicked");
};

// button.onclick = buttonClick;
// button.onclick = anotherClick;

const btnBind = buttonClick.bind(this);

// buttons.addEventListener("click", buttonClick);
// setTimeout(() => {
//   button.removeEventListener("click", btnBind);
// }, 2000);

// buttons.forEach((btn) => {
//   btn.addEventListener("click", buttonClick);
// });

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector("div");
div.addEventListener("click", (event) => {
  console.log("div");
  console.log(event);
});

button.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("btn");
  console.log(event);
});

const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

// listItems.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     event.target.classlist.toggle("highlight");
//   });
// });

list.addEventListener("click", (event) => {
  // event.target.classList.toggle("highlight");
  event.target.closest("li").classList.toggle("highlight");
});

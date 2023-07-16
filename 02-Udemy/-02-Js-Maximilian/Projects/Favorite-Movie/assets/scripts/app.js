const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector("#add-modal");
// const addMovieModal = document.body.children[1];
const startAddMovieBtn = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelMovieBtn = addMovieModal.querySelector(".btn--passive");
const addMovieBtn = cancelMovieBtn.nextElementSibling;
const userInputs = document.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");

const addBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const movies = [];

const updateUi = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const closeMovieDeletion = () => {
  addBackdrop();
  deleteMovieModal.classList.remove("visible");
};

const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
  closeMovieDeletion();
  updateUi();
};

const deleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add("visible");
  addBackdrop();
  const cancelDeletion = deleteMovieModal.querySelector(".btn--passive");
  let confirmDeletion = deleteMovieModal.querySelector(".btn--danger");
  confirmDeletion.replaceWith(confirmDeletion.cloneNode(true));
  confirmDeletion = deleteMovieModal.querySelector(".btn--danger");
  cancelDeletion.removeEventListener("click", cancelDeletion);
  cancelDeletion.addEventListener("click", closeMovieDeletion);
  confirmDeletion.addEventListener("click", deleteMovie.bind(null, movieId));
};

const displayMovies = (id, title, image, rate) => {
  const movieElement = document.createElement("li");
  movieElement.className = "movie-element";
  movieElement.innerHTML = `
  <div class="movie-element__image">
    <img src="${image}" alt="${title}" >
  </div>
  <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rate}/5 stars</p>
  </div>
  `;
  movieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById("movie-list");
  listRoot.append(movieElement);
};

const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
};

const showMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  addBackdrop();
};

const cancelBtn = () => {
  closeMovieModal();
  addBackdrop();
  clearInputValue();
};

const clearInputValue = () => {
  for (let userInput of userInputs) {
    userInput.value = "";
  }
};

const addBtn = () => {
  const inputTitle = userInputs[0].value;
  const inputLink = userInputs[1].value;
  const inputRate = userInputs[2].value;
  if (
    inputTitle.trim() === "" ||
    inputLink.trim() === "" ||
    inputRate.trim() === "" ||
    +inputRate < 1 ||
    +inputRate > 5
  ) {
    alert("Please enter valid values.");
    return;
  }
  const addMovie = {
    id: Math.random().toString(),
    title: inputTitle,
    image: inputLink,
    rate: inputRate,
  };
  movies.push(addMovie);
  console.log(movies);
  closeMovieModal();
  clearInputValue();
  displayMovies(addMovie.id, addMovie.title, addMovie.image, addMovie.rate);
  updateUi();
  addBackdrop();
};

const backdropCancel = () => {
  closeMovieModal();
  cancelBtn();
  clearInputValue();
};

startAddMovieBtn.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropCancel);
cancelMovieBtn.addEventListener("click", cancelBtn);
addMovieBtn.addEventListener("click", addBtn);

import movies from "./data.js";
import { renderMovies } from "./render-movies.js";
import { sortMovies } from "./sort.js";

const moviesContainer = document.querySelector("[data-movies]");
renderMovies(movies, moviesContainer);

// сортування
const select = document.querySelector("[data-sort]");

const handleSort = (event) => {
  const query = event.target.value;
  console.log(query);
  const sortedMovies = sortMovies(movies, query);
  renderMovies(sortedMovies, moviesContainer);
};

select.addEventListener("change", handleSort);

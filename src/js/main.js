import movies from "./data.js";
import { renderMovies } from "./render-movies.js";
import { searchMovie } from "./search.js";
import { sortMovies } from "./sort.js";


const moviesContainer = document.querySelector("[data-movies]");
renderMovies(movies, moviesContainer);


// SEARCH ================= START
const input = document.querySelector("[data-search]");

const handleSeacrh = (e) => {
  const query = e.target.value.toLowerCase();
  const searchedMovies = searchMovie(query, movies);
  renderMovies(searchedMovies, moviesContainer);
};

input.addEventListener("input", handleSeacrh);
// SEARCH ================= END

// сортування
const select = document.querySelector("[data-sort]");

const handleSort = (event) => {
  const query = event.target.value;
  console.log(query);
  const sortedMovies = sortMovies(movies, query);
  renderMovies(sortedMovies, moviesContainer);
};

select.addEventListener("change", handleSort);


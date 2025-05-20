import movies from "./data.js";
import { renderMovies } from "./render-movies.js";
import { filterByGenre } from "./filter-genre.js";

const moviesContainer = document.querySelector("[data-movies]");
renderMovies(movies, moviesContainer);

const filterByGenreButton = document.querySelector("[data-filter]");
const hendleFilter = (event) => {
  if (event.target.tagName === "BUTTON") {
    const genre = event.target.dataset.ganre;

    const filteredFilms = filterByGenre(genre, movies);
    renderMovies(filteredFilms, moviesContainer);
  }
};

filterByGenreButton.addEventListener("click", hendleFilter);

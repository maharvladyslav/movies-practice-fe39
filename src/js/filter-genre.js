export const filterByGenre = (genre, films) => {
  const filteredMovies = films.filter((film) => film.genre.includes(genre));
  return filteredMovies;
};

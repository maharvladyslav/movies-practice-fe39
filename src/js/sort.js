export const sortMovies = (movies, query) => {
  const sortedMovies = [...movies].sort((a, b) => {
    if (query === "rating") {
      return b.rating - a.rating;
    } else if (query === "year") {
      return b.year - a.year;
    }
  });
  return sortedMovies;
};

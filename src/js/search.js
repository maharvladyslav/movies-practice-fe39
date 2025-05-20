export const searchMovie = (query, movies) => {
  const searchResult = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(query) ||
      movie.description.toLowerCase().includes(query)
  );
  return searchResult;
};

export const renderMovies = (movies, container) => {
  const moviesHTML = `<ul class="movies-list">
    ${movies
      .map(
        (movie) => `<li class="movies-item">
                <article class="movie">
                  <div class="movie-photo">
                    <img src="${movie.poster}" alt="Постер ${movie.title}" />
                  </div>
                  <div class="movie-info">
                    <h2 class="movie-title">${movie.title}</h2>
                    <p class="movie-year">${movie.year}</p>
                    <p class="movie-description">${movie.description}</p>
                    <p class="movie-ganre">${movie.genre.join(", ")}</p>
                    <p class="movie-rating">${movie.rating}</p>
                  </div>
                </article>
              </li>`
      )
      .join("")}
    </ul>`;

  container ? (container.innerHTML = moviesHTML) : null;
};

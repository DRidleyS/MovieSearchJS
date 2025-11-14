document.getElementById('link__Input').onclick = function() {
window.location.href = '/MovieSearchJS/index.html';}
const movieListEl = document.querySelector(".movies")
const query = ""


async function renderMarvelMovies() {
    const movies = await fetch(`https://www.omdbapi.com/?s=avengers&plot=full&apikey=89170ce8`);
    const moviesData = await movies.json();
    movieListEl.innerHTML = moviesData.Search.map(movie => movieHTML(movie)).join('');
}


function movieHTML(movie) {
    return `
    <li class="movie-card">
  <a href="${movie.Poster}" target="_blank" class="movie-link">
    <div class="movie-poster">
      <img src="${movie.Poster}" alt="${movie.Title} Poster" />
    </div>
    <div class="movie-details">
      <h2 class="movie-title">${movie.Title}</h2>
      <p class="movie-year">Released: ${movie.Year}</p>
    </div>
  </a>
</li>
    `
}

renderMarvelMovies()
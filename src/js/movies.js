import movies from '../assets/data/movies.json';

// get a reference to my HTML container

export default function movieCards() {
  const moviesContainer = document.querySelector('.movies');

  // generate html for each movie

  movies.forEach((movie) => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');

    movieElement.innerHTML = `
        <h2>${movie.title}<h2>
        <img src="${movie.image}" alt="${movie.title}">
        <p>${movie.description}</p>
        `;

    moviesContainer.appendChild(movieElement);
  });
}

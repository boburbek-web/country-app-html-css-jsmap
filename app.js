const searchInput = document.querySelector('.search');
const btn = document.querySelector('.btn');
const mainContent = document.querySelector('.main-content');

let res = null;

async function getMovies() {
  const response = await fetch(`http://www.omdbapi.com/?apikey=77d01f6c&s=${searchInput.value}`);
  const movies = await response.json();

  console.log(searchInput.value);
  console.log(movies.Search);

  const cards = movies.Search.map((movie) => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src=${movie.Poster}/>
      <h4>${movie.Title}</h4>
      <span>${movie.Year}-${movie.Type}</span> 
    `;

    return card;
  });

  mainContent.innerHTML = '';
  cards.forEach((card) => {
    mainContent.appendChild(card);
  });
}

btn.addEventListener('click', getMovies);

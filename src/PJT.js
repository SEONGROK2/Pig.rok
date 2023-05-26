window.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector("#search-input");
    searchInput.focus();
  });
  
  //[4] 영화 검색 UI 구헌
  const handleSearch = (event) => {
    event.preventDefault();
    const searchInput = document.querySelector("#search-input");
  
    const searchKeyword = searchInput.value.toLowerCase();
    const movieCards = document.querySelectorAll(".movie_card");
  
    movieCards.forEach((card) => {
      const title = card.querySelector("h3").textContent.toLowerCase();
  
      if (title.indexOf(searchKeyword) !== -1) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  };
  
  const fetchMovieData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NThhODc2ZTY5NDA4NWY4YTA1MmQyNjc5MTRhY2RlMiIsInN1YiI6IjYxYzNjZjY5MzdiM2E5MDBjMzQ2YzYyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pPkre3BdMQtujbkqtPmW7TC_022A-ZR2M_ZShzd_kDU",
      },
    };
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );
    const data = await response.json();
    return data.results;
  };
  
  // [3] 영화정보 카드 리스트 UI 구현
  const createMovieCards = async () => {
    const movies = await fetchMovieData();
    const cardList = document.querySelector(".card_box");
    cardList.innerHTML = movies
      .map(
        (movie) => `
          <div class="movie_card" id=${movie.id}>
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
              <h3>${movie.title}</h3>
              <p>${movie.overview}</p>
              <p>Rating: ${movie.vote_average}</p>
          </div>`
      )
      .join("");
  
    cardList.addEventListener("click", ({ target }) => {
      if (target !== cardList) {
        if (target.className === "movie_card") {
          alert(`영화 id: ${target.id}`);
        } else {
          alert(`영화 id: ${target.parentNode.id}`);
        }
      }
    });
  };
  
  createMovieCards();
  
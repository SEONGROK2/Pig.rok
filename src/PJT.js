// 영화 객체를 받아서 해당 영화의 카드 요소를 생성
function createMovieCard(movie) {
  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  img.src = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
  card.appendChild(img);

  const title = document.createElement('h2');
  title.textContent = movie.title;
  card.appendChild(title);

  const overview = document.createElement('p');
  overview.textContent = movie.overview;
  card.appendChild(overview);

  const vote = document.createElement('p');
  vote.textContent = 'Vote Average: ' + movie.vote_average;
  card.appendChild(vote);

  // card 요소에 클릭 이벤트 리스너를 추가하고, 
  // 클릭이 발생하면 해당 card에 연결된 영화의 ID를 경고창으로 표시하는 기능
  card.addEventListener('click', () => {
    alert('Movie ID: ' + movie.id);
  });

  return card;
}

// 영화 데이터 배열을 받아서 각 영화별로 createMovieCard 함수를 호출하여 카드 요소를 생성하고 카드 요소들을 배열로 반환
function createMovieCards(movies) {
  const movieCards = movies.map((movie) => {
    return createMovieCard(movie);
  });

  return movieCards;
}

// 초기에 빈 배열로 선언 => 영화 데이터를 담을 공간을 미리 마련
const movies = [];

// movieCards를 추가할 컨테이너 요소를 getElementById를 사용하여 가져옴
// "getElementById" 함수는HTML 문서에서 특정 id 값을 가진 요소를 찾는 메서드
const container = document.getElementById('movie-container');

// "createMovieCards" 함수를 사용하여 movies 배열의 영화 데이터로부터 카드 요소들을 생성 
const movieCards = createMovieCards(movies);
movieCards.forEach((card) => {
  container.appendChild(card);
});

// "displayMovies" 함수는 영화 데이터 배열을 받아와서 각 영화별로 카드 요소를 생성하고 화면에 표시하는 역할
function displayMovies(movies) {
  const movieList = document.getElementById('movie-container');

  if (movieList) {
    movies.forEach((movie) => {
      const card = createMovieCard(movie);
      movieList.appendChild(card);
    });
  } else {
    console.log('Error: Cannot find movieList element');
  }
}


// fetch를 사용하여 API를 통해 영화 데이터를 가져와 영화 배열을 추출하고
// 추출된 영화 배열을 "displayMovies" 함수로 전달
const apiKey = 'd2cb7a26ef8dcb6fe631fff062f6d166';
const apiUrl = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&language=ko-Kr';

function fetchMovies() {
  fetch(apiUrl + '&api_key=' + apiKey)
    .then((response) => response.json())
    .then((data) => {
      const movies = data.results;
      displayMovies(movies);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
}

fetchMovies();

// // [4] 영화 검색 UI 구헌
// const handleSearch = (event) => {
//   event.preventDefault();
//   const searchInput = document.querySelector("#search_input");

//   const searchKeyword = searchInput.value.toLowerCase();
//   const movieCards = document.querySelectorAll(".card");

//   movieCards.forEach((card) => {
//     const title = card.querySelector("h2").textContent.toLowerCase();

//     if (title.indexOf(searchKeyword) !== -1) {
//       // 값 block 
//       card.style.display = "";
//     } else {
//       card.style.display = "none";
//     }
//   });
// };

// 'movie-container'라는 id를 가진 요소를 'movieList' 변수에 저장함.
function displayMovies(movies) {
  const movieList = document.getElementById('movie-container');

  // 기존에 표시된 영화 카드를 모두 제거
  while (movieList.firstChild) {
    movieList.removeChild(movieList.firstChild);
  }
  // 'createMovieCards' 함수를 사용하여 영화 카드를 생성하고 'movieList'에 추가
  if (movies.length > 0) {
    const movieCards = createMovieCards(movies);
    movieCards.forEach((card) => {
      movieList.appendChild(card);
    });
  // 영화가 없는 경우 '검색 결과가 없습니다.'라는 메세지를 표시  
  } else {
    const message = document.createElement('p');
    message.textContent = '검색 결과가 없습니다.';
    movieList.appendChild(message);
  }
}

// 'searchMovies(searchTerm)' 는 영화 검색 및 필터링을 수행
// 'searchTerm' 매개변수로 전달된 검색어를 사용하여 'moviesData'배열을 검색하고,
// 제목에 검색어를 사용하여 'moviesData' 배열을 검색하고,
// 제목에 검색어가 포함된 영화들로 이루어진 'filteredMovies' 배열을 생성
function searchMovies(searchTerm) {
  const filteredMovies = moviesData.filter((movie) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
// 'displayMovies' 함수를 호출하여 'filteredMovies' 배열을 표시
  displayMovies(filteredMovies);
}

// 'handleSearch(event)' 검색 버튼 클릭 또는 폼 제출 이벤트 처리 함수
function handleSearch(event) {
  event.preventDefault();
  const searchInput = document.getElementById('search_input');
  const searchTerm = searchInput.value.trim();

  // search_input이라는 id를 가진 HTML 입력 요소에서 검색어를 가져옴
  // 검색어가 있는 경우 =>'searchMovies' 함수를 호출하여 검색어를 수행
  if (searchTerm !== '') {
    searchMovies(searchTerm);
  // 검색어가 없는 경우 =>'displayMovies' 함수를 호출하여 전체 영화 목록을 표시
  } else {
    displayMovies(moviesData);
  }

  // 검색 입력 필드를 비움
  searchInput.value = '';
}

// 초기 영화 목록 로딩하는 역할
function fetchMovies() {
  // apiKey, apiUrl 변수를 사용하여 API 요청을 보냄
  const apiKey = 'd2cb7a26ef8dcb6fe631fff062f6d166';
  const apiUrl = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&language=ko-KR';
  
  // JSON 형식을 변환한 뒤, 'data.results'를 'moviesData' 배열에 저장
  fetch(apiUrl + '&api_key=' + apiKey)
    .then((response) => response.json())
    .then((data) => {
      moviesData = data.results;
      displayMovies(moviesData);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
}

// 초기 영화 목록 로딩
fetchMovies();
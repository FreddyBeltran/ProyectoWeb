
let username = window.localStorage.getItem('userNameValue');
let logInStatus = window.localStorage.getItem('logStatusValue');

async function postData(url, data) {
  const response = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)})
  {
    return response.json();
  }
}

function init() {
  postData(`http://189.159.38.136:4200/post/movieIDByUserName`, {username: username}).then((data) => {
    movies = [];
    for(movie of data) {
      movies.push(movie.movieid);
    }
    console.log("Movies: ", movies)
    postData(`http://189.159.38.136:4200/post/movieListByUserName`, {username: username}).then((listData) => {
      console.log("List Name: ", listData[0].nombre);
      console.log("List Desc: ", listData[0].descripcion);
    });
  });
}

if(logInStatus == 200 && username !== null) {
  init();
  console.log("ESTAS LOGEADO.");
} else {
  console.log("NO ESTAS LOGEADO.");
}
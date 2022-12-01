
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
  postData(`http://189.159.38.136:4200/post/movierating`, {username: username, movieid: movieid}).then((data) => {
    console.log(data);
  });
}

if(logInStatus == 200 && username !== null) {
  init();
  console.log("ESTAS LOGEADO.");
} else {
  console.log("NO ESTAS LOGEADO.");
}
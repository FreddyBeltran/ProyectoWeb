//window.localStorage.clear();

console.log("ESTE ES UN LOG DE STORAGE:");
console.log(window.localStorage.getItem('userNameValue'));
console.log(window.localStorage.getItem('logStatusValue'));

let userName = window.localStorage.getItem('userNameValue');
let logStatus = window.localStorage.getItem('logStatusValue');

//////////////////////////////////////////////////////////////////////////////
async function addMovie(url, data)
{
  const response = await fetch
  (
    url,
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }
  )
  {
    return response;
  }
}

/*
function addMovieID(movieIdToAdd)
{
  getIDs(`http://189.159.38.136:4200/post/addmovie`, {username: userName, movieid: movieIdToAdd}).then
  (
    (data) =>
    {
      console.log(data);
    }
  );
}
*/
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


let userListLink = document.getElementById("personalListLink");
userListLink.setAttribute('style', 'cursor: pointer');

userListLink.onclick = function()
{
  if(window.localStorage.getItem('logStatusValue') == null)
  {
    alert("NO HAZ INICIADO SESION. PARA VER TU LISTA POR FAVOR HAZ LOG IN.");
  }
  else
  {
    window.location.href="userList.html";
  }
}














/////////////////////////////////////////////////////////////////////////////////
function funcLogOut()
{
  window.localStorage.clear();
  window.location.reload();
}



let logInUser = window.localStorage.getItem('userNameValue');
let logInStatus = window.localStorage.getItem('logStatusValue');




const userStatusDiv = document.getElementById("userStatus");

const logInElement = document.createElement('a');

if(logInStatus !== null)
{
//  logInElement.setAttribute('href', 'funcLogOut');
  logInElement.innerText = 'Log Out';
  logInElement.setAttribute('style', 'cursor: pointer');

  logInElement.onclick = function()
  {
    window.localStorage.clear();
    window.location.reload();
  }

  const aUsername= document.createElement('a');
  let displayText = "¡Hola " + window.localStorage.getItem('userNameValue') + "!";
  aUsername.innerHTML = displayText.fontsize(6);
  aUsername.setAttribute('href', '#');
  aUsername.setAttribute('style', 'color: white')

  const spaceUserName = document.getElementById("spaceForUsername");
  spaceUserName.appendChild(aUsername)
}
else
{
  logInElement.setAttribute('href', 'userLogIn.html');
  logInElement.innerText = 'Log In';
}

const registerElement = document.createElement('a');
registerElement.setAttribute('href', 'userRegistration.html');
registerElement.innerText = 'Register';

userStatusDiv.appendChild(logInElement);
userStatusDiv.appendChild(registerElement);




const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&page=1';
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&query=";


const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

const singleViewNameDiv = document.getElementById("movieNameSingleView");
returnMovies(APILINK)

function returnMovies(url)
{
  fetch(url).then(res => res.json()).then
  (function(data)
    {
      console.log(data.results);

      data.results.forEach
      (element =>
        {
          const div_card = document.createElement('div');
          div_card.setAttribute('class', 'card');

          const div_row = document.createElement('div');
          div_row.setAttribute('class', 'row');

          const div_column = document.createElement('div');
          div_column.setAttribute('class', 'column');

          const image = document.createElement('img');
          image.setAttribute('class', 'thumbnail');
          image.setAttribute('id', 'image');
          image.setAttribute('width', 250);

          const title = document.createElement('h3');
          title.setAttribute('id', 'title');

          const center = document.createElement('center');

          title.innerHTML = `${element.title}`;
          image.src = IMG_PATH + element.poster_path;

          let oneTitle = `${element.title}`;
          let twoImg = IMG_PATH + element.poster_path;
          let threeOverview = element.overview;
          let fourDate = element.release_date;

          //////////////////////////////////////////////////////////////////////////////////
          const aLink = document.createElement('a');
          let ID = element.id;
          aLink.setAttribute('href', 'singleView2.html?ID=' + ID);
          aLink.innerText = 'Go to details  ';
          //////////////////////////////////////////////////////////////////////////////////



          //////////////////////////////////////////////////////////////////////////////////
          const aUserList = document.createElement('a');
          aUserList.setAttribute('href', '#');
          aUserList.innerText = '       Add to User list';

          aUserList.onclick = function()
          {
            addMovie(`http://189.159.38.136:4200/post/addmovie`, {username: userName, movieid: ID}).then
            (
              (data) =>
              {
                console.log(data);
              }
            );
          }
          //////////////////////////////////////////////////////////////////////////////////


          const divLink = document.createElement('div');
          divLink.appendChild(aLink);
          const divUser = document.createElement('div');
          divUser.appendChild(aUserList);
          const divLinks = document.createElement('div');
          divLinks.appendChild(divLink);
          divLinks.appendChild(divUser);


          center.appendChild(image);
          div_card.appendChild(center);
          div_card.appendChild(title);
          //div_card.appendChild(aLink);
          //div_card.appendChild(aUserList);
          div_card.appendChild(divLinks);
          div_column.appendChild(div_card);
          div_row.appendChild(div_column);

          main.appendChild(div_row);
        }
      );
    }
  );
}

form.addEventListener
("submit", (e) =>
  {
    e.preventDefault();
    main.innerHTML = '';

    const searchItem = search.value;

    if (searchItem)
    {
      returnMovies(SEARCHAPI + searchItem);
      search.value = "";
    }
  }
);
